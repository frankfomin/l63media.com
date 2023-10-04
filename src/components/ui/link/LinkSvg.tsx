export default function LinkSvg({
  children,
  classes,
  width,
  height,
}: {
  children: React.ReactNode;
  classes: string;
  width: string;
  height: string;
}) {


  return (
    <div
      className={`flex items-center duration-300 ease-in-out transition-all absolute ${classes}`}
    >
      <div>{children}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className={` cursor-pointer group-hover:opacity-60 ${width} ${height}}`}
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
