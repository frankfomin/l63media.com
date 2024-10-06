"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/vimeo";
import { gsap } from "gsap";
import Counter from "../ui/Counter";

export default function MobileVideoPlayer({
  title,
  videoPath,
  specAd,
}: {
  title: string;
  videoPath: string;
  specAd?: boolean;
}) {
  const videoTextRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playButtonRef = useRef<HTMLDivElement>(null);
  const reactPlayerRef = useRef<ReactPlayer | null>(null); // Initialize as null
  const videoPlayerRef = useRef<HTMLVideoElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pauseButtonRef = useRef<HTMLDivElement>(null);
  const blurOverlayRef = useRef<HTMLDivElement>(null);

  const pauseBlinkRef = useRef<HTMLDivElement>(null);
  const currentDate = new Date();

  const [isMounted, setIsMounted] = useState(false);
  const [muted, setMuted] = useState(true);
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
  const [firstPlay, setFirstPlay] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handlePause() {
    const videoPlayer = videoPlayerRef.current;

    if (videoPlayer) {
      gsapAnim();
      if (!muted) {
        setVideoIsPlaying(false);
        setMuted(true);
        videoPlayer.pause();
      }
      if (muted) {
        setVideoIsPlaying(true);
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
        },
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

    setVideoIsPlaying(true);
    gsapAnim();
    gsap.to(pauseButtonRef.current, {
      opacity: 1,
      ease: "easeOut",
      duration: 1,
    });

    if (videoPlayer) {
      setFirstPlay(true);
      setMuted(false);
      videoPlayer.currentTime = 0;
      videoPlayer.volume = 0.2;
      videoPlayer.play(); // Play the video
    }
  }
  return (
    <>
      {isMounted ? (
        <header className="relative flex h-[100svh] items-center justify-center uppercase">
          <div className="absolute flex aspect-[9/16] h-[80%] max-w-[45rem] items-center justify-center rounded-3xl">
            <div
              onClick={videoIsPlaying ? handlePause : handlePlay}
              className="absolute h-full w-full rounded-3xl hover:cursor-pointer"
            />
            <div
              ref={pauseButtonRef}
              onClick={videoIsPlaying ? handlePause : handlePlay}
              className="absolute -bottom-10 z-30 opacity-0"
            >
              <div className="relative flex items-center justify-center overflow-hidden rounded-[50%] border-4 p-1 hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  className={`bi bi-play-fill absolute ml-2 h-[4.5rem] w-[4.5rem] p-2 transition-all duration-200 ${muted ? "translate-x-0" : "translate-x-full"}`}
                  viewBox="0 0 16 16"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  className={`bi bi-pause h-[4.5rem] w-[4.5rem] p-2 transition-all duration-200 ${muted ? "-translate-x-full" : "-translate-x-0"} }`}
                  viewBox="0 0 16 16"
                >
                  <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
                </svg>
                <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-[50%] bg-black opacity-80" />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-center">
            <h1
              ref={h1Ref}
              className="z-10 whitespace-nowrap font-playfair text-projectHeaderTitle font-semibold"
            >
              {title}
            </h1>
            {!firstPlay && (
              <div
                onClick={handlePlay}
                ref={playButtonRef}
                className="z-20 flex items-center justify-center rounded-[50%] border-4 hover:cursor-pointer"
              >
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    className="bi bi-play-fill ml-2 h-[4.5rem] w-[4.5rem] p-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                  <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-[50%] bg-black opacity-80" />
                </div>
              </div>
            )}
          </div>

          <div className="pointer-events-none absolute -z-10 flex aspect-[9/16] h-[80%] max-w-[45rem] touch-none items-center justify-center overflow-hidden rounded-3xl">
            <div
              ref={blurOverlayRef}
              onClick={videoIsPlaying ? handlePause : handlePlay}
              className="absolute h-full w-[102%] hover:cursor-pointer"
            >
              <div className="absolute h-full w-full rounded-3xl shadow-[inset_0px_0px_10px_10px_#1d1a1a]" />
            </div>
            <video
              ref={videoRef}
              src="/vhs-overlay.mp4"
              muted
              autoPlay
              loop
              playsInline
              className="pointer-events-none absolute z-10 aspect-[9/16] h-full w-full touch-none rounded-[2rem] object-cover opacity-70"
              preload="auto"
            />
            <video
              ref={videoPlayerRef}
              src={`https://utfs.io/f/${videoPath}`}
              loop
              autoPlay
              muted={muted}
              preload="auto"
              className="pointer-events-none absolute aspect-[9/16] h-full w-full touch-none rounded-[2rem] object-cover"
              width="100%"
              height="100%"
              playsInline
            />
            {specAd && (
              <p className="absolute right-0 top-0 p-projectHeaderPadding text-2xl font-semibold uppercase">
                Spec ad
              </p>
            )}
            <div
              ref={videoTextRef}
              className="absolute z-50 flex h-full w-full flex-col justify-between p-projectHeaderPadding text-2xl font-medium"
            >
              <div className="flex items-center justify-between">
                <div ref={pauseBlinkRef} className="flex items-center">
                  <div> {videoIsPlaying ? "Pause" : "Play"}</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    className="bi bi-play-fill h-10 w-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                </div>
                <div>{currentDate.toLocaleDateString("en-US")}</div>
              </div>
              <div className="flex justify-between">
                <div>SP</div>
                <Counter videoIsPlaying={!videoIsPlaying} />
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
