import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Om mig | Adam Lindsköld",
};

export default function AboutPage() {
  return (
    <main className=" flex flex-col sm:gap-6 gap-3 items-center sm:mt-0 mt-24">
      <h1 className="text-longHeading font-playfair uppercase">
        Adam Lindsköld
      </h1>
      <section className="grid sm:gap-6 gap-3 xl:max-w-6xl max-w-[90%] ">
        <div className="flex justify-center w-full sm:gap-5 gap-2">
          <Image
            src="/images/adam-kamera-solnedgang.webp"
            alt="Adam Lindsköld"
            width={1000}
            height={1000}
            className=" object-cover rounded-2xl max-w-[60%] h-full"
          />
          <div className="grid sm:gap-5 gap-2">
            <Image
              src="/images/adam-diplom.webp"
              alt="Adam Lindsköld"
              width={1000}
              height={1000}
              className=" object-cover rounded-2xl w-96 "
            />
            <Image
              src="/images/adam-kamera-alv.webp"
              alt="Adam Lindsköld"
              width={1000}
              height={1000}
              className=" object-cover rounded-2xl w-96"
            />
          </div>
        </div>
        <p className="text-center text-balance  text-lg text-paragraph ">
          Adam Lindsköld är en filmskapare och marknadsförare från Umeå. Så
          länge han kan minnas har han varit engagerad i digitalt skapande och
          har skapat en mängd olika projekt med främst fokus på reklamfilm och
          företagsimage. Han har även blivit tilldelad priset ”Årets Reklamfilm
          2023” av Ung Företagsamhet Västerbotten.
        </p>
      </section>
    </main>
  );
}
