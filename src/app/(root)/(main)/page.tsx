import Header from "@/components/Header";
import PhotoSlider from "@/components/photoCard/PhotoSlider";
import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";
import PhotoScrollSlider from "@/components/PhotoScrollSlider";
import ProjectSection from "@/components/ProjectSection";

export default async function HomePage() {
  return (
    <main className="flex flex-col gap-72">
      <Header />
      <section className="flex flex-col gap-6 items-center overflow-hidden relative">
        <h2 className=" font-playfair text-subHeading font-semibold text-center">
          OM MIG
        </h2>
        <PhotoScrollSlider />
        <p className="text-2xl opacity-90 text-center max-w-3xl font-medium lowercase text-paragraph ">
          <span className="uppercase">A</span>dam Lindsköld är en...Velit at dis
          turpis adipiscing blandit lacus. Phasellus risus urna metus nam orci
          in gravida.
        </p>
      </section>
      <section className="flex flex-col items-center  md:gap-10 gap-6 ">
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
