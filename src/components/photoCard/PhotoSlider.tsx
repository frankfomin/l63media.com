"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import PhotoCardWrapper from "./PhotoCardWrapper";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { aboutImages, productPhotos } from "@/constants/constants";

export default function PhotoSlider2() {
  return (
    <Splide
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
            {productPhotos.map((image, index) => (
              <SplideSlide key={index} className="relative">
                <div className="relative h-full w-full flex-shrink-0 overflow-hidden">
                  <div className="absolute h-full w-full shadow-[inset_0px_0px_10px_10px_#000000]" />
                  <Image
                    className="aspect-square h-full w-full rounded-md object-cover md:aspect-[3/3.5]"
                    src={image.src}
                    width={500}
                    height={500}
                    quality={100}
                    alt={image.alt}
                  />
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </PhotoCardWrapper>
      </motion.div>
    </Splide>
  );
}
