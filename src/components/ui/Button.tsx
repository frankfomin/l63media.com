import Link from "next/link";

export default function Button() {
  return (
    <Link href="" className="flex justify-center">
      <button className="uppercase text-3xl bg-transparent border-2 px-5 py-1 rounded-full flex justify-center items-center gap-1">
        Kontakt
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#C2F970"
          className="w-8 z-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </button>
    </Link>
  );
}
