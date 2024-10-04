import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import AnimatedLink from "./ui/AnimatedLink";

export default function Footer() {
  return (
    <footer className="relative mt-60 flex min-h-screen w-full flex-col items-center justify-between rounded-[3rem] bg-black font-playfair uppercase">
      <div />
      <div />
      <div className="flex items-center justify-center text-subHeading leading-none">
        <div className="flex flex-col items-center">
          <div className="flex w-full items-center justify-between">
            <h1>Låt</h1>
            <Image
              src="/images/adam-kamera-solnedgang.webp"
              width={400}
              height={400}
              alt="Adam Lindsköld kamera solnedgång"
              className="aspect-[1.5/1] w-image rounded-xl object-cover"
            />
            <h2>Oss</h2>
          </div>
          <div className="sm:text:2xl mt-4 flex w-full items-center justify-center gap-4 font-montserrat text-base font-normal opacity-100 lg:mt-8 lg:text-4xl">
            <span className="opacity-60">{`63°49'44.002"N`}</span>
            <span className="opacity-70">Umeå</span>
            <span className="opacity-60">{`20°15'25.268"E`}</span>
          </div>
          <div>Samarbeta</div>
          <div className="mt-10">
            <Link href="/kontakt">
              <Button>HÖR AV DIG</Button>
            </Link>
          </div>
        </div>
      </div>
      <div />
      <div className="flex w-full flex-row-reverse items-end justify-between gap-4 px-6 py-6 font-montserrat sm:px-12 sm:py-12">
        <div className="flex flex-col gap-1 sm:flex-row sm:gap-5">
          <div className="flex justify-end">
            <AnimatedLink
              className=""
              variant="md"
              target="_blank"
              href="https://www.tiktok.com/@a.lindskold"
            >
              TikTok
            </AnimatedLink>
          </div>
          <AnimatedLink
            variant="md"
            target="_blank"
            href="https://www.instagram.com/l63.media"
          >
            Instagram
          </AnimatedLink>
        </div>
        <div className="flex flex-col-reverse gap-1 xs:flex-col">
          <p className="block text-sm sm:hidden">Mail</p>
          <Link
            className="sm:text:2xl text-sm lg:text-4xl"
            href="mailto: kontakt@l63media.com"
          >
            kontakt@l63media.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
