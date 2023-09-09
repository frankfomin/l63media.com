"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/vimeo";
import { gsap } from "gsap";
import Counter from "../ui/Counter";

type MobileVideoPlayerProps = {
  title: string;
  vimeoPath?: number;
};
export default function MobileVideoPlayer({
  title,
  vimeoPath,
}: MobileVideoPlayerProps) {
  const videoTextRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playButtonRef = useRef<HTMLDivElement>(null);
  const reactPlayerRef = useRef<ReactPlayer | null>(null); // Initialize as null
  const videoPlayerRef = useRef<HTMLVideoElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pauseButtonRef = useRef<HTMLDivElement>(null);
  const blurOverlayRef = useRef<HTMLDivElement>(null);

  const pauseBlinkRef = useRef<SVGSVGElement>(null);
  const currentDate = new Date();
  const [isMounted, setIsMounted] = useState(false);
  const [muted, setMuted] = useState(true);
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handlePause() {
    const videoPlayer = videoPlayerRef.current;

    if (videoPlayer) {
      gsapAnim();
      if (!muted) {
        setMuted(true);
        videoPlayer.pause();
      }
      if (muted) {
        setMuted(false);
        videoPlayer.play();
      }
    }
  }

  useEffect(() => {
    const tl = gsap.timeline({
      paused: true,
      repeat: -1,
      repeatDelay: 0,
      defaults: { duration: 0.2 },
    });
    if (pauseBlinkRef.current)
      tl.to(pauseBlinkRef.current, {
        opacity: 0,
      });
    tl.to(pauseBlinkRef.current, {
      opacity: 1,
    });
    if (!muted) {
      tl.play();
    } else {
      tl.kill();
    }
  }, [muted]);

  function gsapAnim() {
    const videoText = videoTextRef.current;
    const video = videoRef.current;
    const playButton = playButtonRef.current;
    const h1 = h1Ref.current;
    const blurOverlay = blurOverlayRef.current;
    if (muted) {
      gsap.to(video, {
        opacity: 0,
        ease: "easeOut",
      });
      gsap.to(blurOverlay, {
        opacity: 0,
        ease: "easeOut",
      });
      gsap.to(h1, {
        opacity: 0,
        zIndex: -2,
        ease: "easeOut",
      });
      gsap.to(videoText, {
        opacity: 0,
        ease: "easeOut",
      });
      gsap.to(playButton, {
        opacity: 0,
        ease: "easeOut",
      });
    } else {
      gsap.to(video, {
        opacity: 0.7,
        ease: "easeOut",
      });
      gsap.to(videoText, {
        opacity: 1,
        ease: "easeOut",
      });
      gsap.to(blurOverlay, {
        opacity: 1,
        ease: "easeOut",
      });

      gsap.fromTo(
        h1,
        { opacity: 0, y: -200 },
        {
          opacity: 1,
          y: 0,
          ease: "easeOut",
          delay: 0.05,
          zIndex: 0,
        }
      );
      gsap.to(playButton, {
        opacity: 1,
        ease: "easeOut",
        delay: 0.2,
      });
    }
  }
  function handlePlay() {
    const videoPlayer = videoPlayerRef.current;
    setTimeout(() => {
      setVideoIsPlaying(true);
    }, 400);
    gsapAnim();
    gsap.to(pauseButtonRef.current, {
      opacity: 1,
      ease: "easeOut",
      duration: 1,
    });

    if (videoPlayer) {
      videoPlayer.currentTime = 0;
      setMuted(false);
      videoPlayer.play();
    }
  }
  return (
    <>
      {isMounted ? (
        <header className="relative uppercase h-[100svh] flex justify-center items-center ">
          <div className="absolute aspect-[9/16] max-w-[45rem] h-[80%] rounded-[2rem]  flex justify-center items-center">
            <div
              onClick={videoIsPlaying ? handlePause : handlePlay}
              className=" absolute w-full h-full  rounded-[2rem] hover:cursor-pointer"
            />
            <div
              ref={pauseButtonRef}
              onClick={videoIsPlaying ? handlePause : handlePlay}
              className=" absolute -bottom-10 opacity-0 z-30"
            >
              <div className=" hover:cursor-pointer relative  rounded-[50%] border-4 p-1  flex justify-center items-center  ">
                {muted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    className="bi bi-play-fill ml-2 w-[4.5rem] h-[4.5rem] p-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    className="bi bi-pause w-[4.5rem] h-[4.5rem] p-2   "
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
                  </svg>
                )}
                <div className=" bg-black rounded-[50%] w-full h-full -z-10 absolute opacity-80 left-0 top-0" />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full items-center ">
            <h1
              ref={h1Ref}
              className="  z-10 text-projectHeaderTitle font-playfair font-semibold whitespace-nowrap"
            >
              {title}
            </h1>
            {!videoIsPlaying && (
              <div
                onClick={handlePlay}
                ref={playButtonRef}
                className=" hover:cursor-pointer rounded-[50%]  border-4  flex justify-center items-center z-20"
              >
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    className="bi bi-play-fill ml-2 w-[4.5rem] h-[4.5rem] p-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                  <div className=" bg-black rounded-[50%] w-full h-full -z-10 absolute opacity-80 left-0 top-0" />
                </div>
              </div>
            )}
          </div>

          <div className=" absolute touch-none aspect-[9/16] pointer-events-none overflow-hidden max-w-[45rem] h-[80%] rounded-[2rem] -z-10  flex justify-center items-center">
            <div
              ref={blurOverlayRef}
              onClick={videoIsPlaying ? handlePause : handlePlay}
              className=" absolute w-[102%] h-full hover:cursor-pointer  "
            >
              <div className="shadow-[inset_0px_0px_10px_10px_#1d1a1a] rounded-[2rem] absolute h-full w-full" />
            </div>
            <video
              ref={videoRef}
              src="/vhs-overlay.mp4"
              muted
              autoPlay
              loop
              className="w-full h-full object-cover absolute opacity-70 rounded-[2rem] aspect-[9/16]"
              preload="auto"
              controlsList="nofullscreen"
            />
            {/*   <ReactPlayer
                ref={(player) => (reactPlayerRef.current = player)}
                url={`https://vimeo.com/${vimeoPath}`}
                playing
                loop
                controls={false}
                muted={muted}
                width="100%"
                height="100%"
              /> */}
            <video
              ref={videoPlayerRef}
              src="/videos/cleanDrink.mp4"
              autoPlay
              loop
              preload="auto"
              muted={muted}
              controls={false}
              controlsList="nofullscreen"
            />
            <div
              ref={videoTextRef}
              className="flex flex-col absolute justify-between h-full p-projectHeaderPadding  w-full  text-2xl font-medium"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center  ">
                  <div> {videoIsPlaying ? "Pause" : "Play"}</div>
                  <svg
                    ref={pauseBlinkRef}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    className="bi bi-play-fill w-10 h-10 "
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                </div>
                <div>{currentDate.toLocaleDateString("en-US")}</div>
              </div>
              <div className="flex justify-between ">
                <div>SP</div>
                {videoIsPlaying ? "00:00:00" : <Counter />}
              </div>
            </div>
          </div>
        </header>
      ) : (
        ""
      )}
    </>
  );
}
