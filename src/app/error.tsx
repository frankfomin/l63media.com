"use client";

import Counter from "@/components/ui/Counter";
import Button from "@/components/ui/Button";
import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const currentDate = new Date();

  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = "hidden";
  }, []);

  // Function to format time in HH:MM:SS format

  // Function to pad a number with leading zero if less than 10

  return (
    <main className=" h-[100svh] uppercase flex flex-col justify-center gap-96">
      <div className="flex justify-between mx-40 text-3xl font-medium">
        <div className="flex items-center">
          <div>Play</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-play-fill w-10"
            viewBox="0 0 16 16"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
        </div>
        <div>{currentDate.toLocaleDateString("en-US")}</div>
      </div>
      <div className=" flex flex-col items-center gap-4">
        <h1 className=" font-semibold text-9xl leading-none">Error 404</h1>
        <h2 className=" text-4xl">Är du vilse?</h2>
        <Button></Button>
      </div>
      <div className="flex justify-between mx-40 text-3xl font-medium">
        <div>SP</div>
        <Counter />
      </div>
      <video
        src="/Untitled.mp4"
        muted
        loop
        autoPlay
        className="h-full w-full -z-20 object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
      />
      <video
        src="/vhs-overlay.mp4"
        muted
        loop
        autoPlay
        className="h-full w-full opacity-75 -z-10 object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
      />
    </main>
  );
};

export default Error;
