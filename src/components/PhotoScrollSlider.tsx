"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutImages } from "@/constants/constants";

gsap.registerPlugin(ScrollTrigger);

export default function PhotoScrollSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      gsap.to(slider, {
        x: -200,
        scrollTrigger: {
          trigger: slider,
          start: "top 97%",
          end: "bottom -20%",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <>
      <div className="rotate-[-1.5deg] overflow-hidden">
        <div
          ref={sliderRef}
          className="relative flex w-max gap-3 bg-secondary p-3"
        >
          {aboutImages.concat(aboutImages).map((image, index) => (
            <div
              className="relative aspect-[3/3.5] w-[22rem] flex-shrink-0"
              key={index}
            >
              <div className="absolute h-full w-full shadow-[inset_0px_0px_6px_6px_#020202]" />
              <Image
                className="pointer-events-none h-full w-full rounded-3xl object-cover"
                src={image.src}
                width={500}
                height={500}
                quality={100}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
