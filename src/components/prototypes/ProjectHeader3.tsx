"use client";
import Counter from "@/components/Counter";
import ReactPlayer from "react-player";
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
        <header className=" relative uppercase h-[100svh]">
          <div
            ref={playButtonRef}
            className="flex justify-center  w-full z-10 h-full items-center absolute"
          >
            <div className="flex gap-4 ">
              <span className="text-[10rem] font-playfair font-semibold">
                Clean
              </span>
              <div className="flex items-center justify-center mt-4">
                <div
                  onClick={handlePlay}
                  className=" hover:cursor-pointer relative  rounded-[50%] border-4 p-5  flex justify-center items-center z-10"
                >
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      fill="white"
                      className="bi bi-play-fill ml-2 "
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                    <div className=" bg-black rounded-[50%] w-full h-full -z-10 absolute opacity-80 left-0 top-0" />
                  </div>
                </div>
              </div>
              <span className="text-[10rem] font-playfair font-semibold">
                Drink
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[9/16] w-[35%] max-w-[40rem]  flex justify-center items-center">
              <ReactPlayer
                ref={(player) => (reactPlayerRef.current = player)}
                url="https://vimeo.com/858377940"
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
                className="w-full h-full object-cover aspect-[9/16] absolute opacity-70  "
                preload="auto"
              />
              <div
                ref={videoTextRef}
                className="flex flex-col absolute justify-between p-12 h-full w-full text-2xl font-medium"
              >
                <div className="flex justify-between ">
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
          </div>
        </header>
      ) : (
        ""
      )}
    </>
  );
}
