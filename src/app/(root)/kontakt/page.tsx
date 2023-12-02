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
    <main className="uppercase flex items-center flex-col gap-24 mt-24">
      <section className=" font-playfair text-subHeading leading-none flex justify-center items-center">
        <div className=" flex flex-col items-center">
          <div className="flex justify-between  items-center w-full">
            <h1>Låt</h1>
            <Image
              src="/images/adam-kamera-alv.webp"
              width={400}
              height={400}
              alt="Adam Lindsköld"
              className="aspect-[1.5/1]  w-image object-cover rounded-xl"
            />
            <h2>Oss</h2>
          </div>
          <div className=" mt-4 lg:mt-8 font-montserrat font-normal opacity-100 lg:text-4xl sm:text:2xl text-base flex justify-center gap-4  w-full items-center">
            <span className="opacity-60">{`63°49'44.002"N`}</span>
            <span className=" opacity-70">Umeå</span>
            <span className="opacity-60">{`20°15'25.268"E`}</span>
          </div>
          <div>Samarbeta</div>
        </div>
      </section>
      <hr className="bg-paragraph w-[60%]" />
      <section>
        <ContactForm />
      </section>
      <hr className="bg-paragraph w-[60%]" />
      <footer className="flex w-full items-center sm:justify-between sm:flex-row flex-col sm:gap-0 gap-4 sm:px-14 px-4 sm:mb-14 mb-4 font-montserrat ">
        <Link
          className="lg:text-4xl sm:text:2xl text-base"
          href="mailto: l63mediase@gmail.com"
        >
          l63mediase@gmail.com
        </Link>
        <div className="flex sm:gap-5 gap-1">
          <AnimatedLink
            className=""
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
      </footer>
    </main>
  );
}
