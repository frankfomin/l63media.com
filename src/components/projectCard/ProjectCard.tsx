import { FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import AnimationPopup from "./AnimationPopup";
import ProjectLines from "./ProjectLines";

type ProjectCardProps = {
  children: React.ReactNode;
  projectStyle: string;
  bg1: string;
  bg2: string;
  bg3: string;
  path: string;
  rotation: string;
  videoPath: string;
  lineSpacing: string;
};

export default function ProjectCard({
  children,
  path,
  projectStyle,
  bg1,
  bg2,
  bg3,
  rotation,
  videoPath,
  lineSpacing,
}: ProjectCardProps) {
  console.log(rotation)
  console.log("PROJECOASOPDKOASD", rotation)
  return (
    <Link href={`/projekt/${path}`}>
      <AnimationPopup videoPath={videoPath}>
        <div className=" rotate-90 flex flex-col-reverse items-center lg:gap-4 lg:pb-12 pb-2">
          <div className=" text-5xl VHS font-semibold border-[1px]  text-center  ">
            vhs
          </div>
          <div className=" text-4xl T-120 font-medium lg:block hidden">
            T-120
          </div>
        </div>

        <div className="projectCardText whitespace-nowrap font-playfair font-medium">
          {children}
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <ProjectLines
            bg1={bg1}
            bg2={bg2}
            bg3={bg3}
            projectStyle={projectStyle}
            rotation={rotation}
            lineSpacing={lineSpacing}
            device="desktop"
            lineSize="desktop"
          />
          <div className="rotate-90  font-medium text-2xl text-center">
            video <br /> cassette
          </div>
        </div>
      </AnimationPopup>
    </Link>
  );
}
