"use client";

import { FC, useEffect, useState } from "react";

interface ProjectVideoPlayerProps {}

export const ProjectVideoPlayer: FC<ProjectVideoPlayerProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      {isMounted ? (
        <div className=" overflow-hidden" >
          <div className="h-[99.6%] w-[99.6%]  shadow-[inset_0px_0px_14px_14px_#1d1a1a] -z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 roundedd-[4rem]"></div>

          <div className="bg-black opacity-20 h-[99%] w-[99%] -z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[4rem]  "></div>

          <video
            src="/Untitled.mp4"
            muted
            controls={false}
            loop
            autoPlay
            className="h-[99%] w-[99%] -z-30 object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            rounded-[4rem]"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
