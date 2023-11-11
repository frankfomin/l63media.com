"use server";

import { z } from "zod";
import { contactSchema } from "../validators/contact";
import { Resend } from "resend";
import { redirect } from "next/navigation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMessage(data: z.infer<typeof contactSchema>) {
  try {
    const message = {
      name: data.name,
      email: data.email,
      services: data.services,
      message: data.message,
    };
    const result = contactSchema.safeParse(message);

    if (!result.success) {
      return {
        errors: result.error.issues.map((issue) => {
          return { [issue.path[0]]: issue.message };
        }),
      };
    }

    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "frank.fomin@gmail.com",
      subject: "Hello World",
      html: `<p> ${result.data.email} ${result.data.message} ${result.data.name} ${result.data.services}<strong>first email</strong>!</p>`,
    });

    redirect("http://localhost:3000");
  } catch (error) {}
}
