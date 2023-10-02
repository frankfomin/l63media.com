import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, "Namn kan inte vara tomt"),
    email: z.string().email(),
    services: z.string().min(1, "Tjänster kan inte vara tomt"),
    message: z.string().min(1, "Meddeleande kan inte vara tomt"),
  });

  export type TcontactSchema = z.infer<typeof contactSchema>;
