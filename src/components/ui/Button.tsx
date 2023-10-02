import Link from "next/link";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center font-montserrat">
      <button
        type="submit"
        className="uppercase group text-button bg-transparent border-2 px-5 py-1 rounded-full flex justify-center items-center gap-1"
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#FAA916"
          className="sm:w-8 md:w-10 w-6 z-10 group-hover:rotate-45 transition-transform"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </button>
    </div>
  );
}
