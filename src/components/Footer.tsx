"use client";

import Link from "next/link";
import Button from "./ui/Button";
import { usePathname } from "next/navigation";

export default function Footer() {
  const path = usePathname()
  const svg = (
    <div className=" bg-white aspect-square rounded-[50%] p-1 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="black"
        className="w-6 h-6 z-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </div>
  );
  if (path === "/tratt") {
    return null;
  }
  return (
    <footer className=" flex flex-col gap-10 text-center   uppercase bg-black py-36 rounded-[4rem] mt-40">
      <div className=" font-playfair text-9xl">Hör av dig</div>
      <Button></Button>
      <div className="flex gap-6 justify-center text-3xl ">
        <div className=" flex items-center gap-2">
          <Link href="#">TIKTOK</Link>
          {svg}
        </div>
        <div className=" flex items-center gap-2">
          <Link href="#">Instagram</Link>
          {svg}
        </div>
        <div className=" flex items-center gap-2">
          <Link href="#">youtube</Link>
          {svg}
        </div>
      </div>
    </footer>
  );
}
