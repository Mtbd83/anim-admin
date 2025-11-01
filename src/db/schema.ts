import { randomUUID } from "node:crypto";

import { sql } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

const timestampColumn = (name: string) =>
  timestamp(name, { withTimezone: true }).default(sql`now()`).notNull();

const booleanColumn = (name: string, defaultValue = false) =>
  boolean(name).default(defaultValue).notNull();

const idColumn = () => text("id").primaryKey().$defaultFn(() => randomUUID());

export const organizationRoleEnum = pgEnum("organization_role", [
  "admin",
  "benevole",
  "family",
]);

export const invitationStatusEnum = pgEnum("invitation_status", [
  "pending",
  "accepted",
  "declined",
  "expired",
  "cancelled",
]);

export const memberStatusEnum = pgEnum("member_status", [
  "active",
  "inactive",
  "invited",
]);

export const adoptionStatusEnum = pgEnum("adoption_status", [
  "draft",
  "available",
  "reserved",
  "adopted",
  "archived",
]);

export const placementStatusEnum = pgEnum("animal_placement_status", [
  "active",
  "completed",
  "cancelled",
]);

export const users = pgTable(
  "users",
  {
    id: idColumn(),
    email: text("email").notNull(),
    emailVerified: booleanColumn("email_verified"),
    name: text("name"),
    image: text("image"),
    hashedPassword: text("hashed_password"),
    createdAt: timestampColumn("created_at"),
    updatedAt: timestampColumn("updated_at"),
  },
  (table) => ({
    emailUnique: uniqueIndex("users_email_unique").on(table.email),
  }),
);

export const accounts = pgTable(
  "accounts",
  {
    id: idColumn(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    providerId: text("provider_id").notNull(),
    accountId: text("account_id").notNull(),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    scope: text("scope"),
    tokenType: text("token_type"),
    password: text("password"),
    accessTokenExpiresAt: timestamp("access_token_expires_at", {
      withTimezone: true,
    }),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at", {
      withTimezone: true,
    }),
    createdAt: timestampColumn("created_at"),
    updatedAt: timestampColumn("updated_at"),
  },
  (table) => ({
    providerAccountUnique: uniqueIndex("accounts_provider_account_unique").on(
      table.providerId,
      table.accountId,
    ),
    userIdx: index("accounts_user_idx").on(table.userId),
  }),
);

export const sessions = pgTable(
  "sessions",
  {
    id: idColumn(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    token: text("token").notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    createdAt: timestampColumn("created_at"),
    updatedAt: timestampColumn("updated_at"),
  },
  (table) => ({
    tokenUnique: uniqueIndex("sessions_token_unique").on(table.token),
    userIdx: index("sessions_user_idx").on(table.userId),
  }),
);

export const verifications = pgTable(
  "verifications",
  {
    id: idColumn(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    createdAt: timestampColumn("created_at"),
    updatedAt: timestampColumn("updated_at"),
  },
  (table) => ({
    identifierIdx: index("verifications_identifier_idx").on(table.identifier),
  }),
);

export const rateLimits = pgTable(
  "rate_limits",
  {
    id: idColumn(),
    identifier: text("identifier").notNull(),
    window: timestamp("window", { withTimezone: true }).notNull(),
    maxHits: integer("max_hits").notNull(),
    hits: integer("hits").default(0).notNull(),
    createdAt: timestampColumn("created_at"),
    updatedAt: timestampColumn("updated_at"),
  },
  (table) => ({
    identifierWindowUnique: uniqueIndex(
      "rate_limits_identifier_window_unique",
    ).on(table.identifier, table.window),
  }),
);

export const organizations = pgTable(
  "organizations",
  {
    id: idColumn(),
    name: text("name").notNull(),
    slug: text("slug").notNull(),
    description: text("description"),
    createdByUserId: text("created_by_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "restrict" }),
    createdAt: timestampColumn("created_at"),
    updatedAt: timestampColumn("updated_at"),
  },
  (table) => ({
    slugUnique: uniqueIndex("organizations_slug_unique").on(table.slug),
    nameIdx: index("organizations_name_idx").on(table.name),
  }),
);

export const organizationMembers = pgTable(
  "organization_members",
  {
    id: idColumn(),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organizations.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    role: organizationRoleEnum("role").notNull(),
    status: memberStatusEnum("status").default("active").notNull(),
    invitedByUserId: text("invited_by_user_id").references(() => users.id, {
      onDelete: "set null",
    }),
    joinedAt: timestamp("joined_at", { withTimezone: true }).default(
      sql`now()`
    ),
    createdAt: timestampColumn("created_at"),
    updatedAt: timestampColumn("updated_at"),
  },
  (table) => ({
    organizationUserUnique: uniqueIndex(
      "organization_members_org_user_unique",
    ).on(table.organizationId, table.userId),
    orgIdx: index("organization_members_org_idx").on(table.organizationId),
    userIdx: index("organization_members_user_idx").on(table.userId),
  }),
);

export const families = pgTable(
  "families",
  {
    id: idColumn(),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organizations.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    householdSize: integer("household_size").default(1).notNull(),
    notes: text("notes"),
    createdByUserId: text("created_by_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "restrict" }),
    createdAt: timestampColumn("created_at"),
    updatedAt: timestampColumn("updated_at"),
  },
  (table) => ({
    orgNameIdx: index("families_org_name_idx").on(
      table.organizationId,
      table.name,
    ),
  }),
);

export const familyMembers = pgTable(
  "family_members",
  {
    id: idColumn(),
    familyId: text("family_id")
      .notNull()
      .references(() => families.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    role: text("role").default("member").notNull(),
    createdAt: timestampColumn("created_at"),
    updatedAt: timestampColumn("updated_at"),
  },
  (table) => ({
    familyUserUnique: uniqueIndex("family_members_family_user_unique").on(
      table.familyId,
      table.userId,
    ),
    familyIdx: index("family_members_family_idx").on(table.familyId),
    userIdx: index("family_members_user_idx").on(table.userId),
  }),
);

export const familyOtherAnimals = pgTable(
  "family_other_animals",
  {
    id: idColumn(),
    familyId: text("family_id")
      .notNull()
      .references(() => families.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    species: text("species").notNull(),
    breed: text("breed"),
    ageYears: integer("age_years"),
    vaccinated: booleanColumn("vaccinated"),
    sterilized: booleanColumn("sterilized"),
    notes: text("notes"),
    createdAt: timestampColumn("created_at"),
    updatedAt: timestampColumn("updated_at"),
  },
  (table) => ({
    familyIdx: index("family_other_animals_family_idx").on(table.familyId),
  }),
);

export const organizationInvitations = pgTable(
  "organization_invitations",
  {
    id: idColumn(),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organizations.id, { onDelete: "cascade" }),
    email: text("email").notNull(),
    role: organizationRoleEnum("role").notNull(),
    status: invitationStatusEnum("status").default("pending").notNull(),
    token: text("token").notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    invitedByUserId: text("invited_by_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "restrict" }),
    invitedUserId: text("invited_user_id").references(() => users.id, {
      onDelete: "set null",
    }),
    familyId: text("family_id").references(() => families.id, {
      onDelete: "set null",
    }),
    createdAt: timestampColumn("created_at"),
    updatedAt: timestampColumn("updated_at"),
  },
  (table) => ({
    tokenUnique: uniqueIndex("organization_invitations_token_unique").on(
      table.token,
    ),
    orgEmailUnique: uniqueIndex("organization_invitation_org_email_unique").on(
      table.organizationId,
      table.email,
    ),
  }),
);

export const animals = pgTable(
  "animals",
  {
    id: idColumn(),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organizations.id, { onDelete: "cascade" }),
    temporaryFamilyId: text("temporary_family_id").references(() => families.id, {
      onDelete: "set null",
    }),
    name: text("name").notNull(),
    species: text("species").notNull(),
    breed: text("breed"),
    icad: text("icad").notNull(),
    description: text("description"),
    birthDate: timestamp("birth_date", { withTimezone: true }),
    vaccinatedFirst: booleanColumn("vaccinated_first"),
    vaccinatedSecond: booleanColumn("vaccinated_second"),
    firstVaccinatedAt: timestamp("first_vaccinated_at", { withTimezone: true }),
    secondVaccinatedAt: timestamp("second_vaccinated_at", { withTimezone: true }),
    sterilized: booleanColumn("sterilized"),
    sterilizedAt: timestamp("sterilized_at", { withTimezone: true }),
    adoptionStatus: adoptionStatusEnum("adoption_status")
      .default("draft")
      .notNull(),
    adoptionNotes: text("adoption_notes"),
    primaryImageUrl: text("primary_image_url"),
    isArchived: booleanColumn("is_archived"),
    archivedAt: timestamp("archived_at", { withTimezone: true }),
    createdByUserId: text("created_by_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "restrict" }),
    updatedByUserId: text("updated_by_user_id").references(() => users.id, {
      onDelete: "set null",
    }),
    createdAt: timestampColumn("created_at"),
    updatedAt: timestampColumn("updated_at"),
  },
  (table) => ({
    orgNameIdx: index("animals_org_name_idx").on(
      table.organizationId,
      table.name,
    ),
    icadUnique: uniqueIndex("animals_icad_unique").on(table.icad),
    temporaryFamilyIdx: index("animals_temporary_family_idx").on(
      table.temporaryFamilyId,
    ),
  }),
);

export const animalImages = pgTable(
  "animal_images",
  {
    id: idColumn(),
    animalId: text("animal_id")
      .notNull()
      .references(() => animals.id, { onDelete: "cascade" }),
    url: text("url").notNull(),
    sortOrder: integer("sort_order").default(0).notNull(),
    createdAt: timestampColumn("created_at"),
    updatedAt: timestampColumn("updated_at"),
  },
  (table) => ({
    animalIdx: index("animal_images_animal_idx").on(table.animalId),
  }),
);

export const animalFamilyPlacements = pgTable(
  "animal_family_placements",
  {
    id: idColumn(),
    animalId: text("animal_id")
      .notNull()
      .references(() => animals.id, { onDelete: "cascade" }),
    familyId: text("family_id")
      .notNull()
      .references(() => families.id, { onDelete: "cascade" }),
    status: placementStatusEnum("status").default("active").notNull(),
    startedAt: timestamp("started_at", { withTimezone: true })
      .default(sql`now()`)
      .notNull(),
    endedAt: timestamp("ended_at", { withTimezone: true }),
    notes: text("notes"),
    createdAt: timestampColumn("created_at"),
    updatedAt: timestampColumn("updated_at"),
  },
  (table) => ({
    animalFamilyIdx: index("animal_family_placements_animal_family_idx").on(
      table.animalId,
      table.familyId,
    ),
  }),
);

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type Account = typeof accounts.$inferSelect;
export type Session = typeof sessions.$inferSelect;
export type Verification = typeof verifications.$inferSelect;
export type Organization = typeof organizations.$inferSelect;
export type OrganizationMember = typeof organizationMembers.$inferSelect;
export type OrganizationInvitation =
  typeof organizationInvitations.$inferSelect;
export type Family = typeof families.$inferSelect;
export type FamilyMember = typeof familyMembers.$inferSelect;
export type FamilyOtherAnimal = typeof familyOtherAnimals.$inferSelect;
export type Animal = typeof animals.$inferSelect;
export type AnimalImage = typeof animalImages.$inferSelect;
export type AnimalFamilyPlacement =
  typeof animalFamilyPlacements.$inferSelect;
