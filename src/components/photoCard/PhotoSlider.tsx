"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { imagesArray } from "@/lib/imagesArray";
import PhotoCardWrapper from "./PhotoCardWrapper";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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
    </Splide>
  );
}
