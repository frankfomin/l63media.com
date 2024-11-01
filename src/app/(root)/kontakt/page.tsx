import Image from "next/image";
import AnimatedLink from "@/components/ui/AnimatedLink";
import Link from "next/link";
import ContactForm from "@/components/form/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Adam Lindsköld",
};

export default function ContactPage() {
  return (
    <main className="mt-24 flex flex-col items-center gap-24">
      <section className="flex items-center justify-center font-playfair text-subHeading uppercase leading-none">
        <div className="flex flex-col items-center">
          <div className="flex w-full items-center justify-between">
            <h1>Låt</h1>
            <Image
              src="/images/adam-kamera-solnedgang.webp"
              width={400}
              height={400}
              alt="Adam Lindsköld"
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
        </div>
      </section>
      {/*       <hr className="bg-paragraph w-full max-w-7xl px-6" />
       */}{" "}
      <section>
        <ContactForm />
      </section>
      {/*       <hr className="w-[60%] bg-paragraph" />
       */}{" "}
      <footer className="flex w-full flex-row-reverse items-end justify-between gap-4 px-6 py-6 font-montserrat uppercase sm:px-12 sm:py-12">
        <div className="flex flex-col gap-1 sm:flex-row sm:gap-5">
          <div className="flex justify-end">
            <AnimatedLink
              className=""
              variant="md"
              target="_blank"
              href="https://www.tiktok.com/@l63.media"
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
      </footer>
    </main>
  );
}
