"use client";

import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TcontactSchema, contactSchema } from "@/lib/validators/contact";
import { sendMessage } from "@/lib/actions/sendMessage";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const {
    reset,
    setError,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TcontactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      services: "",
      message: "",
    },
  });

  const onSubmit = async (data: TcontactSchema) => {
    console.log("submitting");
    const res = await sendMessage(data);

    if (res?.failedToSendEmail || res?.parsingFailed) {
      setError("root", {
        type: "manual",
        message: "Något gick fel :/",
      });
    }

    if (res?.rateLimit) {
      setError("root", {
        type: "manual",
        message: "Du har skickat för många meddelanden, försök igen senare",
      });
    }

    if (res?.success) {
      router.push("/skickat");
    }
  };
  return (
    <>
      {errors.root && (
        <p className="mb-2 text-center text-red-500">{`${errors.root.message}`}</p>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center font-semibold"
      >
        <div className="flex w-full flex-col gap-4 sm:w-auto">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex flex-col justify-center">
              <input
                {...register("name")}
                placeholder="Name"
                className={`placehold peer rounded-xl border bg-transparent px-4 py-3 text-xl text-textColor outline-none transition-all placeholder:text-transparent [&:not(:placeholder-shown)]:pb-1 [&:not(:placeholder-shown)]:pt-5 ${
                  errors.name ? "border-red-500" : ""
                }`}
                type="text"
              />

              <label className="ease-motion pointer-events-none absolute -translate-y-3 px-4 py-3 text-sm transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-xl">
                Namn
              </label>
              {/*   {errors.name && (
                <p className=" text-red-500">{`${errors.name.message}`}</p>
              )} */}
            </div>
            <div className="relative flex items-center">
              <input
                {...register("email")}
                placeholder="Email"
                className={`peer w-full rounded-xl border bg-transparent px-4 py-3 text-xl text-textColor outline-none transition-all placeholder:text-transparent [&:not(:placeholder-shown)]:pb-1 [&:not(:placeholder-shown)]:pt-5 ${
                  errors.email ? "border-red-500" : ""
                }`}
                type="text"
              />
              <label className="ease-motion pointer-events-none absolute -translate-y-3 px-4 py-3 text-sm transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-xl">
                Mail
              </label>
            </div>
          </div>
          <div
            className={`flex flex-col justify-center rounded-xl border px-4 py-3 ${
              errors.services ? "border-red-500" : ""
            }`}
          >
            <label className="ease-motion pointer-events-none text-xl transition-all">
              Vilka tjänster söker du?
            </label>
            <input
              {...register("services")}
              placeholder="Produktfoto, Reklamfilmer..."
              className="w-full bg-transparent text-xl text-textColor placeholder-paragraph outline-none"
              type="text"
            />
          </div>
          <div
            className={`flex flex-col justify-center rounded-xl border px-4 py-3 ${
              errors.message ? "border-red-500" : ""
            }`}
          >
            <label className="ease-motion pointer-events-none text-xl transition-all">
              Ditt Meddelande
            </label>
            <textarea
              {...register("message")}
              rows={8}
              placeholder="Hej Adam kan du hjälpa mig med..."
              className="bg-transparent text-xl text-textColor placeholder-paragraph outline-none"
            />
          </div>
          <div className="flex justify-center">
            <Button disabled={isSubmitting} type="submit">
              Skicka
            </Button>
          </div>
        </div>
      </form>
      {errors.root && (
        <p className="mb-2 text-center text-red-500">{`${errors.root.message}`}</p>
      )}
    </>
  );
}
