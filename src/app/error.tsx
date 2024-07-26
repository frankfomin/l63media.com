"use client";

import Counter from "@/components/ui/Counter";
import Button from "@/components/ui/Button";
import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const currentDate = new Date();

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <main className="flex h-[100svh] flex-col justify-center gap-96 uppercase">
      <div className="mx-40 flex justify-between text-3xl font-medium">
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
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-9xl font-semibold leading-none">Error 404</h1>
        <h2 className="text-4xl">Är du vilse?</h2>
        <Button>Gå tillbaka</Button>
      </div>
      <div className="mx-40 flex justify-between text-3xl font-medium">
        <div>SP</div>
        <Counter videoIsPlaying />
      </div>
      <video
        src="/Untitled.mp4"
        muted
        loop
        autoPlay
        className="absolute left-1/2 top-1/2 -z-20 h-full w-full -translate-x-1/2 -translate-y-1/2 transform object-cover"
      />
      <video
        src="/vhs-overlay.mp4"
        muted
        loop
        autoPlay
        className="absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 transform object-cover opacity-75"
      />
    </main>
  );
};

export default Error;
