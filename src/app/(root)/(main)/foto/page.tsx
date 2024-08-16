import { productPhotos } from "@/constants/constants";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: `\u{1F4F7} Produktfoto | Adam Lindsköld`,
};
export default function PhotoPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-14">
      <header className="mt-24 flex flex-col items-center">
        <h1 className="font-playfair text-longHeading font-semibold uppercase leading-tight">
          Produktfoto
        </h1>
        <p className="text-balance flex flex-col text-center font-medium sm:text-2xl">
          Produktfoton från L63 Media fokuserar på att återspegla bakomliggande
          teman hos en produkt samt företaget på ett vis som fångar blickar, men
          även framhäver produkten.
        </p>
      </header>
      <section className="flex w-full max-w-[120rem] flex-col items-center gap-6 px-6">
        {productPhotos.map((photo) => (
          <div key={photo.src} className="">
            <Image
              className={`${photo.ratio} max-h-[85vh] max-w-7xl rounded-3xl object-cover`}
              width={1500}
              height={1500}
              src={photo.src}
              alt={photo.alt}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
