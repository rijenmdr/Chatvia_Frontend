import { z } from 'zod';

export const SignUpSchema = z.object({
    name: z.string().nonempty("Name is required.").min(3, "Name must have minimun length of 3 characters."),
    email: z.string().nonempty("Email is required.").email("Email is invalid"),
    password: z
        .string()
        .nonempty("Password is required")
        .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password must be minimum of eight characters, atleast one letter, one number and one special character.")
});

export const LoginSchema = z.object({
    email: z.string().nonempty("Email is required.").email("Email is invalid"),
    password: z
        .string()
        .nonempty("Password is required")
});

export const GetOTPSchema = z.object({
    email: z.string().nonempty("Email is required.").email("Email is invalid")
});

export const VerifyOTPSchema = z.object({
    otp1: z.string().nonempty(),
    otp2: z.string().nonempty(),
    otp3: z.string().nonempty(),
    otp4: z.string().nonempty(),
    otp5: z.string().nonempty(),
    otp6: z.string().nonempty()
});

export const ChangePasswordSchema = z.object({
    password: z
        .string()
        .nonempty("Password is required")
        .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password must be minimum of eight characters, atleast one letter, one number and one special character."),
    confirmPassword: z
        .string()
        .nonempty("Confirm password is required")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
});;

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type GetOTPSchemaType = z.infer<typeof GetOTPSchema>;
export type VerifyOTPSchemaType = z.infer<typeof VerifyOTPSchema>;
export type ChangePasswordSchemaType = z.infer<typeof ChangePasswordSchema>;

