"use client";

import { useEffect, useRef } from "react";
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
        <span ref={spanRef} className=" text-2xl ">
          Adam Lindsköld
        </span>
        <div className=" overflow-hidden">
          <div className="h-[99.6%] w-[99.6%]  shadow-[inset_0px_0px_14px_14px_#1d1a1a] -z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 roundedd-[4rem]"></div>

          <div className="bg-black opacity-20 h-[99%] w-[99%] -z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[4rem]  "></div>

          <video
            src="/videos/heroVideo.mp4"
            muted
            controls={false}
            loop
            autoPlay
            className="h-[99%] w-[99%] -z-30 object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            rounded-[4rem]"
          />
        </div>
      </div>
    </header>
  );
}
