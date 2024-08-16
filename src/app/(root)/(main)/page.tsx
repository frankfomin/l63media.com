import Header from "@/components/Header";
import PhotoSlider from "@/components/photoCard/PhotoSlider";
import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";
import PhotoScrollSlider from "@/components/PhotoScrollSlider";
import ProjectSection from "@/components/ProjectSection";
import Image from "next/image";
import { logos } from "@/constants/constants";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cars";
import MovingLogos from "@/components/ui/MovingLogos";

export default async function HomePage() {
  return (
    <main className="flex flex-col gap-60">
      <Header />
      <section className="flex flex-col items-center px-6">
        <div className="grid w-full max-w-[120rem] grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="uppercase">
              <h4 className="font-playfair text-3xl font-semibold leading-none sm:text-5xl">
                Vad Gör
              </h4>
              <h3 className="font-playfair text-subHeading font-semibold leading-none sm:text-left">
                L63 Media?
              </h3>
            </div>
            <Image
              src="/images/bicycle.webp"
              alt="Adam Lindsköld"
              width={1000}
              height={1000}
              className="aspect-square max-h-[75vh] w-full rounded-3xl object-cover lg:hidden"
            />
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="flex flex-col gap-6">
                <p className="lg:text-balance font-playfair text-xl font-semibold sm:text-3xl">
                  Driver du möjligtvis företag och vill sticka ut från mängden?
                  Vill du att din företagsimage och marknadsföring ska utstråla
                  professionalitet? Önskar du helt enkelt film eller foto för
                  just ditt ändamål?
                </p>
                <p className="lg:text-balance font-semibold sm:text-2xl">
                  L63 Media är ett foto- och filmproduktionsbolag som erbjuder
                  högkvalitativa produktioner med ett effektivt resultat och ett
                  smidigt samarbete.
                </p>
                <p className="lg:text-balance font-semibold sm:text-2xl">
                  Med många nöjda kunder och en inriktning på främst
                  reklamfilmer samt produktfoto, kan L63 Media garantera att
                  möta kundens ändamål. Tveka inte att höra av dig vid intresse,
                  frågor eller funderingar!
                </p>
              </div>
              <div className="grid gap-3 sm:gap-6">
                <h3 className="font-playfair text-2xl font-semibold uppercase sm:text-4xl">
                  Snabbt, Smidigt & Högkvalitativt
                </h3>
                <Link href="/kontakt">
                  <Button>Kontakt</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/bicycle.webp"
              alt="Adam Lindsköld"
              fill
              quality={100}
              className="hidden h-full w-full rounded-3xl object-cover lg:block"
            />
          </div>
        </div>
      </section>
      <MovingLogos />
      <section className="relative flex flex-col items-center gap-6 overflow-hidden">
        <h2 className="text-center font-playfair text-subHeading font-semibold">
          OM MIG
        </h2>
        <PhotoScrollSlider />
        <p className="lg:text-balance max-w-4xl px-6 text-center font-semibold sm:text-2xl">
          Adam Lindsköld är en filmskapare och marknadsförare från Umeå. Så
          länge han kan minnas har han varit engagerad i digitalt skapande och
          har skapat en mängd olika projekt med främst fokus på reklamfilm och
          företagsimage.
        </p>
        <Link href="/om-mig">
          <Button>Läs mer</Button>
        </Link>
      </section>

      <section className="flex w-full flex-col items-center gap-6 uppercase">
        <h4 className="text-center font-playfair text-subHeading font-semibold">
          Filmer
        </h4>
        <ProjectSection homePage />
        <Link className="flex justify-center" href="/reklamfilmer">
          <Button>Alla Filmer</Button>
        </Link>
      </section>
      <section className="flex flex-col gap-6">
        <h5 className="text-center font-playfair text-subHeading font-semibold">
          FOTO
        </h5>
        <PhotoSlider />
        <Link className="flex justify-center" href="/foto">
          <Button>Alla Foton</Button>
        </Link>
      </section>
    </main>
  );
}
