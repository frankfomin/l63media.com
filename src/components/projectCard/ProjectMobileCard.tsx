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
}: ProjectMobileCardProps) {
  return (
    <Link className="flex flex-col items-center" href={`/projekt/${path}`}>
      <div className="md:hidden max-w-[95%]  bg-black uppercase rounded-lg ">
        <div className="text-mobileCardTitle text-center font-medium font-playfair ">
          {children}
        </div>
        <div className="relative">
          <div className="shadow-[inset_0px_0px_10px_0px_#000000] absolute h-full w-full" />

          <Image
            width={300}
            height={300}
            className=" w-full object-cover max-h-[30rem]"
            alt="cool image"
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

        <div className=" flex items-center justify-between p-1">
          <div className="border-[1px] text-mobileCardVHS leading-none line font-semibold">
            VHS
          </div>
          <div className=" text-center">
            <div className=" text-mobileCardVD font-medium text-center ml-4">
              video cassette
            </div>
            <div className=" text-mobileCardRAP leading-none  flex justify-between text-gray-300 ml-4">
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
