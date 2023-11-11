import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import LinkComp from "./ui/link/LinkComp";
import AnimatedLink from "./ui/AnimatedLink";

export default function Footer() {
  return (
    <footer className="font-playfair flex flex-col items-center justify-between bg-black w-full relative min-h-[100svh] sm:rounded-[6rem] rounded-[2rem] mt-60">
      <div />
      <div />
      <div className="text-subHeading leading-none flex justify-center items-center ">
        <div className=" flex flex-col items-center  ">
          <div className="flex justify-between  items-center w-full">
            <h1>Låt</h1>
            <Image
              src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              width={400}
              height={400}
              alt="cool image"
              className="aspect-[1.5/1]  w-image object-cover rounded-xl"
            />
            <h2>Oss</h2>
          </div>
          <div className=" mt-4 lg:mt-8 font-montserrat font-normal opacity-100 text-coordinates flex justify-center gap-4  w-full items-center">
            <span className="opacity-60">{`63°49'44.002"N`}</span>
            <span className=" opacity-70">Umeå</span>
            <span className="opacity-60">{`20°15'25.268"E`}</span>
          </div>
          <div>Samarbeta</div>
          <div className=" mt-10">
            <Link href="/kontakt">
              <Button>HÖR AV DIG</Button>
            </Link>
          </div>
        </div>
      </div>
      <hr className=" p-2 w-[80%]" />
      <div className="flex w-full items-center justify-between sm:px-14 px-4 sm:mb-14 mb-4 font-montserrat text-footerLink">
        <Link href="mailto: johndoe@gmail.com">jonas@gmail.com</Link>
        <div className="flex sm:gap-5 gap-1">
          <AnimatedLink
            variant="md"
            target="_blank"
            href="https://www.tiktok.com"
          >
            TikTok
          </AnimatedLink>
          <AnimatedLink
            variant="md"
            target="_blank"
            href="https://www.instagram.com/"
          >
            Instagram
          </AnimatedLink>
        </div>
      </div>
    </footer>
  );
}
