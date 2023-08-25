"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { VideoPlayer } from "../VideoPlayer";
import ReactPlayer from "react-player";

interface AnimationPopup {
  children: React.ReactNode;
}

export default function AnimationPopup({ children }: AnimationPopup) {
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
            className="absolute z-10 aspect-square w-80"
          >
           <ReactPlayer className="object-cover" muted playing loop url="https://vimeo.com/714042444"/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
