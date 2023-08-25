/* "use client";

import Image from "next/image";
import PhotoCardWrapper from "./PhotoCardWrapper";
import { imagesArray } from "@/lib/imagesArray";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PhotoCard() {
  const ConstraintsRef = useRef<HTMLDivElement>(null);
  const isInViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(isInViewRef);
  return (
    <motion.div ref={ConstraintsRef}>
      <motion.div
        drag="x"
        dragConstraints={ConstraintsRef}
        whileTap={{ cursor: "grabbing" }}
        className=" gap-[0.60rem] flex flex-col bg-black hover:cursor-grab "
      >
        <PhotoCardWrapper>
          <div>
            <div className="flex gap-[0.60rem] ">
              {imagesArray.map((image, i) => (
                <div
                  className="relative aspect-[3/4] w-[22rem] flex-shrink-0"
                  key={i}
                  ref={i === imagesArray.length - 1 ? isInViewRef : null}
                >
                  <div className=" shadow-[inset_0px_0px_2px_2px_rgba(0,0,0,1)]  absolute h-full w-full" />
                  <Image
                    className=" object-cover rounded-md pointer-events-none h-full"
                    src={image.src}
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
              ))}
            </div>
          </div>
        </PhotoCardWrapper>
      </motion.div>
    </motion.div>
  );
}
 */