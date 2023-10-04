"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { imagesArray2 } from "@/lib/imagesArray2";
import { useStore } from "@/state/menuState";
import DropDown from "../ui/DropDown";

const linkArray = [
  {
    name: "Hem",
    href: "/",
  },
  {
    name: "Om mig",
    href: "/asda",
  },
  {
    name: "Kontakt",
    href: "/kontakt",
  },
];
export default function NavMenu() {
  const { isOpen } = useStore();

  const [activeIndex, setActiveIndex] = useState(0);
  const [clipStyle, setClipStyle] = useState(false);
  const leftImageContainerRef = useRef<HTMLDivElement>(null);
  const rightImageContainerRef = useRef<HTMLDivElement>(null);
  const navMenuRef = useRef<HTMLDivElement>(null);
  const myTextRef = useRef<HTMLDivElement>(null);

  function onHover(i: number) {
    setActiveIndex(i);
  }
  useEffect(() => {
    const navMenu = navMenuRef.current;
    const links = document.querySelectorAll(".nav-link"); // Assuming you add a class 'nav-link' to your links.

    if (navMenu) {
      if (isOpen) {
        gsap.from(leftImageContainerRef.current, {
          opacity: 0,
          ease: "easeOut",
          delay: 0.5,
          duration: 0.35,
        });
        gsap.from(myTextRef.current, {
          opacity: 0,
          ease: "easeOut",
          delay: 0.5,
          duration: 0.35,
        });
        gsap.to(navMenu, {
          top: 0,
          duration: 0.2,
          ease: "easeOut",
        });
        gsap.from(links, {
          ease: "easeOut",
          duration: 0.35,
          delay: 0.4,
          y: "100%",
        });
        gsap.from(navMenu, {
          clipPath: "circle(0% at 50% 0%)",
          delay: 0.2,
          ease: "easeOut",
        });
      } else if (!isOpen) {
        gsap.to(navMenu, {
          top: "-100%",
          duration: 0.2,
          ease: "easeOut",
        });
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const leftImageContainer = leftImageContainerRef.current;
    const rightImageContainer = rightImageContainerRef.current;

    if (leftImageContainer) {
      if (activeIndex === 0) {
        gsap.to(leftImageContainer, {
          y: "0%",
          opacity: 0.7,
          scale: 0.97,
          ease: "easeOut",
        });
        gsap.to(rightImageContainer, {
          y: "0%",
          opacity: 0.7,
          scale: 0.97,
          ease: "easeOut",
        });
      } else if (activeIndex === 1) {
        gsap.to(leftImageContainer, {
          y: "-20%",
          opacity: 0.7,
          scale: 0.96,
          ease: "easeOut",
        });
        gsap.to(rightImageContainer, {
          y: "20%",
          opacity: 0.7,
          scale: 0.97,
          ease: "easeOut",
        });
      } else if (activeIndex === 2) {
        gsap.to(leftImageContainer, {
          y: "-40%",
          scale: 0.96,
          ease: "easeOut",
        });
        gsap.to(rightImageContainer, {
          y: "40%",
          opacity: 0.7,
          scale: 0.97,
          ease: "easeOut",
        });
      } else if (activeIndex === 3) {
        gsap.to(leftImageContainer, {
          y: "-60%",
          opacity: 0.7,
          scale: 0.96,
          ease: "easeOut",
        });
        gsap.to(rightImageContainer, {
          y: "60%",
          opacity: 0.7,
          scale: 0.96,
          ease: "easeOut",
        });
      } else if (activeIndex === 4) {
        gsap.to(leftImageContainer, {
          y: "-80%",
          opacity: 0.7,
          scale: 0.96,
          ease: "easeOut",
        });
        gsap.to(rightImageContainer, {
          y: "80%",
          opacity: 0.7,
          scale: 0.96,
          ease: "easeOut",
        });
      } else if (activeIndex === -1) {
        gsap.to(leftImageContainer, {
          opacity: 1,
          scale: 1,
          ease: "easeOut",
        });
        gsap.to(rightImageContainer, {
          opacity: 1,
          scale: 1,
          ease: "easeOut",
        });
      }
    }
  }, [activeIndex]);

  return (
    <nav
      ref={navMenuRef}
      className={`${
        clipStyle ? "clipBoxNavClosed" : "clipBoxNavOpen"
      } uppercase h-[100svh] overflow-hidden fixed -top-full w-full bg-primary z-50 `}
    >
      <div className=" w-full h-full flex justify-center  relative ">
        <div
          ref={leftImageContainerRef}
          className="flex absolute lg:-left-20 sm:-left-80 -left-96  -top-56 -z-10 gap-[0.6rem]  bg-black"
        >
          <div className="flex bg-black">
            <div className=" flex flex-col gap-24 whitespace-nowrap mx-5">
              {Array.from({ length: 12 }, (_, i) => (
                <div className="flex flex-col gap-14" key={i}>
                  <div className="flex flex-col gap-2 w-0 items-center ">
                    <span className="rotate-90">25A</span>
                    <svg
                      width="19"
                      height="10"
                      viewBox="0 0 19 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-90"
                    >
                      <path
                        d="M0.5 0.5L0.499999 7.5L18.5 4L0.5 0.5Z"
                        fill="white"
                        fill-opacity="0.7"
                      />
                    </svg>
                  </div>
                  <div className=" rotate-90 w-0">L63 media</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-[1.05rem]">
              {Array.from({ length: 120 }, (_, i) => (
                <div
                  className="aspect-[1.9/1] bg-white sm:p-2 p-1 rounded-sm"
                  key={i}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[0.6rem] ">
            {imagesArray2.map((image, i) => (
              <div key={i} className="relative  ">
                <div className="shadow-[inset_0px_0px_10px_10px_#000000] absolute h-full w-full" />
                <Image
                  className={` object-cover aspect-square `}
                  src={image.src}
                  width={400}
                  height={400}
                  alt="1"
                />
              </div>
            ))}
          </div>
          <div className="flex bg-black">
            <div className="flex flex-col gap-[1.05rem]">
              {Array.from({ length: 120 }, (_, i) => (
                <div
                  className="aspect-[1.9/1] bg-white sm:p-2 p-[0.4rem] rounded-sm"
                  key={i}
                />
              ))}
            </div>
            <div className=" flex flex-col gap-24 whitespace-nowrap mx-5">
              {Array.from({ length: 12 }, (_, i) => (
                <div className="flex flex-col gap-14" key={i}>
                  <div className="flex flex-col gap-2 w-0 items-center ">
                    <span className="rotate-90">25A</span>
                    <svg
                      width="19"
                      height="10"
                      viewBox="0 0 19 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-90"
                    >
                      <path
                        d="M0.5 0.5L0.499999 7.5L18.5 4L0.5 0.5Z"
                        fill="white"
                        fill-opacity="0.7"
                      />
                    </svg>
                  </div>
                  <div className=" rotate-90 w-0">L63 media</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-4 font-medium
         justify-center ml-72 h-full lg:text-8xl sm:text-7xl text-5xl"
        >
          {linkArray.map((link, i) => (
            <div
              key={i}
              onMouseEnter={() => onHover(i)}
              className=" group w-min overflow-hidden pl-10 relative"
            >
              <div className="flex items-center  absolute transition-all duration-300 ease-in-out group-hover:translate-x-full translate-x-0">
                <Link
                  className="nav-link whitespace-nowrap group-hover:opacity-60"
                  href={link.href ? link.href : "#"}
                >
                  {link.name}
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className={`nav-link h-full w-full cursor-pointer group-hover:opacity-60 p-3`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div className="flex items-center absolute transition-all duration-300 ease-in-out group-hover:translate-x-0 -translate-x-[120%]">
                <Link
                  className="nav-link whitespace-nowrap group-hover:opacity-60"
                  href={link.href ? link.href : "#"}
                >
                  {link.name}
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className={`nav-link lg:w-28 lg:h-28 md:w-20 md:h-20 w-14 h-14 cursor-pointer group-hover:opacity-60`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div className="flex items-center opacity-0 ">
                <Link
                  className=" whitespace-nowrap "
                  href={link.href ? link.href : "#"}
                >
                  {link.name}
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className={`nav-link lg:w-28 lg:h-28 md:w-20 md:h-20 w-14 h-14 cursor-pointer `}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
          ))}
          <DropDown />
        </div>
        <div ref={myTextRef} className=" absolute bottom-10 right-10">
          Design & Dev | Frank Fomin
        </div>
      </div>
    </nav>
  );
}
