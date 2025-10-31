import { randomUUID } from "node:crypto";

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

const timestampNow = sql`(unixepoch('now') * 1000)`;

const timestampColumn = (name: string) =>
  integer(name, { mode: "timestamp_ms" })
    .notNull()
    .default(timestampNow);

const booleanColumn = (name: string) =>
  integer(name, { mode: "boolean" }).notNull().default(0);

const uuid = () => randomUUID();

export const organizationRoles = [
  "admin",
  "benevole",
  "family",
] as const;
export type OrganizationRole = (typeof organizationRoles)[number];

export const invitationStatuses = [
  "pending",
  "accepted",
  "declined",
  "expired",
  "cancelled",
] as const;
export type InvitationStatus = (typeof invitationStatuses)[number];

export const memberStatuses = ["active", "inactive", "invited"] as const;
export type MemberStatus = (typeof memberStatuses)[number];

export const adoptionStatuses = [
  "draft",
  "available",
  "reserved",
  "adopted",
  "archived",
] as const;
export type AdoptionStatus = (typeof adoptionStatuses)[number];

export const users = sqliteTable(
  "users",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => uuid()),
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

export const accounts = sqliteTable(
  "accounts",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => uuid()),
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
    accessTokenExpiresAt: integer("access_token_expires_at", {
      mode: "timestamp_ms",
    }),
    refreshTokenExpiresAt: integer("refresh_token_expires_at", {
      mode: "timestamp_ms",
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

export const sessions = sqliteTable(
  "sessions",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => uuid()),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    token: text("token").notNull(),
    expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
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

export const verifications = sqliteTable(
  "verifications",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => uuid()),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
    createdAt: timestampColumn("created_at"),
    updatedAt: timestampColumn("updated_at"),
  },
  (table) => ({
    identifierIdx: index("verifications_identifier_idx").on(table.identifier),
  }),
);

export const rateLimits = sqliteTable(
  "rate_limits",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => uuid()),
    identifier: text("identifier").notNull(),
    window: integer("window", { mode: "timestamp_ms" }).notNull(),
    maxHits: integer("max_hits").notNull(),
    hits: integer("hits").notNull().default(0),
    createdAt: timestampColumn("created_at"),
    updatedAt: timestampColumn("updated_at"),
  },
  (table) => ({
    identifierWindowUnique: uniqueIndex(
      "rate_limits_identifier_window_unique",
    ).on(table.identifier, table.window),
  }),
);

export const organizations = sqliteTable(
  "organizations",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => uuid()),
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

export const organizationMembers = sqliteTable(
  "organization_members",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => uuid()),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organizations.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    role: text("role", { enum: organizationRoles }).notNull(),
    status: text("status", { enum: memberStatuses })
      .notNull()
      .default("active"),
    invitedByUserId: text("invited_by_user_id").references(() => users.id, {
      onDelete: "set null",
    }),
    joinedAt: integer("joined_at", { mode: "timestamp_ms" }).default(
      timestampNow,
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

export const families = sqliteTable(
  "families",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => uuid()),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organizations.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    householdSize: integer("household_size").notNull().default(1),
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

export const familyMembers = sqliteTable(
  "family_members",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => uuid()),
    familyId: text("family_id")
      .notNull()
      .references(() => families.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    role: text("role").notNull().default("member"),
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

export const familyOtherAnimals = sqliteTable(
  "family_other_animals",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => uuid()),
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

export const organizationInvitations = sqliteTable(
  "organization_invitations",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => uuid()),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organizations.id, { onDelete: "cascade" }),
    email: text("email").notNull(),
    role: text("role", { enum: organizationRoles }).notNull(),
    status: text("status", { enum: invitationStatuses })
      .notNull()
      .default("pending"),
    token: text("token").notNull(),
    expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
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

export const animals = sqliteTable(
  "animals",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => uuid()),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organizations.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    species: text("species").notNull(),
    breed: text("breed"),
    icad: text("icad").notNull(),
    description: text("description"),
    birthDate: integer("birth_date", { mode: "timestamp_ms" }),
    vaccinatedFirst: booleanColumn("vaccinated_first"),
    vaccinatedSecond: booleanColumn("vaccinated_second"),
    firstVaccinatedAt: integer("first_vaccinated_at", {
      mode: "timestamp_ms",
    }),
    secondVaccinatedAt: integer("second_vaccinated_at", {
      mode: "timestamp_ms",
    }),
    sterilized: booleanColumn("sterilized"),
    sterilizedAt: integer("sterilized_at", { mode: "timestamp_ms" }),
    adoptionStatus: text("adoption_status", { enum: adoptionStatuses })
      .notNull()
      .default("draft"),
    adoptionNotes: text("adoption_notes"),
    primaryImageUrl: text("primary_image_url"),
    isArchived: booleanColumn("is_archived"),
    archivedAt: integer("archived_at", { mode: "timestamp_ms" }),
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
  }),
);

export const animalImages = sqliteTable(
  "animal_images",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => uuid()),
    animalId: text("animal_id")
      .notNull()
      .references(() => animals.id, { onDelete: "cascade" }),
    url: text("url").notNull(),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: timestampColumn("created_at"),
    updatedAt: timestampColumn("updated_at"),
  },
  (table) => ({
    animalIdx: index("animal_images_animal_idx").on(table.animalId),
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
