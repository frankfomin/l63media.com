"use client";

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
    <main className="flex flex-col gap-14 items-center justify-center">
      <header className="flex items-center flex-col gap-1 mt-24">
        <h1 className="text-center leading-tight text-longHeading font-playfair uppercase font-semibold">
          ProduktFoto
        </h1>
        <span className="max-w-2xl text-center lowercase text-paragraph">
          <span className="uppercase">U</span>rna sed magna mauris sem
          pellentesque penatibus praesent. Imperdiet consectetur fermentum eget
          enim commodo tempor. Dictumst tristique a sed est et sit.
        </span>
      </header>
      <Splide
        onDragging={(e) => {
          e.on("move", function () {
            setIndex(e.Components.Controller.getIndex());
          });
        }}
        ref={splideRef}
        className="hover:cursor-grab   "
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
            className="rounded-3xl relative pointer-events-none touch-none lg"
          >
            <Image
              className={`w-[40rem] h-full object-cover rounded-md `}
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
            className={`p-2 hover:cursor-pointer bg-paragraph rounded-full transition-colors  ${
              i === index && "bg-textColor"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
