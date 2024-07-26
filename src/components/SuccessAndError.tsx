import React from "react";
import Counter from "./ui/Counter";
import Link from "next/link";
import Button from "./ui/Button";

export default function SuccessAndError({
  paragraphText,
  title,
  buttonTitle,
}: {
  title: string;
  paragraphText: string;
  buttonTitle: string;
}) {
  const currentDate = new Date();

  return (
    <main className="flex h-[100svh] flex-col justify-between text-textColor">
      <div className="flex justify-between p-projectHeaderPadding text-3xl font-medium uppercase">
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
      <div className="flex flex-col items-center gap-4 sm:gap-6">
        <div className="flex flex-col items-center">
          <h1 className="font. text-[12vw] font-semibold uppercase leading-none">
            {title}
          </h1>
          <h2 className="text-2xl sm:text-4xl">{paragraphText}</h2>
        </div>
        <Link href="/">
          <Button>{buttonTitle}</Button>
        </Link>
      </div>
      <div className="flex justify-between p-projectHeaderPadding text-3xl font-medium">
        <div>SP</div>
        <Counter videoIsPlaying />
      </div>
      <video
        src="/videos/heroVideo.mp4"
        muted
        loop
        autoPlay
        className="absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 transform object-cover"
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
}
