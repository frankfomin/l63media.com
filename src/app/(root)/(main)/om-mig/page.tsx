import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { logos, videos } from "@/constants/constants";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Om mig | Adam Lindsköld",
};
/* ${i < 2 && "hidden"}
 */ export default function AboutPage() {
  return (
    <main className="flex flex-col items-center gap-60">
      <header className="relative grid h-screen max-w-[120rem] grid-cols-1 place-items-center sm:grid-cols-2 xl:grid-cols-4">
        <div
          className={`absolute left-1/2 top-1/2 h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 transform shadow-[inset_0px_0px_10px_10px_#1d1a1a]`}
        />
        <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-6 whitespace-nowrap font-semibold">
          <h1 className="text-center font-playfair text-longHeading uppercase leading-none">
            Adam Lindsköld
          </h1>
          <p className="text-center font-semibold sm:text-2xl">
            Filmskapare och fotograf från Umeå
          </p>
        </div>
        {videos.map((video, i) => (
          <div
            className={`relative ${video.class} h-full max-h-screen w-full overflow-hidden rounded-3xl ${i === 0 ? "sm:rounded-l-3xl" : "sm:rounded-none"} ${i === 3 ? "sm:rounded-r-3xl" : "sm:rounded-none"}`}
            key={i}
          >
            <video
              id={i.toString()}
              src={`/videos/retro-overlay.mp4`}
              muted
              loop
              autoPlay
              playsInline
              className={`absolute aspect-video h-full rounded-3xl object-cover opacity-[3%] ${i === 0 ? "sm:rounded-l-3xl" : "sm:rounded-none"} ${i === 3 ? "sm:rounded-r-3xl" : "sm:rounded-none"}`}
            />
            <video
              id={i.toString()}
              src={`https://utfs.io/f/${video.src}`}
              muted
              loop
              autoPlay
              playsInline
              className={`aspect-video h-full rounded-3xl object-cover mix-blend-overlay blur-[2px] ${i === 0 ? "sm:rounded-l-3xl" : "sm:rounded-none"} ${i === 3 ? "sm:rounded-r-3xl" : "rounded-none"}`}
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
            <div className="absolute left-1/2 top-1/2 h-[100%] w-[101%] -translate-x-1/2 -translate-y-1/2 transform rounded-3xl shadow-[inset_0px_0px_7px_7px_#1d1a1a]"></div>
            <Image
              src="/images/porträtthemsida.webp"
              alt="Adam Lindsköld"
              width={1000}
              height={1000}
              className="aspect-square rounded-3xl object-cover"
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
              2024 av Ung Företagsamhet Västerbotten. Med en stor erfarenhet av att engagera och intressera individer,
              inte minst genom sina egna sociala medier, kan Adam Lindsköld garantera
              ett effektfullt resultat för kundens ändamål.
            </p>
            <p className="lg:text-balance font-semibold sm:text-2xl">
              L63 Media AB
              <br /> Org.nr: 559495-5147
              <br /> Kungsgårdsvägen 34
              <br /> 903 55 Umeå
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
