"use client";
import Counter from "@/components/Counter";

export default function ProjectHeader2() {
  return (
    <header className="flex items-center flex-col relative uppercase">
      <div className="h-[100vh] w-full flex justify-center items-center">
        <video
          src="/Untitled.mp4"
          muted
          autoPlay
          loop
          className="w-[95%] h-[95%] absolute -z-20 object-cover rounded-[4rem] aspect-video"
          preload="auto"
        />
        <video
          src="/vhs-overlay.mp4"
          muted
          autoPlay
          loop
          className="w-[95%] h-[95%] absolute opacity-75 -z-20 object-cover rounded-[4rem] aspect-video"
          preload="auto"
        />
        <div className="flex flex-col justify-between h-full py-36  w-full gap-96 mx-48 text-3xl font-medium">
          <div className="flex justify-between">
            <div className="flex ">
              <div>Play</div>
            </div>
            <div>hello</div>
          </div>
          <div className="flex justify-between ">
            <div>SP</div>
            <Counter />
          </div>
        </div>
      </div>
    </header>
  );
}
