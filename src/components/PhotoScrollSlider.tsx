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
      <div className=" overflow-hidden rotate-[-1.5deg] ">
        <div
          ref={sliderRef}
          className="flex bg-[#020202] p-3 gap-3 w-max relative  "
        >
          {aboutImages.map((image, index) => (
            <div
              className="relative aspect-[3/3.5] w-[22rem] flex-shrink-0"
              key={index}
            >
              <div className=" shadow-[inset_0px_0px_5px_5px_#020202] absolute h-full w-full" />
              <Image
                className=" h-full w-full object-cover  rounded-md pointer-events-none"
                src={image.src}
                width={500}
                height={500}
                alt="cool image"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
