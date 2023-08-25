"use client";

import { FC, useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface VideoProps {}

export const VideoPlayer: FC<VideoProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      {isMounted ? (
        <>
          <div>
            <video
              src="/Untitled.mp4"
              muted
              controls={false}
              loop
              autoPlay
              className="h-[97%] w-[97%] -z-20 object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl"
            />
          </div>
          <div className="bg-black opacity-40 h-[97%] w-[97%] -z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl  "></div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
