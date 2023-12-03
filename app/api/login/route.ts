import { hash } from "@/lib/noob-hashing";
import { User } from "@/lib/types";
import { createUser, readUserbyEmail } from "@/lib/user";
import { z } from "zod";

const loginRequestSchema = z.object({
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

  const userValidation = loginRequestSchema.safeParse(body);

  const headers = new Headers();
  headers.set("content-type", "application/json");

  if (!userValidation.success) {
    return Response.json(userValidation.error.issues[0], {
      status: 400,
    });
  }

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

  let user: User[];

  try {
    user = await readUserbyEmail(userValidation.data.email);
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

  if (!user[0]) {
    return Response.json(
      { success: false, message: "user does not exist" },
      {
        status: 400,
      }
    );
  }

  if (userValidation.data.password !== user[0].password) {
    return Response.json(
      { success: false, message: "password did not match" },
      {
        status: 401,
      }
    );
  }

  return Response.json({
    success: true,
    message: "user has logged in successfully",
  });
}
