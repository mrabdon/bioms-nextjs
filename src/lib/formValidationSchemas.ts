import { ZodError, z } from "zod";

// // For detailed error mapping from Clerk
// const clerkErrors = {
//   form_identifier_exists: "That username is taken. Please try another.",
//   form_password_length_too_short: "Passwords must be 8 characters or more.",
// };

// const validateUserInput = (input) => {
//   try {
//     userSchema.parse(input);
//     return { success: true, errors: [] };
//   } catch (zodError) {
//     // Map Zod errors
//     return {
//       success: false,
//       errors: zodError.errors.map((err) => ({
//         field: err.path[0],
//         message: err.message,
//       })),
//     };
//   }
// };
// const handleClerkErrors = (clerkError) => {
//   return clerkError.errors.map((error) => ({
//     field: error.code === "form_identifier_exists" ? "username" : "password",
//     message: clerkErrors[error.code] || error.message,
//   }));
// };

// // Example Usage
// const clerkResponse = {
//   clerkError: true,
//   errors: [
//     {
//       code: "form_identifier_exists",
//       message: "That username is taken. Please try another.",
//       longMessage: "That username is taken. Please try another.",
//       meta: {},
//     },
//     {
//       code: "form_password_length_too_short",
//       message: "Passwords must be 8 characters or more.",
//       longMessage: "Passwords must be 8 characters or more.",
//       meta: {},
//     },
//   ],
// };

// if (clerkResponse.clerkError) {
//   const clerkHandledErrors = handleClerkErrors(clerkResponse);
//   console.log(clerkHandledErrors);
//   // Use `clerkHandledErrors` to show messages in your UI
// }

//SUBJECT
export const subjectSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "name is required!" }),
  teachers: z.array(z.string()),
});

export type SubjectSchema = z.infer<typeof subjectSchema>;

//VOLUME
export const volumeSchema = z.object({
  id: z.coerce.number().optional(),
  committedVolume: z.coerce
    .number()
    .min(1, { message: "Committed volume is required" }),
});

export type VolumeSchema = z.infer<typeof volumeSchema>;

// PRODUCER
export const producerSchema = z.object({
  id: z.coerce.number().min(1, { message: "Id number is required!" }),
  name: z.string().min(1, { message: "name is required!" }),
});

export type ProducerSchema = z.infer<typeof producerSchema>;

//USERS

// Async username validation
// async function checkUsernameExists(username: string): Promise<boolean> {
//   const response = await fetch(
//     `/list/users/check-username?username=${username}`
//   );
//   const data = await response.json();
//   return data.exists; // Assuming your API responds with { exists: true/false }
// }
export const userSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" })
    .optional()
    .or(z.literal("")),
  name: z.string().min(1, { message: "First name is required!" }),
  surname: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().optional(),
  address: z.string(),
  role: z.enum(["admin", "producer", "consumer"], {
    message: "Role is required!",
  }),
  gender: z.enum(["MALE", "FEMALE"], { message: "Gender is required!" }),
  img: z.string().optional(),
  producers: z
    .array(z.string(), { message: "Select Producer" })
    .min(1, { message: "Select Producer" }), //producer ids
});

export type UserSchema = z.infer<typeof userSchema>;

//=========================Teacher
export const teacherSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" })
    .optional()
    .or(z.literal("")),
  name: z.string().min(1, { message: "First name is required!" }),
  surname: z.string().min(1, { message: "Last name is required!" }),
  email: z
    .string()
    .email({ message: "Invalid email address!" })
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  address: z.string(),
  img: z.string().optional(),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.coerce.date({ message: "Birthday is required!" }),
  sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required!" }),
  subjects: z.array(z.string()).optional(), // subject ids
});
