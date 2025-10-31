import { z } from "zod";

const baseSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: z.string().trim().default("file:./.data/local.db"),
  BETTER_AUTH_SECRET: z
    .string()
    .min(32, "BETTER_AUTH_SECRET must be at least 32 characters long"),
  BETTER_AUTH_URL: z.string().url().optional(),
});

const temporaryDefaults = {
  BETTER_AUTH_SECRET:
    "0123456789abcdefghijklmnopqrstuvwxyzsecret0123456789",
};

const parsed = baseSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  BETTER_AUTH_SECRET:
    process.env.BETTER_AUTH_SECRET ?? temporaryDefaults.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL ?? process.env.NEXT_PUBLIC_APP_URL,
});

if (!parsed.success) {
  console.error(
    "Invalid environment variables",
    JSON.stringify(parsed.error.format(), null, 2),
  );
  throw new Error("Invalid environment configuration");
}

export const env = parsed.data;

if (
  env.NODE_ENV === "production" &&
  process.env.BETTER_AUTH_SECRET == null
) {
  throw new Error(
    "BETTER_AUTH_SECRET must be set in production environments",
  );
}
