import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { drizzle } from "drizzle-orm/better-sqlite3";

import { env } from "@/env";
import * as schema from "@/db/schema";

const normalizedUrl = env.DATABASE_URL.startsWith("file:")
  ? env.DATABASE_URL.slice("file:".length)
  : env.DATABASE_URL;

const resolvedPath = normalizedUrl.startsWith(":")
  ? normalizedUrl
  : resolve(process.cwd(), normalizedUrl);

if (!resolvedPath.startsWith(":")) {
  mkdirSync(dirname(resolvedPath), { recursive: true });
}

const sqlite = new Database(resolvedPath);

export const db = drizzle(sqlite, { schema });
export type DbClient = typeof db;

export { schema };
