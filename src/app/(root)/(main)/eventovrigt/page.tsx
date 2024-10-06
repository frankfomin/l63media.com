import { eventVideos, videos } from "@/constants/constants";
import React from "react";

export default function EventPage() {
  return (
    <main className="mt-24 flex w-full justify-center">
      <section className="w-full max-w-[120rem]">
        {/* when user clicks on video go to projekt\[path] ?slug event to hide projects */}
        <div className="flex flex-wrap justify-center gap-6 px-6 sm:grid-cols-2 sm:justify-between">
          {eventVideos.map((video, i) => (
            <video
              id={i.toString()}
              key={i}
              src={`https://utfs.io/f/${video.src}`}
              muted
              poster="/images/loadingposter.jpg"
              loop
              autoPlay
              controls
              playsInline
              className={`${video.class ? "aspect-video" : "aspect-[9/16]"} ${video.class && "col-span-2"} max-h-[95vh] rounded-3xl p-1`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
