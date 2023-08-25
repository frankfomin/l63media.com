import Image from "next/image";
import { FC } from "react";

type ProjectMobileCardProps = {
  children: React.ReactNode;
};

export const ProjectMobileCard: FC<ProjectMobileCardProps> = ({ children }) => {
  return (
    <div className="md:hidden block bg-black uppercase rounded-lg flex-shrink-0 ">
      <div className=" text-[3.8rem] text-center font-medium font-playfair px-2">
        {children}
      </div>
      <Image
        width={300}
        height={300}
        className=" w-full object-cover  max-h-[25rem]"
        alt="cool image"
        src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80"
      />
      <div>
        <div className="h-12 pl-3 font-semibold text-4xl flex items-center bg-[#BE3C42]">
          T-120
        </div>
        <div className="h-12 bg-[#E68526]"></div>
        <div className="h-12 bg-[#E8B053]"></div>
      </div>
      <div className=" flex items-center justify-between p-2 ">
        <div className="border-[1px] text-5xl text-[2.5rem] leading-none line font-semibold">VHS</div>
        <div className=" text-center">
          <div className=" text-3xl font-medium text-center ml-2">
            video cassette
          </div>
          <div className=" text-[1.1rem] leading-none gap-2 flex justify-between text-gray-300 ml-2">
            <span>recording</span>
            <span>and</span>
            <span>playback</span>
          </div>
        </div>
        <div className="lowercase rotate-90 text-[0.75rem]">246mm</div>
      </div>
    </div>
  );
};
