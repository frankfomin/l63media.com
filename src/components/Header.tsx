"use client";

import { useEffect, useRef } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { gsap } from "gsap";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);


  useEffect(() => {
    if (textRef.current && headerRef.current && spanRef.current) {
      gsap.from(headerRef.current, {
        clipPath: "circle(0% at 50% 0)",
        ease: "easeOut",
        delay: 0.3,
      });
    
      gsap.from(textRef.current, {
        y: "100%",
        ease: "easeOut",
        duration: 0.35,
        delay: 0.7,
      });
      gsap.from(spanRef.current, {
        opacity: 0,
        ease: "easeOut",
        duration: 0.35,
        delay: 0.8,
      });


    }
  }, []);
  return (
    <header ref={headerRef} className="clipBox relative ">
      <div className="flex h-full flex-col items-center justify-center min-h-[100svh] textClip ">
        <div className="textClip pb-4">
          <h1
            ref={textRef}
            className="font-semibold text-[15vw]  font-playfair leading-none "
          >
            L63 Media
          </h1>
        </div>
        <span ref={spanRef} className=" text-2xl ">Adam Lindsköld</span>
        <VideoPlayer />
      </div>
    </header>
  );
}
