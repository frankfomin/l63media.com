"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TextMask2() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
  const [shouldAnimateCursor, setShouldAnimateCursor] = useState(true); // Flag to control cursor animation

  const clipBoxRef = useRef<HTMLVideoElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playButtonRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const clipBoxOverlayRef = useRef<HTMLDivElement>(null);
  const clipBoxOverlay2Ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!shouldAnimateCursor) return; // Check if animation should be active

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;


    setMousePosition({ x, y });
  };

  function handleClick() {
    const playButton = playButtonRef.current;
    const title = titleRef.current;
    if (!videoIsPlaying) {
      const clipBox = clipBoxRef.current;
      if (clipBox && videoRef.current) {
        gsap.to(clipBox, {
          clipPath: `circle(100% at ${mousePosition.x}% ${mousePosition.y}%)`,
          duration: 0.6,
          ease: "easeOut",
        });
        gsap.to(clipBoxOverlayRef.current, {
          clipPath: `circle(0% at ${mousePosition.x}% ${mousePosition.y}%)`,
          duration: 0.3,
          ease: "power2.out", // Easing function
        });

        clipBox.muted = false;
        clipBox.autoplay = false;
        clipBox.loop = true;
        videoRef.current.hidden;
      }
      if (playButton && title) {
        gsap.to(title, {
          opacity: 0,
          ease: "easeOut",
        });
        gsap.to(playButton, {
          opacity: 0,
          duration: 0.1,
          ease: "easeOut",
        });
      }

      setVideoIsPlaying(true);
      setShouldAnimateCursor(false); // Stop cursor animation on click
    }
  }

  useEffect(() => {
    const video = videoRef.current;
    const clipBox = clipBoxRef.current;
    if (clipBox && video) {
      clipBox.play();
      video.play();
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const clipBox = clipBoxRef.current;

    if (!videoIsPlaying) {
      if (isHovered) {
        gsap.to(clipBox, {
          clipPath: `circle(15% at ${mousePosition.x}% ${mousePosition.y}%)`,
          ease: "power2.out", // Easing function
          duration: 0.3, // Animation duration
        });
        gsap.to(clipBoxOverlayRef.current, {
          clipPath: `circle(15% at ${mousePosition.x}% ${mousePosition.y}%)`,
          duration: 0.3,
          ease: "power2.out", // Easing function
        });
        gsap.to(clipBoxOverlay2Ref.current, {
          x: mousePosition.x,
          y: mousePosition.y,
          duration: 0.3,
          ease: "power2.out", // Easing function
        });
      } else {
        // If not hovered, reset the clipPath
        gsap.to(clipBox, {
          clipPath: `circle(0% at ${mousePosition.x}% ${mousePosition.y}%)`, // Reset to center with no radius
          ease: "power2.out", // Easing function
          duration: 0.3, // Animation duration
        });
        gsap.to(clipBoxOverlayRef.current, {
          clipPath: `circle(0% at ${mousePosition.x}% ${mousePosition.y}%)`,
          duration: 0.3,
          ease: "power2.out", // Easing function
        });
      }
    }
  }, [mousePosition, isHovered, videoIsPlaying]);

  return (
    <header className="flex items-center flex-col relative uppercase">
      <div className="min-h-[100vh] w-full flex justify-center">
        <div
          ref={titleRef}
          className="absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <h1 className="text-[10rem] whitespace-nowrap font-playfair font-semibold">
            Clean Drink
          </h1>
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          className="relative flex justify-center items-center"
        >
          <video
            ref={videoRef}
            src="/Untitled.mp4"
            muted
            autoPlay
            loop
            controls={false}
            className="w-[95%] h-[95%] grayscale -z-20 object-cover rounded-[4rem] aspect-video"
            preload="auto"
          />
          <div
            onClick={handleClick}
            ref={playButtonRef}
            className=" hover:cursor-pointer text-black rounded-[50%] aspect-square bg-white p-5 flex justify-center items-center z-10  absolute"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="black"
              className="bi bi-play-fill ml-2 opacity-1 "
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
          </div>
          {/*            <div className=" hover:cursor-pointer text-black color-red-600 rounded-[50%] aspect-square mix-blend-color-burn p-5 flex justify-center items-center z-10 absolute" />
           */}
    {/*       <div
            ref={clipBoxOverlay2Ref}
            className=" absolute w-[25%] aspect-square rounded-[50%] bg-black z-10"
          /> */}

          <div
            ref={clipBoxOverlayRef}
            className=" opacity-100  w-[95%] clipBoxProject h-[95%] aspect-video absolute "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 700 700"
              className=" w-full h-full  object-cover"
              opacity="1"
            >
              <defs>
                <filter
                  id="nnnoise-filter"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                  filterUnits="objectBoundingBox"
                  primitiveUnits="userSpaceOnUse"
                  color-interpolation-filters="linearRGB"
                >
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.2"
                    numOctaves="4"
                    seed="15"
                    stitchTiles="stitch"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    result="turbulence"
                  ></feTurbulence>
                  <feSpecularLighting
                    surfaceScale="18"
                    specularConstant="2.8"
                    specularExponent="20"
                    lighting-color="#727272"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    in="turbulence"
                    result="specularLighting"
                  >
                    <feDistantLight
                      azimuth="3"
                      elevation="161"
                    ></feDistantLight>
                  </feSpecularLighting>
                </filter>
              </defs>
              <rect width="700" height="700" fill="#000000b6"></rect>
              <rect
                width="700"
                height="700"
                fill="#727272"
                filter="url(#nnnoise-filter)"
              ></rect>
            </svg>
          </div>
          <video
            ref={clipBoxRef}
            src="/Untitled.mp4"
            muted
            autoPlay
            loop
            preload="auto"
            controls={false}
            className={`clipBoxProject blur-[1px] w-[95%] h-[95%] -z-10 object-cover rounded-[4rem] absolute aspect-video`}
          />
        </div>
      </div>
    </header>
  );
}
