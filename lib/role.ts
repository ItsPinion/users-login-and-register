import { db } from "@/lib/db";
import { roleSchema, userRoles } from "@/schema";
import { currentUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { Result, Role, UserRole } from "./types";

export async function getBestRole(userId: string): Promise<Role> {
  let roleArray = await getUserRoles(userId);

  if (!roleArray || roleArray.length < 1) {
    return { id: -1, title: "visitor", perms: 0 };
  }

  let bestRoleID = 100;

  for (let i = 0; i < roleArray.length; i++) {
    if (bestRoleID > roleArray[i].roleId) {
      bestRoleID = roleArray[i].roleId;
    }
  }

  let role;

  role = (
    await db.select().from(roleSchema).where(eq(roleSchema.id, bestRoleID))
  )[0];

  if (!role) {
    return { id: -1, title: "visitor", perms: 0 };
  }

  return role;
}

export async function getUserRoles(userId: string): Promise<UserRole[]> {
  let roleArray: UserRole[];

  roleArray = await db
    .select()
    .from(userRoles)
    .where(eq(userRoles.userId, userId));

  return roleArray;
}

export async function createRole(newUser: Partial<UserRole>): Promise<Result> {
  if (!newUser.userId || !newUser.roleId) {
    throw new Error("user email & password required");
  }

  await db.insert(userRoles).values({
    userId: newUser.userId,
    roleId: newUser.roleId,
  });

  return {
    success: true,
    message: "Registration successful. Please log in to continue.",
  };
}

// export async function readUserbyEmail(email: string): Promise<User[]> {
//   const result = await db
//     .select()
//     .from(usersSchema)
//     .where(eq(usersSchema.email, email));

//   return result;
// }

// export async function updateUser(
//   id: number,
//   newUser: Partial<User>
// ): Promise<Result> {
//   if (!newUser.email || !newUser.password) {
//     throw new Error("note date & text required");
//   }

//   await db
//     .update(usersSchema)
//     .set({ id: id, email: newUser.email, password: newUser.password })
//     .where(eq(usersSchema.id, id));
//   return {
//     success: true,
//     message: "user detail[s] has been updated successfully",
//   };
// }

// export async function deleteUserbyID(id: number): Promise<Result> {
//   await db.delete(usersSchema).where(eq(usersSchema.id, id));
//   return { success: true, message: "user has been deleted successfully" };
// }
