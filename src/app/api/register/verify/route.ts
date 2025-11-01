import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";

import { eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "@/db/client";
import { users, verifications } from "@/db/schema";

const verifySchema = z.object({
  userId: z.string().min(1),
  code: z.string().regex(/^[0-9]{6}$/),
});

export async function POST(req: NextRequest) {
  const json = await req.json().catch(() => null);
  const parsed = verifySchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const { userId, code } = parsed.data;
  const identifier = `email-verify:${userId}`;

  const verification = await db.query.verifications.findFirst({
    where: eq(verifications.identifier, identifier),
  });

  if (!verification) {
    return NextResponse.json({ error: "Verification code not found" }, { status: 404 });
  }

  if (verification.expiresAt.getTime() <= Date.now()) {
    await db.delete(verifications).where(eq(verifications.id, verification.id));
    return NextResponse.json({ error: "Verification code expired" }, { status: 410 });
  }

  const hashed = createHash("sha256").update(code).digest("hex");

  if (hashed !== verification.value) {
    return NextResponse.json({ error: "Invalid verification code" }, { status: 401 });
  }

  await db.transaction(async (tx) => {
    await tx
      .update(users)
      .set({ emailVerified: true, updatedAt: new Date() })
      .where(eq(users.id, userId));

    await tx.delete(verifications).where(eq(verifications.id, verification.id));
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
