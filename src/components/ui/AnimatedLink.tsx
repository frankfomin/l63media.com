import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import React, { LinkHTMLAttributes, SVGProps } from "react";
import ActiveText from "./ActiveText";

const svgVariants = cva("group-hover:text-paragraph", {
  variants: {
    variant: {
      xs: "w-4 h-4",
      sm: "w-6 h-6",
      md: "lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-6 sm:h-6 w-4 h-4",
      lg: "lg:w-12 lg:h-12 sm:w-8 sm:h-8 w-6 h-6 ",
      xl: "w-16 h-16",
      xxl: "lg:w-20 lg:h-20 sm:w-16 sm:h-16 w-12 h-12",
    },
  },
  defaultVariants: {
    variant: "md",
  },
});

const linkVariants = cva("group-hover:text-paragraph ", {
  variants: {
    variant: {
      xs: " text-base",
      sm: "text-2xl sm:text-base text-sm",
      md: "lg:text-4xl sm:text:2xl text-base",
      lg: "lg:text-5xl sm:text-4xl text-3xl",
      xl: "text-7xl",
      xxl: "lg:text-8xl sm:text-7xl text-5xl",
    },
  },
  defaultVariants: {
    variant: "md",
  },
});

interface linkProps
  extends LinkHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof svgVariants>,
    VariantProps<typeof linkVariants> {
  href: string;
  target?: string;
}

export default function AnimatedLink({
  className,
  href,
  children,
  variant,
  target,
  ...props
}: linkProps) {
  return (
    <Link
      className={`group flex items-center relative overflow-hidden ${className}`}
      href={href}
      target={target}
      {...props}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          className={`transition-all duration-300 ease-in-out flex items-center 
          ${i === 0 ? "absolute -translate-x-full" : " translate-x-0"}  
          ${
            i === 0
              ? "group-hover:translate-x-0"
              : "group-hover:translate-x-full"
          }`}
          key={i}
        >
          <span className={`${cn(linkVariants({ variant }))}`}>
            <ActiveText href={href}>{children}</ActiveText>
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className={`${cn(svgVariants({ variant }))}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      ))}
    </Link>
  );
}

{
  /* <div className={`group relative flex items-center ${link}`}>
<LinkSvg
  width={width}
  height={height}
  classes={`group-hover:translate-x-[120%] group-hover:opacity-60 translate-x-0 ${classes}`}
>
  {children}
</LinkSvg>
<LinkSvg
  width={width}
  height={height}
  classes={`group-hover:translate-x-0  group-hover:opacity-60 -translate-x-[120%] ${classes} `}
>
  {children}
</LinkSvg>
<div className="flex items-center opacity-0 ">
  <Link className="" href={href} target={target}>
    {children}
  </Link>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className={` ${width} ${height} cursor-pointer group-hover:opacity-60`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
</div>
</div> */
}
