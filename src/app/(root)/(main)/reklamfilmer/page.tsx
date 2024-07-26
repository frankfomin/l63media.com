import ProjectSection from "@/components/ProjectSection";
import { allDocs } from "contentlayer/generated";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reklamfilmer | Adam Lindsköld",
};

export default function FilmPage() {
  return (
    <main className="flex flex-col items-center">
      <div className="grid max-w-7xl gap-20">
        <header className="mt-24">
          <h1 className="font-playfair text-center text-longHeading font-semibold uppercase leading-tight">
            Reklamfilmer
          </h1>
          <p className="text-balance text-center flex flex-col text-xl font-semibold">
            Reklamfilmer från L63 Media fokuserar på att fånga tittarens
            intresse och även behålla det med hjälp av ett starkt visuellt
            intryck, samt hög produktionskvalitet.
          </p>
        </header>
        <section className="flex flex-col items-center justify-center gap-16">
          <ProjectSection />
        </section>
      </div>
    </main>
  );
}
