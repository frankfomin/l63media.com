"use client";
import Counter from "@/components/Counter";

export default function ProjectHeader2() {
  const currentDate = new Date();

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
        <div className=" hover:cursor-pointer   rounded-[50%] aspect-square bg-black border-4 p-3 flex justify-center items-center z-10 absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="white"
            className="bi bi-play-fill ml-2 opacity-1"
            viewBox="0 0 16 16"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
        </div>
        <div className="flex flex-col justify-between h-full md:mx-48 md:py-24 sm:mx-24 mx-20 py-20  w-full gap-96  text-3xl font-medium">
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
    </header>
  );
}
