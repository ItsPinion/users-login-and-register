import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./lib/user.ts",
  out: "./drizzle",
} satisfies Config;