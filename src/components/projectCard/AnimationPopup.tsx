"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
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
      className="gapProjectCard relative hidden hover:cursor-pointer md:flex md:items-center md:justify-between md:rounded-xl md:bg-project md:text-2xl md:uppercase"
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
            <div className="relative flex items-center justify-center">
              <video
                src={`https://utfs.io/f/${videoPath}`}
                className="aspect-square rounded-[3rem] object-cover"
                autoPlay
                loop
                muted
                poster="/images/adam-diplom.webp"
                preload="auto"
              />
              <div className="absolute">
                <div className="relative z-10 flex items-center justify-center rounded-[50%] border-4 p-1 hover:cursor-pointer">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      fill="white"
                      className="bi bi-play-fill ml-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                    <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-[50%] bg-black opacity-80" />
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
