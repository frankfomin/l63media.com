import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const LineVariants = cva("flex justify-center items-center", {
  variants: {
    rotation: {
      level: "rotate-0",
      rotate45Right: "rotate-[-45deg]",
      rotate45Left: "rotate-45",
    },
    lineSpacing: {
      angled: "",
      horizontal: "py-5",
    },
    lineSize: {
      desktop: "w-80 h-5",
      mobile: "w-[32rem] p-3",
    },
    device: {
      mobile:
        "flex flex-col aspect-square w-full  overflow-hidden  gap-5 max-h-36",
      desktop:
        "flex flex-col max-w-[11rem] aspect-square overflow-hidden justify-around items-center gap-10",
    },
  },
  defaultVariants: {
    rotation: "level",
  },
});

export const projectColors = [
  {
    projectStyle: "engoUf",
    bg1: "bg-[#FFFFFF]",
    bg2: "bg-[#AF653B]",
    bg3: "bg-[#292828]",
  },
  {
    projectStyle: "bicycle",
    bg1: "bg-red-700",
    bg2: "bg-orange-600",
    bg3: "bg-stone-950",
  },
  {
    projectStyle: "pinkgrape",
    bg1: "bg-cyan-300",
    bg2: "bg-fuchsia-300",
    bg3: "bg-orange-300",
  },
  {
    projectStyle: "vaknavibbar",
    bg1: "bg-orange-400",
    bg2: "bg-amber-400",
    bg3: "bg-lime-500",
  },
  {
    projectStyle: "voir",
    bg1: "bg-green-500",
    bg2: "bg-sky-500",
    bg3: "bg-amber-900",
  },
  {
    projectStyle: "voir2",
    bg1: "bg-slate-50",
    bg2: "bg-green-300",
    bg3: "bg-yellow-900",
  },
  {
    projectStyle: "freshSoda",
    bg1: "bg-orange-400",
    bg2: "bg-yellow-400",
    bg3: "bg-lime-400",
  },
  {
    projectStyle: "raspberry",
    bg1: "bg-[#F68ECE]",
    bg2: "bg-[#F33239]",
    bg3: "bg-[#F68ECE]",
  },
  {
    projectStyle: "stahlaUf",
    bg1: "bg-[#F24134]",
    bg2: "bg-[#EC6F13]",
    bg3: "bg-[#363533]",
  },
];

interface LineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof LineVariants> {
  projectStyle: string;
  bg1: string;
  bg2: string;
  bg3: string;
  rotation: "level" | "rotate45Right" | "rotate45Left";
  device: "mobile" | "desktop";
  lineSpacing: "angled" | "horizontal";
}

export default function ProjectLines({
  bg1,
  bg2,
  bg3,
  projectStyle,
  rotation,
  device,
  lineSpacing,
  lineSize,
  ...props
}: LineProps) {
  console.log(bg1, bg2, bg3);
  return (
    <div
      className={`${cn(LineVariants({ device }))} ${cn(
        LineVariants({ lineSpacing }),
      )}`}
    >
      <div
        {...props}
        className={`${cn(LineVariants({ lineSize }))} ${
          projectColors.find((a) => a.projectStyle === projectStyle)?.bg1
        } ${cn(LineVariants({ rotation }))}`}
      />
      <div
        {...props}
        className={`${cn(LineVariants({ lineSize }))} ${
          projectColors.find((a) => a.projectStyle === projectStyle)?.bg2
        } ${cn(LineVariants({ rotation }))}`}
      />
      <div
        {...props}
        className={`${cn(LineVariants({ lineSize }))} ${
          projectColors.find((a) => a.projectStyle === projectStyle)?.bg3
        } ${cn(LineVariants({ rotation }))}`}
      />
    </div>
  );
}
