"use client";
import Counter from "@/components/ui/Counter";
import ReactPlayer from "react-player/vimeo";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

type VideoPlayerProps = {
  title: string;
  vimeoPath?: number;
};

export default function VideoPlayer({ title, vimeoPath }: VideoPlayerProps) {
  const videoTextRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playButtonRef = useRef<HTMLDivElement>(null);
  const pauseButtonRef = useRef<HTMLDivElement>(null);
  const pauseBlinkRef = useRef<SVGSVGElement>(null);
  const blurOverlayRef = useRef<HTMLDivElement>(null);

  const h1Ref = useRef<HTMLDivElement>(null);
  const reactPlayerRef = useRef<ReactPlayer | null>(null); // Initialize as null
  const currentDate = new Date();
  const [isMounted, setIsMounted] = useState(false);
  const [muted, setMuted] = useState(true);
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handlePause() {
    const reactPlayer = reactPlayerRef.current;

    if (reactPlayer) {
      const internalPlayer = reactPlayer.getInternalPlayer();
      gsapAnim();
      if (internalPlayer) {
        if (!muted) {
          setMuted(true);
          internalPlayer.pause();
        }
        if (muted) {
          setMuted(false);
          internalPlayer.play();
        }
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
    const pauseButton = pauseButtonRef.current;

    const h1 = h1Ref.current;
    if (muted) {
      gsap.to(video, {
        opacity: 0,
        ease: "easeOut",
      });
      gsap.to(h1, {
        opacity: 0,
        ease: "easeOut",
      });
      gsap.to(blurOverlayRef.current, {
        opacity: 0,
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
      gsap.to(blurOverlayRef.current, {
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
    const reactPlayer = reactPlayerRef.current;
    setTimeout(() => {
      setVideoIsPlaying(true);
    }, 400);

    gsapAnim();
    if (window.innerWidth > 640)
      gsap.to(pauseButtonRef.current, {
        opacity: 1,
        ease: "easeOut",
        duration: 1,
      });
    if (reactPlayer) {
      const internalPlayer = reactPlayer.getInternalPlayer();
      if (internalPlayer) {
        setMuted(false);
        reactPlayer.seekTo(0);
        internalPlayer.play(); // Play the video
      }
    }
  }

  return (
    <>
      {isMounted ? (
        <header className="flex items-center justify-center flex-col relative uppercase h-[100svh] ">
          <div className="absolute w-[85%] max-w-[100rem] aspect-video rounded-[4rem]  flex justify-center items-center">
            <div
              ref={pauseButtonRef}
              onClick={videoIsPlaying ? handlePause : handlePlay}
              className=" absolute sm:-bottom-10 -bottom-12 sm:opacity-0 opacity-100 z-30"
            >
              <div className=" hover:cursor-pointer relative overflow-hidden  rounded-[50%] border-4 p-1  flex justify-center items-center  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  className={`bi bi-play-fill ml-2 w-[4.5rem] h-[4.5rem] p-2 absolute transition-all ${
                    muted ? "translate-x-full" : " translate-x-0"
                  }`}
                  viewBox="0 0 16 16"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  className={`bi bi-pause w-[4.5rem] h-[4.5rem] p-2 transition-all ${
                    muted ? " translate-x-0" : "-translate-x-full"
                  } }`}
                  viewBox="0 0 16 16"
                >
                  <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
                </svg>
                <div className=" bg-black rounded-[50%] w-full h-full -z-10 absolute opacity-80 left-0 top-0" />
              </div>
            </div>
          </div>

          <div className="absolute sm:w-[85%] w-full  max-w-[100rem] aspect-video overflow-hidden sm:rounded-[4rem] rounded-3xl  flex justify-center items-center">
            <div
              ref={blurOverlayRef}
              onClick={videoIsPlaying ? handlePause : handlePlay}
              className=" absolute w-full h-full z-20  sm:rounded-[4rem] overflow-hidden rounded-3xl hover:cursor-pointer"
            >
              <div className="shadow-[inset_0px_0px_10px_10px_#1d1a1a] sm:rounded-[4rem] rounded-3xl absolute h-full w-full" />
            </div>
            <div className="flex flex-col w-full items-center absolute">
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
                  className=" hover:cursor-pointer rounded-[50%] hidden sm:flex  border-4   justify-center items-center z-20"
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
            <div
              ref={videoTextRef}
              className="flex flex-col z-10 absolute justify-between h-full md:px-28 md:py-16 sm:px-24 sm:py-10 px-8 py-8  w-full  sm:text-3xl text-2xl font-medium"
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
            <video
              ref={videoRef}
              src="/vhs-overlay.mp4"
              muted
              autoPlay
              loop
              className="w-full h-full absolute opacity-70  sm:rounded-[4rem] rounded-3xl aspect-video"
              preload="auto"
              controlsList="nofullscreen"
            />

            <ReactPlayer
              ref={(player) => (reactPlayerRef.current = player)}
              url={`https://vimeo.com/858377870`}
              playing
              loop
              controls={false}
              muted={muted}
              width="100%"
              height="100%"
              playsinline
            />
          </div>
        </header>
      ) : (
        ""
      )}
    </>
  );
}
