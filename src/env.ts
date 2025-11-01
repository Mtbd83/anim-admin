import { z } from "zod";

const baseSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: z
    .string()
    .trim()
    .default("postgres://animal-admin:animal-admin@localhost:5557/animal-admin"),
  BETTER_AUTH_SECRET: z
    .string()
    .min(32, "BETTER_AUTH_SECRET must be at least 32 characters long"),
  BETTER_AUTH_URL: z.string().url().optional(),
  SMTP_HOST: z.string().trim().optional(),
  SMTP_PORT: z
    .string()
    .trim()
    .optional()
    .transform((value) => (value ? Number.parseInt(value, 10) : undefined))
    .pipe(z.number().optional()),
  SMTP_USER: z.string().optional(),
  SMTP_PASSWORD: z.string().optional(),
  SMTP_SECURE: z
    .string()
    .optional()
    .transform((value) => (value ? value === "true" || value === "1" : undefined))
    .pipe(z.boolean().optional()),
  MAIL_FROM: z.string().email().optional(),
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
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  SMTP_SECURE: process.env.SMTP_SECURE,
  MAIL_FROM: process.env.MAIL_FROM,
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
