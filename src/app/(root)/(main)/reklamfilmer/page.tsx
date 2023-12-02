import ProjectSection from "@/components/ProjectSection";
import { allDocs } from "contentlayer/generated";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reklamfilmer | Adam Lindsköld",
};

export default function FilmPage() {
  return (
    <main className="flex flex-col gap-20">
      <header className="flex items-center flex-col gap-1 mt-24">
        <h1 className="text-center leading-tight text-longHeading font-playfair font-semibold uppercase">
          Reklamfilmer
        </h1>
        <span className=" max-w-2xl text-center text-paragraph lowercase">
          <span className="uppercase">U</span>rna sed magna mauris sem
          pellentesque penatibus praesent. Imperdiet consectetur fermentum eget
          enim commodo tempor. Dictumst tristique a sed est et sit. consectetur
          fermentum eget enim commodo tempor. Dictumst tristique a sed est et
          sit.
        </span>
      </header>
      <section className="flex flex-col items-center justify-center gap-16">
        <ProjectSection />
      </section>
    </main>
  );
}
