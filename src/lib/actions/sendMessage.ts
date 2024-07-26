"use server";

import { z } from "zod";
import { contactSchema } from "../validators/contact";
import { Resend } from "resend";
import { redirect } from "next/navigation";
import axios from "axios";
import { redis } from "../redis";
import { EmailTemplate } from "@/components/email-template";
import { cookies, headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMessage(data: z.infer<typeof contactSchema>) {
  try {
    const header = headers();
    const cookie = cookies();
    const ip = (header.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
    const currentRequestCount = Number(cookie.get(`reqCount-${ip}`)?.value);

    if (currentRequestCount > 2) {
      return {
        rateLimit: {
          error: "You have exceeded the maximum number of requests",
        },
      };
    }

    const sumReqCount = currentRequestCount + 1;
    cookie.set({
      name: `reqCount-${ip}`,
      value: sumReqCount.toString(),
      expires: Date.now() + 10 * 60 * 1000,
    });

    const result = contactSchema.safeParse(data);

    if (!result.success) {
      return {
        parsingFailed: result.error.issues.map((issue) => {
          return { [issue.path[0]]: issue.message };
        }),
      };
    }
    const name = result.data.name;
    const email = result.data.email;
    const services = result.data.services;
    const message = result.data.message;

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "frank.fomin@gmail.com",
      subject: "Hello world",
      react: EmailTemplate({
        name,
        email,
        services,
        message,
      }) as React.ReactElement,
    });

    if (error) {
      return {
        failedToSendEmail: {
          error: "Something went wrong. Please try again later",
        },
      };
    }

    return {
      success: true,
    };
  } catch (error) {}
}
