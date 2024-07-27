"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type AnimationPopup = {
  children: React.ReactNode;
  videoPath?: string;
  index: number;
};

export default function AnimationPopup({
  children,
  videoPath,
  index,
}: AnimationPopup) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardSize, setCardSize] = useState({ width: 0, height: 0 });

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setIsHovered(true);
    updateMousePosition(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    updateMousePosition(e);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const updateMousePosition = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
    setCardSize({
      width: e.currentTarget.offsetWidth,
      height: e.currentTarget.offsetHeight,
    });
  };
  console.log(index);
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative hidden w-full max-w-7xl justify-center bg-pink-500 px-6 hover:cursor-pointer md:flex md:items-center md:rounded-xl md:text-2xl md:uppercase"
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{
              scale: 0,
              opacity: 0.5,
              x: mousePosition.x - cardSize.width / 2 - 300,
              y: mousePosition.y - cardSize.height * (index + 3),
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePosition.x - cardSize.width / 2 - 300,
              y: mousePosition.y - cardSize.height * (index + 3),
            }}
            transition={{ type: "tween" }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute left-1/2 top-1/2 z-10 w-80 -translate-x-1/2 -translate-y-1/2 transform"
          >
            <div className="relative flex items-center justify-center">
              <video
                src={`https://utfs.io/f/${videoPath}`}
                className="aspect-square rounded-2xl object-cover"
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
