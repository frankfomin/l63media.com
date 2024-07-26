/* "use client";

import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { number, set } from "zod";
import { productPhotos, produktPhoto } from "@/constants/constants";

export default function PhotoPage() {
  const splideRef = useRef<Splide>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (splideRef.current === null) return;
    if (splideRef.current.splide === null) return;
    const splide = splideRef.current.splide;

    splide?.go(index);
  }, [index]);

  return (
    <main className="flex flex-col items-center justify-center gap-14">
      <header className="mt-24 flex flex-col items-center">
        <h1 className="text-center font-playfair text-longHeading font-semibold uppercase leading-tight">
          Produktfoto
        </h1>
        <p className="text-balance ty flex max-w-4xl flex-col gap-6 text-center text-xl font-medium">
          Produktfoton från L63 Media fokuserar på att återspegla bakomliggande
          teman hos en produkt samt företaget på ett vis som fångar blickar, men
          även framhäver produkten.
        </p>
      </header>{" "}
      <Splide
        onDragging={(e) => {
          e.on("move", function () {
            setIndex(e.Components.Controller.getIndex());
          });
        }}
        ref={splideRef}
        className="hover:cursor-grab"
        options={{
          arrows: false,
          pagination: false,
          snap: true,
          type: "loop",
          perPage: 2,
          padding: "20%",
          gap: "1rem",
          perMove: 1,
          focus: "center",
          breakpoints: {
            1024: {
              perPage: 1,
            },
          },
        }}
      >
        {productPhotos.map((image, i) => (
          <SplideSlide
            key={i}
            className="lg pointer-events-none relative touch-none rounded-3xl"
          >
            <Image
              className={`h-full w-[40rem] rounded-md object-cover`}
              src={image.src}
              width={1000}
              height={1000}
              alt="cool image"
              priority
            />
          </SplideSlide>
        ))}
      </Splide>
      <div className="flex gap-10">
        {Array.from({ length: productPhotos.length }).map((_, i) => (
          <div
            onClick={() => {
              setIndex(i);
            }}
            key={i}
            className={`rounded-full bg-paragraph p-2 transition-colors hover:cursor-pointer ${
              i === index && "bg-textColor"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
 */

import { productPhotos } from "@/constants/constants";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: `\u{1F4F7} Produktfoto | Adam Lindsköld`,
};
export default function PhotoPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-14">
      <header className="mt-24 flex flex-col items-center">
        <h1 className="font-playfair text-longHeading font-semibold uppercase leading-tight">
          Produktfoto
        </h1>
        <p className="text-balance tt flex max-w-4xl flex-col gap-6 text-center text-xl font-medium">
          Produktfoton från L63 Media fokuserar på att återspegla bakomliggande
          teman hos en produkt samt företaget på ett vis som fångar blickar, men
          även framhäver produkten.
        </p>
      </header>
      <section className="flex w-full max-w-7xl flex-col items-center gap-6">
        {productPhotos.map((photo) => (
          <div key={photo.src} className="">
            <Image
              className={`${photo.ratio} max-h-[85vh] rounded-3xl object-cover`}
              width={1500}
              height={1500}
              src={photo.src}
              alt={photo.alt}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
