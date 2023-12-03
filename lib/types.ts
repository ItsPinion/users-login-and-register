import { usersSchema } from "./user";

export type User = typeof usersSchema.$inferSelect;

export type Result = {
  success: boolean;
  message: string;
};