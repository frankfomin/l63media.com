import Header from "@/components/Header";
import PhotoSlider from "@/components/photoCard/PhotoSlider";
import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";
import PhotoScrollSlider from "@/components/PhotoScrollSlider";
import ProjectSection from "@/components/ProjectSection";

export default async function HomePage() {
  return (
    <main className="flex flex-col gap-60">
      <Header />
      <section className="flex flex-col gap-6 items-center overflow-hidden relative">
        <h2 className=" font-playfair text-subHeading font-semibold text-center">
          OM MIG
        </h2>
        <PhotoScrollSlider />
        <p className="sm:text-2xl text-lg text-balance opacity-90 text-center sm:max-w-3xl max-w-[95%] font-medium text-paragraph ">
          Adam Lindsköld är en filmskapare och marknadsförare från Umeå. Så
          länge han kan minnas har han varit engagerad i digitalt skapande och
          har skapat en mängd olika projekt med främst fokus på reklamfilm och
          företagsimage.
        </p>
        <Link href="/om-mig">
          <Button>Läs mer</Button>
        </Link>
      </section>
      <section className="flex flex-col uppercase items-center gap-6 ">
        <h4 className="text-center text-subHeading font-playfair font-semibold">
          Filmer
        </h4>
        <ProjectSection />

        {/*  <Link className=" flex justify-center" href="/reklamfilmer">
            <Button>Alla Filmer</Button>
          </Link> */}
      </section>
      <section className=" text-center flex flex-col gap-6">
        <h5 className=" text-subHeading font-playfair font-semibold">FOTO</h5>
        <PhotoSlider />
        <Link className="flex justify-center" href="/foto">
          <Button>Alla Foton</Button>
        </Link>
      </section>
    </main>
  );
}
