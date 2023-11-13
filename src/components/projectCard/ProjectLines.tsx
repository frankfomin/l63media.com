import { projectColors } from "@/constants/constants";
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
      desktop: "w-80 h-4",
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

interface LineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof LineVariants> {
  projectStyle: string;
  bg1: string;
  bg2: string;
  bg3: string;
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
  console.log(rotation);
  return (
    <div
      className={`${cn(LineVariants({ device }))} ${cn(
        LineVariants({ lineSpacing })
      )}`}
    >
      <div
        {...props}
        className={`${cn(LineVariants({ lineSize }))}  ${
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
