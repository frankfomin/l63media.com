"use client";

export default function AnimatedArrow() {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        className="sm:w-8 md:w-10 w-6 z-10 group-hover:translate-x-full group-hover:opacity-0 opacity-100 group-hover:-translate-y-full transition-all duration-200 ease-in-out  stroke-current "
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
        className="absolute sm:w-8 md:w-10 w-6 z-10 -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-full  transition-all duration-200 ease-in-out  stroke-current "
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
