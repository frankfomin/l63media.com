import Link from "next/link";
import LinkSvg from "./LinkSvg";

export default function LinkComp({
  children,
  href,
  width,
  height,
  classes,
  link,
}: {
  children: React.ReactNode;
  href: string;
  width: string;
  height: string;
  classes?: string;
  link?: string;
}) {
  return (
    <div className={`group relative ${link}`}>
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
        <Link className="" href={href}>
          {children}
        </Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className={` w-8 h-8 cursor-pointer group-hover:opacity-60`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
    </div>
  );
}
