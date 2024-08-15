import MovingLogos from "@/components/ui/MovingLogos";
import { logos, videos } from "@/constants/constants";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Om mig | Adam Lindsköld",
};

export default function AboutPage() {
  return (
    <main className="mt-24 flex w-full flex-col items-center gap-60">
      <header className="relative grid max-w-[120rem] grid-cols-2 place-items-center gap-6 px-6">
        <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-6 whitespace-nowrap font-semibold">
          <h1 className="text-center font-playfair text-longHeading uppercase leading-none">
            Adam Lindsköld
          </h1>
          <p className="text-center text-xl">
            Filmskapare och fotograf från Umeå
          </p>
        </div>
        {videos.map((video, i) => (
          <div
            className={`relative max-h-[45vh] overflow-hidden rounded-3xl sm:block ${i < 2 && "hidden"}`}
            key={i}
          >
            <div className="absolute left-1/2 top-1/2 h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 transform rounded-3xl shadow-[inset_0px_0px_50px_50px_#1d1a1a]"></div>
            <video
              id={i.toString()}
              src={`/videos/retro-overlay.mp4`}
              muted
              loop
              autoPlay
              playsInline
              className="absolute aspect-[9/16] rounded-3xl object-cover opacity-[3%] sm:aspect-video"
            />
            <video
              id={i.toString()}
              src={`https://utfs.io/f/${video.src}`}
              muted
              loop
              autoPlay
              playsInline
              className="aspect-[9/16] rounded-3xl object-cover mix-blend-overlay blur-[2px] sm:aspect-video"
            />
          </div>
        ))}
      </header>

      <section className="max-w-[120rem] px-6">
        <h2 className="font-playfair text-subHeading font-semibold uppercase">
          Om Adam
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-[100%] w-[101%] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl shadow-[inset_0px_0px_7px_7px_#1d1a1a]"></div>
            <Image
              src="/images/adam-selfie.webp"
              alt="Adam Lindsköld"
              width={1000}
              height={1000}
              className="aspect-square rounded-2xl object-cover"
            />
          </div>
          <div className="flex flex-col items-end gap-6">
            <p className="lg:text-balance font-semibold sm:text-2xl">
              Så länge han kan minnas har han varit engagerad i foto samt
              digitalt skapande och har producerat en mängd olika projekt med
              främst fokus på reklamfilm och produktfoto.
            </p>
            <p className="lg:text-balance font-semibold sm:text-2xl">
              Han har även blivit tilldelad priset ”Årets Reklamfilm 2023” samt
              2024 av Ung Företagsamhet Västerbotten. Med över en kvarts miljon
              visningar och 40 000 gilla markeringar på sociala medier kan Adam
              Lindsköld garantera ett professionellt resultat för kundens
              ändamål.
            </p>
          </div>
        </div>
      </section>
      <MovingLogos />
      {/*  <section className="grid max-w-[120rem] grid-cols-3 place-items-center gap-6 px-6">
        <Image
          src="/images/adam-kamera-solnedgang.webp"
          alt="Adam Lindsköld"
          width={1000}
          height={1000}
          className="aspect-[3/4] rounded-2xl object-cover"
        />
        <Image
          src="/images/adam-diplom.webp"
          alt="Adam Lindsköld"
          width={1000}
          height={1000}
          className="aspect-[3/4] rounded-2xl object-cover sepia-[50%]"
        />
        <Image
          src="/images/adam-kamera-alv.webp"
          alt="Adam Lindsköld"
          width={1000}
          height={1000}
          className="aspect-[3/4] rounded-2xl object-cover"
        />
      </section> */}
    </main>
  );
}

{
  /* <section className="grid max-w-[90%] gap-3 sm:gap-6 xl:max-w-6xl">
        <div className="flex w-full justify-center gap-2 sm:gap-5">
          <Image
            src="/images/adam-kamera-solnedgang.webp"
            alt="Adam Lindsköld"
            width={1000}
            height={1000}
            className="h-full max-w-[60%] rounded-2xl object-cover"
          />
          <div className="grid gap-2 sm:gap-5">
            <Image
              src="/images/adam-diplom.webp"
              alt="Adam Lindsköld"
              width={1000}
              height={1000}
              className="w-96 rounded-2xl object-cover"
            />
            <Image
              src="/images/adam-kamera-alv.webp"
              alt="Adam Lindsköld"
              width={1000}
              height={1000}
              className="w-96 rounded-2xl object-cover"
            />
          </div>
        </div>
        <p className="text-balance text-center text-lg text-paragraph">
          Adam Lindsköld är en filmskapare och marknadsförare från Umeå. Så
          länge han kan minnas har han varit engagerad i digitalt skapande och
          har skapat en mängd olika projekt med främst fokus på reklamfilm och
          företagsimage. Han har även blivit tilldelad priset ”Årets Reklamfilm
          2023” av Ung Företagsamhet Västerbotten. Med över 250 000 visningar
          och 35 000 gilla markeringar på sociala medier kan Adam Lindsköld
          garantera ett proffesionellt resultat för kundens ändamål.
        </p>
      </section> */
}
