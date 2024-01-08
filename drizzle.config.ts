import { Config } from "drizzle-kit";

export default {
  schema: "./schema/index.ts",
  out: "./drizzle/migrations",
} satisfies Config;
