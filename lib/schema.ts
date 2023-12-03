import * as z from "zod";

const minLength = 7;
const maxLength = 50;
const passMinLength = 8;
const passMaxLength = 50;

export const loginRequestSchema = z.object({
    email: z
      .string()
      .min(minLength, {
        message: `Email must be at least ${minLength} characters.`,
      })
      .max(maxLength, {
        message: `Email can't be more than ${maxLength} characters`,
      }),
  
    password: z
      .string()
      .min(passMinLength, {
        message: `Password must be at least ${passMinLength} characters.`,
      })
      .max(passMaxLength, {
        message: `Password can't be more than ${passMaxLength} characters`,
      }),
  });
  