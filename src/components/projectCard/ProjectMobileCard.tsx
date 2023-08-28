import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type ProjectMobileCardProps = {
  children: React.ReactNode;
  purple?: boolean;
  triColor?: boolean;
  rainbow?: boolean;
  path?: string;
};

export const ProjectMobileCard: FC<ProjectMobileCardProps> = ({
  children,
  triColor,
  rainbow,
  purple,
  path,
}) => {
  return (
    <Link href={`/projekt/${path}`}>
      <div className="md:hidden block bg-black uppercase rounded-lg ">
        <div className="text-mobileCardTitle text-center font-medium font-playfair ">
          {children}
        </div>
        <div className="relative">
          <div className="shadow-[inset_0px_0px_10px_0px_#000000] absolute h-full w-full" />

          <Image
            width={300}
            height={300}
            className=" w-full object-cover  max-h-[30rem]"
            alt="cool image"
            src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80"
          />
        </div>
        <div className="">
          {triColor && (
            <div className=" h-28">
              <div className="h-[33.3%] pl-3 font-semibold text-4xl flex items-center bg-[#BE3C42]">
                T-120
              </div>

              <div className="h-[33.3%] bg-[#E68526]"></div>
              <div className="h-[33.3%] bg-[#E8B053]"></div>
            </div>
          )}
          {rainbow && (
            <div className="flex justify-between flex-col gap-5 mt-3 h-28">
              <div className="h-[13%] w-full bg-[#4A4C83]" />
              <div className="h-[13%] w-full bg-[#4C8418] " />
              <div className="h-[13%] w-full bg-[#D38300]" />
              <div className="h-[13%] w-full bg-[#C83900]" />
              <div className="h-[13%] w-full bg-[#D82C05]" />
            </div>
          )}
          {purple && (
            <div className=" h-28">
              <div className="h-[33.3%] pl-3 font-semibold text-4xl flex items-center bg-[#4A305E]">
                T-120
              </div>

              <div className="h-[33.3%] bg-[#4A4C83]"></div>
              <div className="h-[33.3%] bg-[#4C8418]"></div>
            </div>
          )}
        </div>
        <div className=" flex items-center justify-between p-1">
          <div className="border-[1px] text-mobileCardVHS leading-none line font-semibold">
            VHS
          </div>
          <div className=" text-center">
            <div className=" text-mobileCardVD font-medium text-center ml-4">
              video cassette
            </div>
            <div className=" text-mobileCardRAD leading-none  flex justify-between text-gray-300 ml-4">
              <span>recording</span>
              <span>and</span>
              <span>playback</span>
            </div>
          </div>
          <div className="lowercase rotate-90 text-[0.75rem] sm:block hidden ">
            246mm
          </div>
        </div>
      </div>
    </Link>
  );
};
