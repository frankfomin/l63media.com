"use client";

import LinkComp from "./link/LinkComp";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll(".link");
    gsap.set(links, {
      opacity: 0,
      y: "300%",
    });
  }, []);
  function handleClick() {
    const links = document.querySelectorAll(".link");
    setIsOpen((prev) => !prev);
    if (isOpen) {
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
          y: "300%",
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
  }

  return (
    <div className="flex flex-col gap-1 nav-link">
      <div
        onClick={handleClick}
        className="flex items-center hover:cursor-pointer hover:opacity-60 transition-all duration-300 pl-10 pr-2 k"
      >
        <span className=" select-none">Tjänster</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 8"
          fill="none"
          className={`w-32 h-32 transition-all duration-300  p-3  ${
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
      <div className="flex text-paragraph flex-col gap-3 ml-32 text-6xl relative overflow-hidden">
        <LinkComp classes=" " link="link" width="w-14" height="h-14" href="/">
          Reklamfilmer
        </LinkComp>

        <LinkComp link="link" classes="  " width="w-14" height="h-14" href="/">
          Produktfoto
        </LinkComp>
      </div>
    </div>
  );
}
