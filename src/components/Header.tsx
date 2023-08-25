import { useEffect, useRef } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { gsap } from "gsap";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;

    if (header) {
      const tl = gsap.timeline();

      tl.from(header, {
        clipPath: "circle(141.4% at 100% 100%)",
      });

      tl.progress(1);
      tl.reverse();
    }
  }, []);
  return (
    <header ref={headerRef} className="clipBox relative ">
      <div className="flex h-full flex-col items-center justify-center min-h-[100svh]">
        <h1 className="font-semibold text-[15vw]  font-playfair leading-none">
          L63 Media
        </h1>
        <span className=" text-2xl ">Adam Lindsköld</span>
      </div>
      <div className=" w-screen object-cover">
        <VideoPlayer />
      </div>
    </header>
  );
}
