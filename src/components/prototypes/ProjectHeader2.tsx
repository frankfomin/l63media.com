"use client";
import Counter from "@/components/Counter";
import ReactPlayer from "react-player/vimeo";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function ProjectHeader2() {
  const videoTextRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playButtonRef = useRef<HTMLDivElement>(null);
  const reactPlayerRef = useRef<ReactPlayer | null>(null); // Initialize as null

  const currentDate = new Date();
  const [isMounted, setIsMounted] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handlePlay() {
    const videoText = videoTextRef.current;
    const video = videoRef.current;
    const playButton = playButtonRef.current;
    const reactPlayer = reactPlayerRef.current;

    gsap.to(video, {
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

    if (reactPlayer) {
      const internalPlayer = reactPlayer.getInternalPlayer();
      if (internalPlayer) {
        setMuted(false);
        console.log(muted);
        reactPlayer.seekTo(0);
        internalPlayer.play(); // Play the video
      }
    }
  }
  return (
    <>
      {isMounted ? (
        <header className="flex items-center flex-col relative uppercase">
          <h1 className=" text-9xl font-playfair font-semibold">Clean Drink</h1>
          <div className="  aspect-video w-full flex justify-center items-center">
            <div className="relative rounded-[4rem] overflow-hidden h-[95%] w-[95%] flex justify-center items-center">
              <ReactPlayer
                ref={(player) => (reactPlayerRef.current = player)}
                url="https://vimeo.com/858377870"
                playing
                loop
                muted={muted}
                width="100%"
                height="100%"
              />
              <video
                ref={videoRef}
                src="/vhs-overlay.mp4"
                muted
                autoPlay
                loop
                className="w-full h-full absolute opacity-70  aspect-video"
                preload="auto"
              />
              <div
                ref={videoTextRef}
                className="flex flex-col absolute justify-between h-full md:px-48 md:py-24 sm:px-24 px-10 py-10  w-full  text-3xl font-medium"
              >
                <div className="flex justify-between">
                  <div className="flex ">
                    <div>Play</div>
                  </div>
                  <div>{currentDate.toLocaleDateString("en-US")}</div>
                </div>
                <div className="flex justify-between ">
                  <div>SP</div>
                  <Counter />
                </div>
              </div>
            </div>

            <div
              onClick={handlePlay}
              ref={playButtonRef}
              className=" hover:cursor-pointer  rounded-[50%]    border-4  flex justify-center items-center z-10 absolute"
            >
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="white"
                  className="bi bi-play-fill ml-2 p-3 "
                  viewBox="0 0 16 16"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
                <div className=" bg-black rounded-[50%] w-full h-full -z-10 absolute opacity-80 left-0 top-0" />
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
