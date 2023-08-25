"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export default function HomeAnimationCard({
  children,
}: {
  children: React.ReactNode;
}) {
  /*  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef && wrapperRef) {
      const tl = gsap.timeline({duration: 1});

      tl.to(videoRef, {
        opacity: 1,
      });

      tl.to(wrapperRef, {
        opacity: 1,
      });
    }
  }, []); */

  const [exitHomePage, setExitHomePage] = useState(false);
  const pathname = usePathname();
  useEffect(() => {

    if (pathname != "/") {
      setExitHomePage(true);
    } else {
      setExitHomePage(false);
    }
  }, [pathname]);

  return (
    <AnimatePresence initial={false} mode="wait">
      {!exitHomePage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 4 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
