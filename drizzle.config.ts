import { Config } from "drizzle-kit";

export default {
  schema: "./lib/user.ts",
  out: "./drizzle/migrations",
} satisfies Config;
