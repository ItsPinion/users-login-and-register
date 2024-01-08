import {
  serial,
  pgEnum,
  pgTable,
  varchar,
  integer,
  primaryKey,
  text,
} from "drizzle-orm/pg-core";

export const usersSchema = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  password: varchar("password", { length: 256 }).notNull(),
});

export const RoleTitle = pgEnum("role_title", [
  "admin",
  "moderator",
  "editor",
  "reviewer",
  "visitor"
]);
export const roleSchema = pgTable("roles", {
  id: serial("id").primaryKey(),
  title: RoleTitle("title").notNull().unique(),
  perms: serial("perms").notNull().unique(),
});

export const userRoles = pgTable(
  "user_roles",
  {
    userId: varchar("user_id", { length: 256 }).notNull(),
    roleId: integer("role_id").notNull(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.userId, table.roleId] }),
    };
  }
);
