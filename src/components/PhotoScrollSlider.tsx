"use client";
import { FC, useRef, useEffect } from "react";
import { imagesArray } from "../lib/imagesArray";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const PhotoScrollSlider: FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      gsap.to(slider, {
        x: -400,
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
    <div className=" overflow-hidden rotate-[-1.5deg]">
      <div ref={sliderRef} className="flex bg-black p-3 gap-3 w-max ">
        {imagesArray.map((image, index) => (
          <Image
            className=" w-[35rem] aspect-square object-cover flex-shrink-0 rounded-md pointer-events-none"
            src={image.src}
            width={500}
            height={500}
            alt="cool image"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
