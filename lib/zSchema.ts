import * as z from "zod";

const minLength = 1;
const maxLength = 50;

export const RoleRequestSchema = z.object({
  userID: z.string().min(minLength, {
    message: `There is no User ID this big.`,
  }),
  role: z.string().max(maxLength, {
    message: `There is no role name this big.`,
  }),
});
