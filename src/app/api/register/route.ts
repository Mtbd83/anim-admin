import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";

import { and, eq } from "drizzle-orm";
import { z } from "zod";

import { auth } from "@/lib/auth";
import { db } from "@/db/client";
import {
  accounts,
  animals,
  familyMembers,
  organizationInvitations,
  organizationMembers,
  organizations,
  sessions,
  users,
} from "@/db/schema";
import { generateCandidateSlug } from "@/lib/utils/slug";

const registerSchema = z
  .object({
    name: z.string().min(1).max(255),
    email: z.string().email(),
    password: z.string().min(8).max(128),
    organizationName: z.string().min(1).max(255).optional(),
    organizationSlug: z.string().min(1).max(255).optional(),
    organizationDescription: z.string().max(1000).optional(),
    invitationToken: z.string().min(1).optional(),
    rememberMe: z.boolean().optional(),
  })
  .superRefine((value, ctx) => {
    const hasInvitation = Boolean(value.invitationToken?.length);
    if (!hasInvitation && !value.organizationName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "organizationName is required when no invitation token is provided",
        path: ["organizationName"],
      });
    }
    if (hasInvitation && value.organizationName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "organizationName should not be provided when registering with an invitation",
        path: ["organizationName"],
      });
    }
  });

async function ensureUniqueOrganizationSlug(baseCandidate: string) {
  const base = generateCandidateSlug(baseCandidate);

  for (let counter = 0; ; counter += 1) {
    const slug = counter === 0 ? base : `${base}-${counter}`;
    const existing = await db
      .select({ id: organizations.id })
      .from(organizations)
      .where(eq(organizations.slug, slug))
      .limit(1);

    if (existing.length === 0) {
      return slug;
    }
  }
}

async function cleanupUser(userId: string) {
  await db.transaction(async (tx) => {
    await tx.delete(sessions).where(eq(sessions.userId, userId));
    await tx.delete(accounts).where(eq(accounts.userId, userId));
    await tx.delete(animals).where(eq(animals.createdByUserId, userId));
    await tx.delete(familyMembers).where(eq(familyMembers.userId, userId));
    await tx.delete(organizationMembers).where(eq(organizationMembers.userId, userId));
    await tx.delete(organizations).where(eq(organizations.createdByUserId, userId));
    await tx.delete(users).where(eq(users.id, userId));
  });
}

export async function POST(req: NextRequest) {
  const json = await req.json().catch(() => null);

  const parsed = registerSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid payload",
        details: parsed.error.format(),
      },
      { status: 400 },
    );
  }

  const {
    name,
    email: rawEmail,
    password,
    organizationName,
    organizationSlug,
    organizationDescription,
    invitationToken,
    rememberMe = false,
  } = parsed.data;

  const email = rawEmail.trim().toLowerCase();

  let invitation: (typeof organizationInvitations.$inferSelect) | null = null;
  if (invitationToken) {
    invitation = await db.query.organizationInvitations.findFirst({
      where: eq(organizationInvitations.token, invitationToken),
    });

    if (!invitation) {
      return NextResponse.json(
        { error: "Invitation not found" },
        { status: 404 },
      );
    }

    if (invitation.status !== "pending") {
      return NextResponse.json(
        { error: "Invitation is no longer valid" },
        { status: 409 },
      );
    }

    if (invitation.email.toLowerCase() !== email) {
      return NextResponse.json(
        { error: "Invitation email does not match" },
        { status: 409 },
      );
    }

    if (invitation.expiresAt <= Date.now()) {
      return NextResponse.json(
        { error: "Invitation has expired" },
        { status: 410 },
      );
    }
  }

  const signUpResponse = await auth.api.signUpEmail({
    asResponse: true,
    body: {
      name,
      email,
      password,
      rememberMe,
    },
  });

  const signUpPayload = await signUpResponse
    .json()
    .catch(() => ({ message: "Unexpected response" }));

  if (!signUpResponse.ok) {
    const message =
      typeof signUpPayload?.message === "string"
        ? signUpPayload.message
        : "Failed to create account";
    return NextResponse.json({ error: message }, { status: signUpResponse.status });
  }

  const createdUser = signUpPayload?.user;
  if (!createdUser?.id) {
    return NextResponse.json(
      { error: "Failed to retrieve newly created user" },
      { status: 500 },
    );
  }

  try {
    if (invitation) {
      await db.transaction(async (tx) => {
        await tx.insert(organizationMembers).values({
          id: randomUUID(),
          organizationId: invitation!.organizationId,
          userId: createdUser.id,
          role: invitation!.role,
          status: "active",
          invitedByUserId: invitation!.invitedByUserId,
        });

        await tx
          .update(organizationInvitations)
          .set({
            status: "accepted",
            invitedUserId: createdUser.id,
            updatedAt: Date.now(),
          })
          .where(eq(organizationInvitations.id, invitation!.id));

        if (invitation!.familyId) {
          const existingFamilyMember = await tx
            .select({ id: familyMembers.id })
            .from(familyMembers)
            .where(
              and(
                eq(familyMembers.familyId, invitation!.familyId),
                eq(familyMembers.userId, createdUser.id),
              ),
            )
            .limit(1);

          if (existingFamilyMember.length === 0) {
            await tx.insert(familyMembers).values({
              id: randomUUID(),
              familyId: invitation!.familyId,
              userId: createdUser.id,
              role: "member",
            });
          }
        }
      });
    } else {
      const finalSlug = await ensureUniqueOrganizationSlug(
        organizationSlug ?? organizationName!,
      );

      await db.transaction(async (tx) => {
        const organizationId = randomUUID();

        await tx.insert(organizations).values({
          id: organizationId,
          name: organizationName!,
          slug: finalSlug,
          description: organizationDescription,
          createdByUserId: createdUser.id,
        });

        await tx.insert(organizationMembers).values({
          id: randomUUID(),
          organizationId,
          userId: createdUser.id,
          role: "admin",
          status: "active",
        });
      });
    }
  } catch (error) {
    await cleanupUser(createdUser.id).catch(() => undefined);
    console.error("Failed to finalize registration", error);
    return NextResponse.json(
      { error: "Failed to finalize registration" },
      { status: 500 },
    );
  }

  const organizationRecord = invitation
    ? await db
        .select()
        .from(organizations)
        .where(eq(organizations.id, invitation.organizationId))
        .limit(1)
        .then((rows) => rows[0] ?? null)
    : await db
        .select()
        .from(organizations)
        .where(eq(organizations.createdByUserId, createdUser.id))
        .orderBy(organizations.createdAt)
        .limit(1)
        .then((rows) => rows[0] ?? null);

  return NextResponse.json(
    {
      user: createdUser,
      organization: organizationRecord,
      invitation: invitation
        ? {
            id: invitation.id,
            organizationId: invitation.organizationId,
            role: invitation.role,
            familyId: invitation.familyId,
          }
        : null,
    },
    { status: 201 },
  );
}
