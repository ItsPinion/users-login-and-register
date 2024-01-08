import { roleSchema, userRoles, usersSchema,  } from "@/schema";

export type User = typeof usersSchema.$inferSelect;
export type UserRole = typeof userRoles.$inferSelect;
export type Role = typeof roleSchema.$inferSelect;

export type Result = {
  success: boolean;
  message: string;
};