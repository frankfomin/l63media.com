"use client";
import { useStore } from "@/context/menuState";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Nav() {
  const { isOpen, setIsOpen } = useStore();
  const [isAnimating, setIsAnimating] = useState(false);

  const menuIconRef = useRef<SVGSVGElement>(null);
  const closeIconRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const menuIcon = menuIconRef.current;
    const closeIcon = closeIconRef.current;
    if (menuIcon && closeIcon) {
      if (isOpen) {
        gsap.to(menuIcon, {
          opacity: 0,
          ease: "easeOut",
        });
        gsap.to(closeIcon, {
          opacity: 1,
          ease: "easeOut",
        });
      } else {
        gsap.to(menuIcon, {
          opacity: 1,
          ease: "easeOut",
        });
        gsap.to(closeIcon, {
          opacity: 0,
          ease: "easeOut",
        });
      }
    }
  }, [isOpen]);

  function handleClick() {
    // If animation is in progress, return early
    if (isAnimating) {
      return;
    }

    // Disable the button and start the animation
    setIsAnimating(true);
    setIsOpen(!isOpen);

    // Re-enable the button after a delay (1 second)
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
      animate={{ opacity: 1 }}
      className="flex items-center  w-full fixed sm:top-14 xs:top-8 top-6  z-50 text-3xl "
    >
      <div className="flex w-full  justify-between sm:mx-14 xs:mx-8 mx-7">
        <Link
          href="/"
          className="font-playfair text-3xl  
        flex  justify-start items-center"
        >
          L63
        </Link>
        <div
          onClick={handleClick}
          className="hover:cursor-pointer  flex 
        justify-end   items-center"
        >
          <svg
            ref={menuIconRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-align-right h-10"
          >
            <line x1="21" y1="10" x2="7" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="21" y1="18" x2="7" y2="18"></line>
          </svg>
          <svg
            ref={closeIconRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x h-10 absolute"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
