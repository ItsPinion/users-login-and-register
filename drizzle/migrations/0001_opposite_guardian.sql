ALTER TABLE "roles" ADD CONSTRAINT "roles_title_unique" UNIQUE("title");--> statement-breakpoint
ALTER TABLE "roles" ADD CONSTRAINT "roles_perms_unique" UNIQUE("perms");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");