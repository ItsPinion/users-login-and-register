DO $$ BEGIN
 CREATE TYPE "role_title" AS ENUM('admin', 'moderator', 'editor', 'reviewer');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "roles" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" "role_title" NOT NULL,
	"perms" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_roles" (
	"user_id" varchar(256) NOT NULL,
	"role_id" integer NOT NULL,
	CONSTRAINT user_roles_user_id_role_id_pk PRIMARY KEY("user_id","role_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL
);
