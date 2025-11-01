import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { env } from "@/env";
import { db } from "@/db/client";
import * as schema from "@/db/schema";
import { nextCookies, toNextJsHandler } from "better-auth/next-js";

const baseURL =
  env.BETTER_AUTH_URL ?? process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const auth = betterAuth({
  baseURL,
  secret: env.BETTER_AUTH_SECRET,
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
    usePlural: true,
    camelCase: true,
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    maxPasswordLength: 128,
    autoSignIn: false,
  },
  rateLimit: {
    enabled: false,
  },
  plugins: [nextCookies()],
});

const rawHandler = auth.handler;

async function guardedHandler(request: Request) {
  const url = new URL(request.url);
  if (url.pathname.endsWith("/sign-up/email")) {
    return new Response("Not Found", { status: 404 });
  }
  return rawHandler(request);
}

export const authHandlers = toNextJsHandler({ handler: guardedHandler });

export type Auth = typeof auth;
