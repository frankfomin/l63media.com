"use client";
import Counter from "@/components/Counter";
import ReactPlayer from "react-player/vimeo";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function ProjectHeader() {
  const videoTextRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playButtonRef = useRef<HTMLDivElement>(null);
  const pauseButtonRef = useRef<HTMLDivElement>(null);
  const pauseBlinkRef = useRef<SVGSVGElement>(null);

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
        <header className="flex items-center flex-col relative uppercase">
          <div className="  aspect-video w-full flex justify-center items-center">
            <div className="relative  h-[95%] w-[95%] flex justify-center items-center">
              <div className="h-full w-full absolute z-10 hover:cursor-pointer"></div>
              <div className="flex flex-col w-full items-center absolute">
                <h1
                  ref={h1Ref}
                  className="  z-10 text-9xl font-playfair font-semibold"
                >
                  Clean Drink
                </h1>
                {!videoIsPlaying && (
                  <div
                    ref={playButtonRef}
                    className=" hover:cursor-pointer   rounded-[50%]  border-4  flex justify-center items-center z-10"
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
                onClick={videoIsPlaying ? handlePause : handlePlay}
                className=" z-10 w-full h-full absolute hover:cursor-pointer"
              />
              <div
                ref={pauseButtonRef}
                onClick={videoIsPlaying ? handlePause : handlePlay}
                className="flex z-10 justify-center w-full absolute -bottom-10 opacity-0"
              >
                <div className=" hover:cursor-pointer relative  rounded-[50%] border-4 p-1  flex justify-center items-center z-10 ">
                  <div className="">
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

              <div className=" h-full w-full rounded-[4rem] overflow-hidden">
                <ReactPlayer
                  ref={(player) => (reactPlayerRef.current = player)}
                  url="https://vimeo.com/858377870"
                  playing
                  loop
                  muted={muted}
                  width="100%"
                  height="100%"
                />
              </div>
              <video
                ref={videoRef}
                src="/vhs-overlay.mp4"
                muted
                autoPlay
                loop
                className="w-full h-full absolute opacity-70 rounded-[4rem] aspect-video"
                preload="auto"
              />
              <div
                ref={videoTextRef}
                className="flex flex-col absolute justify-between h-full md:px-48 md:py-24 sm:px-24 px-10 py-10  w-full  text-3xl font-medium"
              >
                <div className="flex justify-between">
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
          </div>
        </header>
      ) : (
        ""
      )}
    </>
  );
}
