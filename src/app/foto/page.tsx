"use client";

import { produktFotoArray } from "@/lib/produktFotoArray";
import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { number, set } from "zod";

export default function PhotoPage() {
  const isInViewRef = useRef<HTMLImageElement>(null);
  const splideRef = useRef<Splide>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    if (splideRef.current === null) return;
    if (splideRef.current.splide === null) return;
    const splide = splideRef.current.splide;

    splide?.on("moved", (newIndex) => {
      setPrevIndex(index);
      setIndex(newIndex);
    });
  }, [index]);

  useEffect(() => {
    if (lineRef.current === null) return;
    const lineWidth = lineRef.current.clientWidth / 5;
    if (index === 0) {
      if (prevIndex === 2) {
        const tl = gsap.timeline();
        tl.to(ballRef.current, {
          x: lineWidth * 5,
          duration: 0.2,
          opacity: 0,
        });
        tl.to(ballRef.current, {
          x: lineWidth * 0,
          duration: 0.01,
        });
        tl.to(ballRef.current, {
          x: lineWidth * 1,
          duration: 0.2,
          opacity: 1,
        });
      } else {
        gsap.to(ballRef.current, {
          x: lineWidth * 1,
          duration: 0.2,
        });
      }
    } else if (index === 1) {
      gsap.to(ballRef.current, {
        x: lineWidth * 2.5,
        duration: 0.3,
      });
    } else if (index === 2) {
      if (prevIndex === 0) {
        const tl = gsap.timeline();
        tl.to(ballRef.current, {
          x: lineWidth * 0,
          duration: 0.2,
          opacity: 0,
        });
        tl.to(ballRef.current, {
          x: lineWidth * 5,
          duration: 0.01,
        });
        tl.to(ballRef.current, {
          x: lineWidth * 4,
          duration: 0.2,
          opacity: 1,
        });
      } else {
        gsap.to(ballRef.current, {
          x: lineWidth * 4,
          duration: 0.3,
        });
      }
    }
  }, [index, prevIndex]);

  return (
    <main className="flex flex-col gap-14 items-center justify-center">
      <header className="flex items-center flex-col gap-7 mt-16">
        <h1 className="text-center text-9xl font-playfair font-semibold">
          ProduktFoto
        </h1>
        <span className="max-w-2xl text-center">
          Urna sed magna mauris sem pellentesque penatibus praesent. Imperdiet
          consectetur fermentum eget enim commodo tempor. Dictumst tristique a
          sed est et sit.
        </span>
      </header>
      <div className="flex flex-col items-center  gap-36">
        <div ref={imageContainerRef}>
          <Splide
            ref={splideRef}
            className="hover:cursor-grab    "
            options={{
              arrows: false,
              pagination: false,
              snap: false,
              type: "loop",
              perPage: 1,
              gap: "0rem",
            }}
          >
            {produktFotoArray.map((image, i) => (
              <SplideSlide
                key={i}
                className="rounded-3xl   relative  pointer-events-none touch-none"
              >
                <div className="flex-shrink-0 relative w-full h-full overflow-hidden ">
                  <Image
                    ref={isInViewRef}
                    className=" h-full w-full object-contain rounded-3xl  max-h-[70svh] "
                    src={image.src}
                    width={1000}
                    height={1000}
                    alt="cool image"
                    priority
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div ref={lineRef} className="w-[30%]  relative flex items-center ">
          <hr className="bg-white  w-full" />
          <div ref={ballRef} className="absolute flex justify-center">
            <div className="aspect-square rounded-md w-[6rem]  absolute -top-28  ">
              <Image
                className=" transition-all delay-1000 object-cover w-full h-full rounded-md"
                src={produktFotoArray[index].src}
                width={400}
                height={400}
                alt="saodkaso"
              />
            </div>
            <div className="rounded-[50%] translate-x-[] aspect-square p-2   bg-white" />
          </div>
        </div>
      </div>
    </main>
  );
}

{
  /* <Splide
hasTrack={false}
className="hover:cursor-grab"
options={{
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 3,
  gap: "0.4rem",

  breakpoints: {
    1200: {
      perPage: 3,
    },
    2500: {
      perPage: 4,
    },
    3440: {
      perPage: 6,
    },
    768: {
      perPage: 1,
    },
  },
}}
>
<motion.div className="bg-[#020202]" whileTap={{ cursor: "grabbing" }}>
  <PhotoCardWrapper>
    <SplideTrack className="">
      {imagesArray.map((image, index) => (
        <SplideSlide key={index} className="relative">
          <div className="flex-shrink-0 relative w-full h-full overflow-hidden">
            <div className="shadow-[inset_0px_0px_10px_10px_#000000] absolute h-full w-full" />
            <Image
              className="md:aspect-[3/3.5] photoSliderWidth aspect-square w-full object-cover h-full rounded-md"
              src={image.src} // Display the first image from the array
              width={500}
              height={500}
              alt="cool image"
            />
          </div>
        </SplideSlide>
      ))}
    </SplideTrack>
  </PhotoCardWrapper>
</motion.div>
</Splide> */
}
