"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { imagesArray2 } from "@/lib/imagesArray2";
import { useStore } from "@/context/menuState";
import DropDown from "./DropDown";
import { usePathname } from "next/navigation";
import AnimatedLink from "../ui/AnimatedLink";
import { navImages } from "@/constants/constants";

const linkArray = [
  {
    name: "Hem",
    href: "/",
  },
  {
    name: "Om mig",
    href: "/om-mig",
  },
  {
    name: "Kontakt",
    href: "/kontakt",
  },
];
export default function NavMenu() {
  const { isOpen, setIsOpen } = useStore();
  const path = usePathname();

  useEffect(() => {
    setIsOpen(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

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
    const links = document.querySelectorAll(".nav-link");

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
          y: "-100%",
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

  /*   useEffect(() => {
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
 */
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
          className="hidden sm:flex absolute lg:-left-20 sm:-left-80 -left-96  -top-56 -z-10 gap-[0.6rem]  bg-black"
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
              {Array.from({ length: 75 }, (_, i) => (
                <div
                  className="aspect-[1.9/1] bg-textColor sm:p-2 p-1 rounded-sm"
                  key={i}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[0.6rem] ">
            {navImages.map((image, i) => (
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
              {Array.from({ length: 75 }, (_, i) => (
                <div
                  className="aspect-[1.9/1] bg-textColor sm:p-2 p-[0.4rem] rounded-sm"
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
                        fillOpacity="0.7"
                      />
                    </svg>
                  </div>
                  <div className="rotate-90 w-0">L63 media</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-4 font-medium
         justify-center sm:ml-72 h-full "
        >
          {linkArray.map((link, i) => (
            <div key={i} className="overflow-hidden">
              <AnimatedLink
                className="nav-link w-min whitespace-nowrap"
                variant="xxl"
                href={link.href}
              >
                {link.name}
              </AnimatedLink>
            </div>
          ))}
          <div className="overflow-hidden ">
            <DropDown />
          </div>
        </div>
        <div ref={myTextRef} className=" absolute bottom-10 right-10">
          Design & Dev | Frank Fomin
        </div>
      </div>
    </nav>
  );
}
