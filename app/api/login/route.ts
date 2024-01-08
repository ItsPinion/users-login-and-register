import { hash, verify } from "@/lib/hashing";
import { RoleRequestSchema } from "@/lib/zSchema";
import { User } from "@/lib/types";
import { readUserbyEmail } from "@/lib/user";

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

  const userValidation = RoleRequestSchema.safeParse(body);

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

  let user:User[];

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
      { success: false, message: "Email does not match" },
      {
        status: 400,
      }
    );
  }

  if (await verify(userValidation.data.password, user[0].password)) {
    return Response.json(
      { success: false, message: "Password did not match" },
      {
        status: 401,
      }
    );
  }

  return Response.json({
    success: true,
    message: "Login successful. Redirecting you to your dashboard.",
  });
}
