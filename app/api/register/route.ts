import { hash } from "@/lib/noob-hashing";
import { User } from "@/lib/types";
import { createUser, readUserbyEmail } from "@/lib/user";
import { z } from "zod";

const registerRequestSchema = z.object({
  email: z.string().min(1).max(255),
  password: z.string().min(1).max(255),
});

export async function POST(request: Request) {
  let body;

  try {
    body = await request.json();
  } catch (error) {
    return Response.json(
      { success: false, message: "Invalid json" },
      {
        status: 400,
      }
    );
  }

  const userValidation = registerRequestSchema.safeParse(body);

  const headers = new Headers();
  headers.set("content-type", "application/json");

  if (!userValidation.success) {
    return Response.json((userValidation.error.issues[0]), {
      status: 400,
    });
  }

  let duplicate: User[];

  try {
    duplicate = await readUserbyEmail(userValidation.data.email);
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Failed to access the database",
      },
      {
        status: 500,
      }
    );
  }

  if (duplicate[0]) {
    return Response.json(
      { success: false, message: "email is already used" },
      {
        status: 400,
      }
    );
  }

  // TODO: hash password using argon2 or bcrypt
  try {
    userValidation.data.password = await hash(userValidation.data.password);
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Failed to access hash the password",
      },
      {
        status: 500,
      }
    );
  }

  let result;

  try {
    result = await createUser(userValidation.data);
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Failed to access the database",
      },
      {
        status: 500,
      }
    );
  }

  return Response.json(result);
}
