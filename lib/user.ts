import {
  mysqlTable,
  bigint,
  text,
  varchar,
  datetime,
} from "drizzle-orm/mysql-core";
import { db } from "./db";
import { and, eq, gt, sql } from "drizzle-orm";
import { User, Result } from "./types";

const tableName = "users";

export const usersSchema = mysqlTable(tableName, {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  email: varchar("email", { length: 256 }).notNull(),
  password: varchar("password", { length: 256 }).notNull(),
});

export async function createUser(newUser: Partial<User>): Promise<Result> {
  if (!newUser.email || !newUser.password) {
    throw new Error("note date & text required");
  }
  await db.insert(usersSchema).values({
    email: newUser.email,
    password: newUser.password,
  });
  return { success: true, message: "Registration successful. Please log in to continue." };
}

export async function readUserbyID(id: number): Promise<User[]> {
  const result = await db
    .select()
    .from(usersSchema)
    .where(eq(usersSchema.id, id));
  return result;
}

export async function readUserbyEmail(email: string): Promise<User[]> {
  const result = await db
    .select()
    .from(usersSchema)
    .where(eq(usersSchema.email, email));

  return result;
}

export async function readUserbyEmailandPass(
  email: string,
  password: string
): Promise<User[]> {
  const result = await db
    .select()
    .from(usersSchema)
    .where(
      and(eq(usersSchema.email, email), eq(usersSchema.password, password))
    );

  return result;
}

export async function updateUser(
  id: number,
  newUser: Partial<User>
): Promise<Result> {
  if (!newUser.email || !newUser.password) {
    throw new Error("note date & text required");
  }

  await db
    .update(usersSchema)
    .set({ id: id, email: newUser.email, password: newUser.password })
    .where(eq(usersSchema.id, id));
  return {
    success: true,
    message: "user detail[s] has been updated successfully",
  };
}

export async function deleteUserbyID(id: number): Promise<Result> {
  await db.delete(usersSchema).where(eq(usersSchema.id, id));
  return { success: true, message: "user has been deleted successfully" };
}

export async function deleteUserbyEmail(email: string): Promise<Result> {
  await db.delete(usersSchema).where(eq(usersSchema.email, email));
  return { success: true, message: "user has been deleted successfully" };
}

export async function listNotes(
  page: number,
  lastID: number,
  limit: number
): Promise<User[]> {
  let result: User[] = [];

  if (lastID == 0) {
    result = await db
      .select()
      .from(usersSchema)
      .limit(limit)
      .offset((page - 1) * limit);
  } else {
    result = await db
      .select()
      .from(usersSchema)
      .limit(limit)
      .where(gt(usersSchema.id, lastID));
  }

  return result;
}