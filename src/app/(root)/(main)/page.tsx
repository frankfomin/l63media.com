import Header from "@/components/Header";
import PhotoSlider from "@/components/photoCard/PhotoSlider";
import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";
import PhotoScrollSlider from "@/components/PhotoScrollSlider";
import ProjectSection from "@/components/ProjectSection";
import Image from "next/image";
import { logos } from "@/constants/constants";

export default async function HomePage() {
  return (
    <main className="flex flex-col gap-60">
      <Header />
      <section className="flex flex-col items-center">
        <div className="flex w-full max-w-6xl flex-col gap-6">
          <div className="uppercase">
            <h4 className="font-playfair text-3xl font-semibold leading-none sm:text-5xl">
              Vad Gör
            </h4>
            <h3 className="text-center font-playfair text-subHeading font-semibold leading-none sm:text-left">
              L63 Media?
            </h3>
          </div>
          <div className="justify-between md:flex">
            <Image
              className="rounded-xl"
              src="/eros.jpg"
              width={500}
              height={500}
              alt=""
            />
            <div className="flex flex-col justify-between gap-6 md:px-10">
              <div className="text-balance flex flex-col gap-6 text-xl font-medium">
                <p>
                  Driver du möjligtvis företag och vill sticka ut från mängden?
                  Vill du att din företagsimage och marknadsföring ska utstråla
                  professionalitet? Önskar du helt enkelt film eller foto för
                  just ditt ändamål?
                </p>
                <p>
                  L63 Media är ett foto- och filmproduktionsbolag som erbjuder
                  högkvalitativa produktioner med ett effektivt resultat och ett
                  smidigt samarbete.
                </p>
                <p>
                  Med många nöjda kunder och en inriktning på främst
                  reklamfilmer samt produktfoto, kan L63 Media garantera att
                  möta kundens ändamål.
                </p>
              </div>
              <div className="grid gap-6">
                <h5 className="font-playfair text-4xl font-semibold uppercase">
                  Snabbt, Smidigt & Högkvalitativt
                </h5>
                <Link href="/kontakt">
                  <Button>Kontakt</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-6">
        <div className="flex gap-20">
          {logos.map((logo) => (
            <Image
              className="object-contain"
              key={logo.src}
              src={logo.src}
              width={logo.width || 200}
              height={logo.height || 200}
              alt={logo.alt}
            />
          ))}
        </div>
      </section>
      <section className="relative flex flex-col items-center gap-6 overflow-hidden">
        <h2 className="text-center font-playfair text-subHeading font-semibold">
          OM MIG
        </h2>
        <PhotoScrollSlider />
        <p className="text-balance text-center text-lg font-medium sm:max-w-3xl sm:text-2xl">
          Adam Lindsköld är en filmskapare och marknadsförare från Umeå. Så
          länge han kan minnas har han varit engagerad i digitalt skapande och
          har skapat en mängd olika projekt med främst fokus på reklamfilm och
          företagsimage.
        </p>
        <Link href="/om-mig">
          <Button>Läs mer</Button>
        </Link>
      </section>

      <section className="flex flex-col items-center gap-6 uppercase">
        <h4 className="text-center font-playfair text-subHeading font-semibold">
          Filmer
        </h4>
        <ProjectSection />
        {/*  <Link className=" flex justify-center" href="/reklamfilmer">
            <Button>Alla Filmer</Button>
          </Link> */}
      </section>
      <section className="flex flex-col gap-6 text-center">
        <h5 className="font-playfair text-subHeading font-semibold">FOTO</h5>
        <PhotoSlider />
        <Link className="flex justify-center" href="/foto">
          <Button>Alla Foton</Button>
        </Link>
      </section>
    </main>
  );
}
