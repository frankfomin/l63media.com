import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import AnimatedArrow from "./AnimatedArrow";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type="submit"
      className="uppercase w-min whitespace-nowrap text-5xl  font-montserrat group text-button overflow-hidden disabled:text-paragraph bg-transparent border-[3px]
       border-textColor disabled:border-paragraph px-5 py-2 rounded-full flex justify-center items-center gap-1 font-normal"
    >
      {children}
      <AnimatedArrow />
    </button>
  );
}
