import Image from "next/image";
import Link from "next/link";
import ProjectLines from "./ProjectLines";

type ProjectMobileCardProps = {
  children: React.ReactNode;
  projectStyle: string;
  bg1: string;
  bg2: string;
  bg3: string;
  path: string;
  rotation: string;
  videoPath: string;
  lineSpacing: string;
  imagePath: string;
};

export default function ProjectMobileCard({
  children,
  bg1,
  bg2,
  bg3,
  projectStyle,
  rotation,
  lineSpacing,
  path,
  imagePath,
  videoPath,
}: ProjectMobileCardProps) {
  return (
    <Link
      className="flex flex-col items-center justify-evenly px-6"
      href={`/projekt/${path}`}
    >
      <div className="rounded-3xl bg-black uppercase md:hidden">
        <div className="text-center font-playfair text-mobileCardTitle font-semibold">
          {children}
        </div>
        <div className="relative">
          <div className="absolute h-full w-full shadow-[inset_0px_0px_3px_3px_#020202]" />

          <Image
            width={300}
            height={300}
            className="aspect-square max-h-[30rem] w-full object-cover"
            alt={children as string}
            src={imagePath}
          />
        </div>
        <ProjectLines
          bg1={bg1}
          bg2={bg2}
          bg3={bg3}
          projectStyle={projectStyle}
          rotation="level"
          lineSpacing={lineSpacing as any}
          device="mobile"
          lineSize="mobile"
        />

        <div className="flex w-full items-center justify-between gap-2 px-2 pb-2 xs:gap-10 sm:justify-normal">
          <div className="line border-[1px] text-3xl font-semibold leading-none">
            VHS
          </div>
          <div className="text-right">
            <div className="text-center text-base font-medium xs:whitespace-nowrap xs:text-2xl">
              video cassette
            </div>
            <div className="flex justify-between text-xs leading-none text-paragraph xs:text-sm">
              <span>recording</span>
              <span>and</span>
              <span>playback</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
