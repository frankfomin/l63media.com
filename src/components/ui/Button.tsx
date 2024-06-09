import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import AnimatedArrow from "./AnimatedArrow";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type="submit"
      className="group flex w-min items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-full border-2 border-textColor bg-transparent px-5 py-2 font-montserrat text-5xl text-button font-normal uppercase disabled:border-paragraph disabled:text-paragraph"
    >
      {children}
      <AnimatedArrow />
    </button>
  );
}
