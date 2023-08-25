"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { imagesArray } from "@/lib/imagesArray";

export default function PhotoSlider() {
  const ConstraintsRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={ConstraintsRef} className=" overflow-hidden">
      <motion.div
        className="flex p-4 gap-4 bg-[#020202] hover:cursor-grab w-max"
        drag="x"
        whileTap={{ cursor: "grabbing" }}
        dragConstraints={ConstraintsRef}
      >
        {imagesArray.map((image, index) => (
          <Image
            className="aspect-[3/2.4] w-[30rem] object-cover flex-shrink-0 rounded-md pointer-events-none"
            src={image.src}
            width={300}
            height={300}
            alt="cool image"
            key={index}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
