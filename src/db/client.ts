import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { env } from "@/env";
import * as schema from "@/db/schema";

const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl:
    env.DATABASE_URL.includes("localhost") || env.DATABASE_URL.includes("127.0.0.1")
      ? false
      : { rejectUnauthorized: false },
});

export const db = drizzle(pool, { schema });
export type DbClient = typeof db;

export { schema, pool };
