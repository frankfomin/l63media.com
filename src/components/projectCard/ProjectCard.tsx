import { FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import AnimationPopup from "./AnimationPopup";

export type ColorProps = VariantProps<typeof colors>;
export const colors = cva("", {
  variants: {
    rainbow: {
      0: "bg-[#4A4C83]",
      1: "bg-[#4C8418]",
      2: "bg-[#D38300]",
      3: "bg-[#C83900]",
      4: "bg-[#D82C05]",
    },
    triColor: {
      0: "bg-[#E8B053]",
      1: "bg-[#E68526]",
      2: "bg-[#BE3C42]",
    },
    purple: {
      0: "bg-[#4A305E]",
      1: "bg-[#4A4C83]",
      2: "bg-[#4C8418]",
    },
  },
});
export type SizeProps = VariantProps<typeof size>;

export const size = cva("", {
  variants: {
    size: {
      sm: "h-5",
      default: "h-16",
    },
  },
});

interface ProjectCardProps extends ColorProps {
  path?: string,
  videoPath?: string,

  children: React.ReactNode;
}

const ProjectCard: FC<ProjectCardProps> = ({
  children,
  path,
  rainbow,
  triColor,
  purple,
  videoPath,
}) => {
  return (
    <Link href={`/projekt/${path}`}>
      <AnimationPopup videoPath={videoPath}>
        <div className=" rotate-90 flex flex-col-reverse items-center lg:gap-4  lg:pb-12 pb-2">
          <div className=" text-5xl VHS font-semibold border-[1px]  text-center  ">vhs</div>
          <div className=" text-4xl T-120 font-medium lg:block hidden">T-120</div>
        </div>

        <div className="projectCardText whitespace-nowrap font-playfair font-medium">
          {children}
        </div>
        <div className=" flex justify-center items-center gap-2 ">
          <div className=" rotate-90 min-w-[12rem] ">
            {triColor && (
              <div>
                <div className={` h-16 ${colors({ triColor: 0 })}`} />
                <div className={` h-16 ${colors({ triColor: 1 })}`} />
                <div className={` h-16 ${colors({ triColor: 2 })}`} />
              </div>
            )}
            {rainbow && (
              <div className="flex justify-between flex-col gap-[1.43rem]">
                <div className={`h-5 w-full ${colors({ rainbow: 0 })}`} />
                <div className={` h-5 w-full ${colors({ rainbow: 1 })}`} />
                <div className={` h-5 w-full ${colors({ rainbow: 2 })}`} />
                <div className={` h-5 w-full ${colors({ rainbow: 3 })}`} />
                <div className={` h-5 w-full ${colors({ rainbow: 4 })}`} />
              </div>
            )}
            {purple && (
              <div>
                <div className={` h-16 ${colors({ purple: 0 })}`} />
                <div className={` h-16 ${colors({ purple: 1 })}`} />
                <div className={` h-16 ${colors({ purple: 2 })}`} />
              </div>
            )}
          </div>
          <div className=" rotate-90 font-medium text-2xl text-center">
            video <br /> cassette
          </div>
        </div>
      </AnimationPopup>
    </Link>
  );
};

export { ProjectCard };
