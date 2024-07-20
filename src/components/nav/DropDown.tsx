"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useStore } from "@/context/menuState";
import AnimatedLink from "../ui/AnimatedLink";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const { isOpen: menuIsOpen } = useStore();

  useEffect(() => {
    const links = document.querySelectorAll(".link");
    gsap.set(
      links,
      { y: "-400%" }, // final position
    );
    setIsOpen(false);
  }, [menuIsOpen]);

  useEffect(() => {
    const links = document.querySelectorAll(".link");
    if (!isOpen) {
      gsap.to(links, {
        duration: 0.4,
        delay: 0.1,
        opacity: 1,
        stagger: 0.025,
        y: "-400%",
        ease: "easeOut",
      });
    } else {
      gsap.fromTo(
        links,
        {
          opacity: 1,
        },
        {
          duration: 0.4,
          delay: 0.1,
          opacity: 1,
          stagger: 0.025,
          y: "0%",
          ease: "easeOut",
        },
      );
    }
  }, [isOpen]);

  return (
    <div className="nav-link flex flex-col gap-1">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center transition-all duration-300 hover:cursor-pointer"
      >
        <span className="select-none text-5xl sm:text-7xl lg:text-8xl">
          Arbeten
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 8"
          fill="none"
          className={`h-14 w-14 transition-all duration-300 sm:h-16 sm:w-16 lg:h-20 lg:w-20 ${
            isOpen ? "-rotate-180" : ""
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
      <div className="relative ml-14 flex w-min flex-col gap-3 overflow-hidden whitespace-nowrap">
        <AnimatedLink variant="lg" className="link w-min" href="/reklamfilmer">
          Reklamfilmer
        </AnimatedLink>
        <AnimatedLink variant="lg" className="link w-min" href="/foto">
          Produktfoto
        </AnimatedLink>
        <AnimatedLink variant="lg" className="link w-min" href="/eventovrigt">
          Event/Övrigt
        </AnimatedLink>
      </div>
    </div>
  );
}
