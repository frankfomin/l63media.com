import Link from "next/link";
import LinkSvg from "./LinkSvg";

export default function LinkComp({ children }: { children: React.ReactNode }) {
  return (
    <div className="group pl-2 relative overflow-hidden ">
      <LinkSvg classes="group-hover:translate-x-full group-hover:opacity-60 translate-x-0">
        {children}
      </LinkSvg>
      <LinkSvg classes="group-hover:translate-x-0  group-hover:opacity-60 -translate-x-[120%]">
        {children}
      </LinkSvg>
      <div className="flex items-center opacity-0 overflow-hidden">
        <Link className="" href="#">
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
