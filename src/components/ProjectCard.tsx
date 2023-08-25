"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectMobileCard } from "@/components/ProjectMobileCard";
import { VideoPlayer } from "./VideoPlayer";
import { useRouter } from "next/navigation";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ProjectCardVariants = cva("hello", {
  variants: {
    variant: {
      rainbow: {
        div1: "bg-[#4A4C83]",
        div2: "bg-[#4C8418]",
        div3: "bg-[#D38300]",
        div4: "bg-[#C83900]",
        div5: "bg-[#D82C05]",
      },
      triColor: {
        div1: "bg-[#E8B053]",
        div2: "bg-[#E68526]",
        div3: "bg-[#BE3C42]",
      },
    },
    size: {
      default: "h-16",
      sm: "h-5",
    },
  },
  defaultVariants: {
    variant: "rainbow",
    size: "default",
  },
});

interface ProjectCardProps extends VariantProps<typeof ProjectCardVariants> {
  url: string;
  children: React.ReactNode;
}

const ProjectCard: FC<ProjectCardProps> = ({
  children,
  url,
  variant,
  size,
  ...props
}) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  console.log(variant);

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const cardRect = event.currentTarget.getBoundingClientRect();

    const relX = event.clientX - cardRect.left;
    const relY = event.clientY - cardRect.top;

    if (
      event.clientX > cardRect.left ||
      event.clientX < cardRect.right ||
      event.clientY > cardRect.top ||
      event.clientY < cardRect.bottom
    ) {
      setIsHovered(true);
    }

    if (
      event.clientX < cardRect.left ||
      event.clientX > cardRect.right ||
      event.clientY < cardRect.top ||
      event.clientY > cardRect.bottom
    ) {
      setIsHovered(false);
    }

    setMousePosition({ x: relX, y: relY });
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleClick() {
    router.push(`/projekt/${children}`);
  }

  return (
    <>
      <div
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="hover:cursor-pointer relative md:uppercase md:flex md:justify-between md:gap-24 md:max-w-7xl md:bg-project md:h-48 md:items-center md:rounded-xl md:text-2xl hidden "
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{
                scale: 0,
                opacity: 0.5,
                x: mousePosition.x,
                y: mousePosition.y,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: mousePosition.y - 90,
                x: mousePosition.x - 64,
              }}
              transition={{ type: "tween" }}
              exit={{ opacity: 0.5, scale: 0 }}
              className="absolute z-10 aspect-square w-80"
            >
              <VideoPlayer />
            </motion.div>
          )}
        </AnimatePresence>
        <div className=" rotate-90 text-2xl border-[1px]">vhs</div>
        <div className="projectCardText font-playfair font-medium">
          {children}
        </div>

        <div className=" flex justify-center items-center gap-3 ">
          <div className=" rotate-90 flex flex-col justify-center min-w-[12rem] ">
            <div className="h-16 bg-[#E8B053]"></div>
            <div className="h-16 bg-[#E68526]"></div>
            <div className="h-16 bg-[#BE3C42]"></div>
          </div>
          <div className=" rotate-90 origin-center font-medium text-2xl text-center">
            video <br /> cassette
          </div>
        </div>
      </div>
      <ProjectMobileCard title="sadkaiksd" />
    </>
  );
};

export { ProjectCard, ProjectCardVariants };
