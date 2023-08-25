"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface headerProps {
  title: string;
}

export default function ProjectHeader({ title }: headerProps) {
  const [animFinished, setAnimFinished] = useState(false);
  const [storedScrollPosition, setStoredScrollPosition] = useState(0);
  const [timelineRunning, setTimelineRunning] = useState(true);

  const textRef = useRef<HTMLDivElement>(null);
  const videoDivRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  /*   useEffect(() => {
    const playButton = playButtonRef.current;

    if (playButton && animFinished) {
      gsap.to(playButton, {
        opacity: 1,
      });
    } else if (playButton && !animFinished) {
      gsap.to(playButton, {
        opacity: 0, // Hide the play button if animation is not finished
      });
    }
  }, [animFinished]); */

  /*   useEffect(() => {
    if (timelineRunning) {
      // Disable scrolling by setting overflow: hidden
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling by setting overflow: auto
      document.body.style.overflow = "auto";
    }
  }, [timelineRunning]); */

  useEffect(() => {
    const text = textRef.current;
    const video = videoDivRef.current;
    const header = headerRef.current;
    if (text && header) {
      gsap.to(text, {
        y: 50,
        opacity: 0,

        scrollTrigger: {
          trigger: text,
          start: "top",
          end: "bottom 20%",
          scrub: 0.5,
        },
      });
    }
  }, []);

  // Function to handle the play button click
  function handleClick() {
    // Scroll back to the stored scroll position with smooth behavior
    /*   if (!animFinished) {
      gsap.to(videoRef.current, {
        y: -80,
        width: "80%",
      });
      gsap.to(textRef.current, {
        y: 100,
      });
      setAnimFinished(true);
    }  */
    /*   const video = videoRef.current;

    if (animFinished) {
      if (video) {
        video.muted = false;
        video.controls = true;
      }

      window.scrollTo({
        top: storedScrollPosition,
        behavior: "smooth",
      }); */
  }

  // Additional logic you want to perform when the button is clicked
  // For example, starting the video playback

  return (
    <header ref={headerRef} className="flex items-center flex-col relative ">
      <div className=" min-h-[100svh] w-full flex justify-center">
        <div
          ref={textRef}
          className="absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <h1 className="text-[10rem] whitespace-nowrap font-playfair font-semibold">
            {title}
          </h1>
        </div>
        <div className=" relative flex justify-center items-center">
          <div
            onClick={handleClick}
            ref={playButtonRef}
            className=" hover:cursor-pointer  text-black rounded-[50%] aspect-square bg-white p-5 flex justify-center items-center z-10 absolute"
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
          <div className="h-[95%] w-[95%]  shadow-[inset_0px_0px_13px_13px_#1d1a1a] -z-10 rounded-[4rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="bg-black opacity-20 h-[95%] w-[95%] -z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[4rem]  " />
          <video
            src="/Untitled.mp4"
            muted
            controls={false}
            loop
            autoPlay
            className=" w-[95%] h-[95%] -z-30 object-cover rounded-[4rem] aspect-video"
          />
        </div>
      </div>
      {/*   <div
        onClick={handleClick}
        ref={videoDivRef}
        className=" relative flex h-full flex-col items-center justify-center min-h-[100svh]"
      >
        <video
          ref={videoRef}
          src="/Untitled.mp4"
          muted
          controls={false}
          loop
          autoPlay
          className=" -z-20 object-cover rounded-3xl h-[99%]  "
        />
        <div className="bg-black opacity-40 -z-20 absolute rounded-3xl" />

        <div
          onClick={handleClick}
          ref={playButtonRef}
          className=" hover:cursor-pointer opacity-0 text-black absolute rounded-[50%] aspect-square bg-white p-5 flex items-center justify-center"
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
      </div> */}
    </header>
  );
}
