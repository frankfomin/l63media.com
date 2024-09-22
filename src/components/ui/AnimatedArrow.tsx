"use client";

export default function AnimatedArrow() {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        className="z-10 w-6 stroke-current opacity-100 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full group-hover:opacity-0 sm:w-8 md:w-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        className="absolute z-10 w-6 -translate-x-full stroke-current opacity-0 transition-all duration-200 ease-in-out group-hover:-translate-y-full group-hover:translate-x-0 group-hover:opacity-100 sm:w-8 md:w-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </div>
  );
}
