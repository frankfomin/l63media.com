"use client";

import LinkComp from "../ui/link/LinkComp";
import { use, useEffect, useState } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import { useStore } from "@/context/menuState";
import AnimatedLink from "../ui/AnimatedLink";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const { isOpen: menuIsOpen } = useStore();

  useEffect(() => {
    const links = document.querySelectorAll(".link");
    gsap.set(
      links,
      { y: "-300%" } // final position
    );
    setIsOpen(false);
  }, [menuIsOpen]);

  useEffect(() => {
    const links = document.querySelectorAll(".link");
    if (!isOpen) {
      gsap.to(links, {
        duration: 0.35,
        delay: 0.1,
        opacity: 1,
        stagger: 0.05,
        y: "-300%",
        ease: "easeOut",
      });
    } else {
      gsap.fromTo(
        links,
        {
          opacity: 1,
        },
        {
          duration: 0.35,
          delay: 0.1,
          opacity: 1,
          stagger: 0.05,
          y: "0%",
          ease: "easeOut",
        }
      );
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col gap-1 nav-link">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center hover:cursor-pointer hover:opacity-60 transition-all duration-300"
      >
        <span className=" select-none lg:text-8xl sm:text-7xl text-5xl">
          Tjänster
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 8"
          fill="none"
          className={`lg:w-20 lg:h-20 sm:w-16 sm:h-16 w-14 h-14 transition-all duration-300 ${
            isOpen ? " -rotate-180" : ""
          }`}
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex text-paragraph flex-col gap-3  ml-14 w-min relative overflow-hidden">
        <AnimatedLink variant="lg" className="link w-min" href="/reklamfilmer">
          reklamfilmer
        </AnimatedLink>
        <AnimatedLink variant="lg" className="link w-min" href="/foto">
          produktfoto
        </AnimatedLink>
      </div>
    </div>
  );
}
