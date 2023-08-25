"use client";

import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import PhotoSlider from "@/components/PhotoSlider";
import { PhotoScrollSlider } from "@/components/PhotoScrollSlider";

import Header from "@/components/Header";
import Nav from "@/components/Nav";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Header />
      <main className="">
        <section className="flex flex-col gap-6 my-60 items-center overflow-hidden">
          <h2 className=" font-playfair text-8xl font-semibold text-center">
            OM MIG
          </h2>
          <PhotoScrollSlider />
          <p className="text-2xl opacity-90 text-center max-w-3xl font-medium ">
            Adam Lindsköld är en...Velit at dis turpis adipiscing blandit lacus.
            Phasellus risus urna metus nam orci in gravida.
          </p>
        </section>
        <section className=" my-60 flex flex-col items-center gap-16 ">
          <h4 className="text-center text-8xl font-playfair font-semibold">
            FILMER
          </h4>
          <div className="flex md:flex-col md:gap-10 gap-8 ">
            <ProjectCard url="t" variant="rainbow">cleandrink</ProjectCard>
          </div>
        </section>
        {/*  <section className=" text-center flex flex-col gap-16">
          <h5 className=" text-8xl font-playfair font-semibold">FOTO</h5>
          <PhotoSlider />

        </section> */}
      </main>
    </>
  );
}
