import z, { email } from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .min(1, "This field is required.")
    .min(2, "Min 2 chars.")
    .max(50, "Max 50 chars."),

  email: z.string().min(1, "This field is required.").email("Invalid email."),

  phone: z
    .string()
    .min(1, "This field is required.")
    .refine((val) => val.replace(/\D/g, "").length === 11, "Invalid phone."),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
