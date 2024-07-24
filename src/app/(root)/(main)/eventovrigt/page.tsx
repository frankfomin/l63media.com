import { eventVideos, videos } from "@/constants/constants";
import React from "react";

export default function EventPage() {
  return (
    <main className="mt-24 flex w-full justify-center">
      <section className="w-full max-w-7xl">
        {/* when user clicks on video go to projekt\[path] ?slug event to hide projects */}
        <div className="flex flex-wrap justify-center gap-6 px-6 xl:grid-cols-2">
          {eventVideos.map((video, i) => (
            <video
              id={i.toString()}
              key={i}
              src={`https://utfs.io/f/${video.src}`}
              muted
              poster="/images/adam-kamera-alv.webp"
              loop
              autoPlay
              className={`aspect-[9/16] max-h-[95vh] rounded-3xl object-cover`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
