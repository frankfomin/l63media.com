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
        <p className="text-red-500 text-center mb-2">{`${errors.root.message}`}</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className=" relative flex flex-col justify-center">
              <input
                {...register("name")}
                placeholder="Name"
                className={`peer transition-all placeholder:text-transparent py-3 px-4 text-xl
            [&:not(:placeholder-shown)]:pb-1 [&:not(:placeholder-shown)]:pt-5 bg-transparent 
            border rounded-xl outline-none text-textColor ${
              errors.name ? "border-red-500" : ""
            }`}
                type="text"
              />

              <label className="absolute py-3  px-4  peer-placeholder-shown:translate-y-0 -translate-y-3 peer-placeholder-shown:text-xl text-sm  pointer-events-none transition-all ease-motion ">
                Ditt Namn
              </label>
              {/*   {errors.name && (
                <p className=" text-red-500">{`${errors.name.message}`}</p>
              )} */}
            </div>
            <div className=" relative flex items-center">
              <input
                {...register("email")}
                placeholder="Email"
                className={`peer w-full transition-all placeholder:text-transparent py-3 px-4 text-xl
            [&:not(:placeholder-shown)]:pb-1 [&:not(:placeholder-shown)]:pt-5 bg-transparent 
            border rounded-xl outline-none text-textColor ${
              errors.email ? "border-red-500" : ""
            }`}
                type="text"
              />
              <label className="absolute py-3 px-4  peer-placeholder-shown:translate-y-0 -translate-y-3 peer-placeholder-shown:text-xl text-sm  pointer-events-none transition-all ease-motion ">
                Din mail
              </label>
            </div>
          </div>
          <div
            className={`flex flex-col justify-center border rounded-xl px-4 py-3 ${
              errors.services ? "border-red-500" : ""
            }`}
          >
            <label className="  text-xl  pointer-events-none transition-all ease-motion  ">
              Vilka tjänster söker du?
            </label>
            <input
              {...register("services")}
              placeholder="Produktfoto, Reklamfilmer..."
              className="text-xl bg-transparent outline-none w-full placeholder-paragraph text-textColor"
              type="text"
            />
          </div>
          <div
            className={`flex flex-col justify-center border rounded-xl px-4 py-3   ${
              errors.message ? "border-red-500" : ""
            }`}
          >
            <label className="  text-xl  pointer-events-none transition-all ease-motion  ">
              Ditt Meddelande
            </label>
            <textarea
              {...register("message")}
              rows={8}
              placeholder="Hej Adam kan du hjälpa mig med..."
              className="text-xl bg-transparent outline-none placeholder-paragraph text-textColor"
            />
          </div>
          <div className=" flex justify-center">
            <Button disabled={isSubmitting} type="submit">
              Skicka
            </Button>
          </div>
        </div>
      </form>
      {errors.root && (
        <p className=" text-red-500 text-center mb-2">{`${errors.root.message}`}</p>
      )}
    </>
  );
}
