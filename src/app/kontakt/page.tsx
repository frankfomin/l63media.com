"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { contactSchema, TcontactSchema } from "@/lib/types";
import { useEffect, useState } from "react";
import Footer2 from "@/components/footer/Footer2";

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const {
    reset,
    setError,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TcontactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: TcontactSchema) => {
    console.log("HALLÅ");
    const res = await fetch("/api/contactForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        services: data.services,
        message: data.message,
      }),
    });
    const resData = await res.json();
    if (!res.ok) {
      alert("Submitting form failed!");
      return;
    }

    if (resData.errors) {
      const errors = resData.errors;

      if (errors.name) {
        setError("name", {
          type: "server",
          message: errors.name,
        });
      } else if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.services) {
        setError("services", {
          type: "server",
          message: errors.services,
        });
      } else if (errors.message) {
        setError("message", {
          type: "server",
          message: errors.message,
        });
      } else {
        alert("something went wrong");
      }
    } else {
      reset();
    }
  };
  return (
    <>
      {isMounted ? (
        <main className="uppercase flex items-center flex-col gap-24 mt-24">
          <section className=" font-playfair text-subHeading leading-none flex justify-center items-center ">
            <div className=" flex flex-col items-center  ">
              <div className="flex justify-between  items-center w-full">
                <h1>Låt</h1>
                <Image
                  src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  width={400}
                  height={400}
                  alt="cool image"
                  className="aspect-[1.5/1]  w-image object-cover rounded-xl"
                />
                <h2>Oss</h2>
              </div>
              <div className=" mt-4 lg:mt-8 font-montserrat font-normal opacity-100 text-coordinates flex justify-center gap-4 w-full items-center">
                <span className="opacity-60">{`63°49'44.002"N`}</span>
                <span className=" opacity-70">Umeå</span>
                <span className="opacity-60">{`20°15'25.268"E`}</span>
              </div>
              <div>Samarbeta</div>
            </div>
          </section>
          <div className=" p-[0.05px] bg-white w-[60%]" />
          <section>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className=" relative flex flex-col justify-center">
                    <input
                      {...register("name")}
                      placeholder="Name"
                      className={`peer transition-all placeholder:text-transparent py-3 px-4 text-xl
                  [&:not(:placeholder-shown)]:pb-1 [&:not(:placeholder-shown)]:pt-5 bg-transparent 
                  border rounded-xl outline-none ${
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
                  border rounded-xl outline-none ${
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
                    className="text-xl bg-transparent outline-none w-full"
                    type="text"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center border rounded-xl px-4 py-3 pb-20  ${
                    errors.message ? "border-red-500" : ""
                  }`}
                >
                  <label className="  text-xl  pointer-events-none transition-all ease-motion  ">
                    Ditt Meddelande
                  </label>
                  <textarea
                    {...register("message")}
                    placeholder="Hej Adam kan du hjälpa mig med..."
                    className="text-xl bg-transparent outline-none box-border resize-none"
                  />
                </div>
                <Button>Skicka</Button>
              </div>
            </form>
          </section>
        </main>
      ) : (
        ""
      )}
    </>
  );
}
