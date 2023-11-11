import { contactSchema } from "@/lib/validators/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body: unknown = await req.json();

  const result = contactSchema.safeParse(body);


  let zodErrors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  } else {
    const parsedData = result.data;

    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "frank.fomin@gmail.com",
      subject: "Hello World",
      html: `<p> ${parsedData.email} ${parsedData.name} ${parsedData.services} ${parsedData.message}<strong>first email</strong>!</p>`,
    });
  }

  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true }
  );
}
