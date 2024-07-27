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
  index: number;
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
  index,
}: ProjectCardProps) {
  return (
    <AnimationPopup index={index} videoPath={videoPath}>
      <Link
        href={`/projekt/${path}`}
        className="flex w-full items-center justify-between gap-10 rounded-2xl bg-project"
      >
        <div className="flex rotate-90 flex-col-reverse items-center pb-2 lg:gap-4 lg:pb-12">
          <div className="VHS border-[1px] text-center text-5xl font-semibold">
            vhs
          </div>
          <div className="T-120 hidden text-4xl font-medium lg:block">
            T-120
          </div>
        </div>
        <div className="whitespace-nowrap font-playfair text-8xl text-projectHeaderTitle font-medium uppercase">
          {children}
        </div>
        <div className="flex items-center justify-center gap-2">
          <ProjectLines
            bg1={bg1}
            bg2={bg2}
            bg3={bg3}
            projectStyle={projectStyle}
            rotation={rotation as any}
            lineSpacing={lineSpacing as any}
            device="desktop"
            lineSize="desktop"
          />
          <div className="rotate-90 text-center text-2xl font-medium">
            video <br /> cassette
          </div>
        </div>
      </Link>
    </AnimationPopup>
  );
}

/*  <Link href={`/projekt/${path}`}>
      <AnimationPopup videoPath={videoPath}>
        <div className="flex rotate-90 flex-col-reverse items-center pb-2 lg:gap-4 lg:pb-12">
          <div className="VHS border-[1px] text-center text-5xl font-semibold">
            vhs
          </div>
          <div className="T-120 hidden text-4xl font-medium lg:block">
            T-120
          </div>
        </div>

        <div className="text-8xl whitespace-nowrap font-playfair font-medium">
          {children}
        </div>
        <div className="flex items-center justify-center gap-2">
          <ProjectLines
            bg1={bg1}
            bg2={bg2}
            bg3={bg3}
            projectStyle={projectStyle}
            rotation={rotation as any}
            lineSpacing={lineSpacing as any}
            device="desktop"
            lineSize="desktop"
          />
          <div className="rotate-90 text-center text-2xl font-medium">
            video <br /> cassette
          </div>
        </div>
      </AnimationPopup>
    </Link> */
