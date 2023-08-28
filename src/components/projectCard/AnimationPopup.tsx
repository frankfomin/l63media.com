"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { VideoPlayer } from "../VideoPlayer";

type AnimationPopup = {
  children: React.ReactNode;
  videoPath?: string;
};

export default function AnimationPopup({
  children,
  videoPath,
}: AnimationPopup) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const cardRect = event.currentTarget.getBoundingClientRect();

    const relX = event.clientX - cardRect.left;
    const relY = event.clientY - cardRect.top;

    if (
      event.clientX > cardRect.left ||
      event.clientX < cardRect.right ||
      event.clientY > cardRect.top ||
      event.clientY < cardRect.bottom
    ) {
      setIsHovered(true);
    }

    if (
      event.clientX < cardRect.left ||
      event.clientX > cardRect.right ||
      event.clientY < cardRect.top ||
      event.clientY > cardRect.bottom
    ) {
      setIsHovered(false);
    }

    setMousePosition({ x: relX, y: relY });
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="hover:cursor-pointer relative md:uppercase md:flex md:justify-between gapProjectCard md:bg-project md:items-center md:rounded-xl md:text-2xl hidden "
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{
              scale: 0,
              opacity: 0.5,
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: mousePosition.y - 90,
              x: mousePosition.x - 150,
            }}
            transition={{ type: "tween" }}
            exit={{ opacity: 0.5, scale: 0 }}
            className="absolute z-10 w-80"
          >
            <div className="relative flex justify-center items-center">
              <video
                src={`/videos/${videoPath}.mp4`}
                className=" rounded-[3rem] object-cover aspect-square "
                autoPlay
                loop
                muted
                preload="auto"
              />
              <div className=" absolute">
                <div className=" hover:cursor-pointer relative  rounded-[50%] border-4 p-1  flex justify-center items-center z-10">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      fill="white"
                      className="bi bi-play-fill ml-2 "
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                    <div className=" bg-black rounded-[50%] w-full h-full -z-10 absolute opacity-80 left-0 top-0" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
