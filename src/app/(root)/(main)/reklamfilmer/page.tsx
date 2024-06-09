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
      <header className="mt-24 flex flex-col items-center">
        <h1 className="text-center font-playfair text-longHeading font-semibold uppercase leading-tight">
          Reklamfilmer
        </h1>
        <p className="text-balance flex max-w-4xl flex-col gap-6 text-center text-xl font-medium">
          Reklamfilmer från L63 Media fokuserar på att fånga tittarens intresse
          och även behålla det med hjälp av ett starkt visuellt intryck, samt
          hög produktionskvalitet.
        </p>
      </header>
      <section className="flex flex-col items-center justify-center gap-16">
        <ProjectSection />
      </section>
    </main>
  );
}
