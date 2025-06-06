"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/hero1.jpeg",
  "/hero2.jpeg",
  "/hero3.jpeg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Simple slider logic
  function next() { setIndex((i) => (i + 1) % images.length); }
  function prev() { setIndex((i) => (i - 1 + images.length) % images.length); }

  return (
    <section className="relative h-[70vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
      <Image
        src={images[index]}
        alt="Bibiani scenery"
        fill
        className="object-cover object-center transition-all duration-700"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg mb-4">
          Visit Bibiani <span className="text-vb-gold">– Gateway to Western North</span>
        </h1>
        <div className="flex gap-4 justify-center mt-4 flex-wrap">
          <a href="#explore" className="bg-vb-gold text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-vb-green transition">Explore Bibiani</a>
          <a href="#plan" className="bg-white text-vb-green px-6 py-3 rounded-full font-semibold shadow hover:bg-vb-gold transition">Plan Your Visit</a>
        </div>
      </div>
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-vb-cocoa/70 text-white p-2 rounded-full hover:bg-vb-gold transition md:block hidden">&#8592;</button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-vb-cocoa/70 text-white p-2 rounded-full hover:bg-vb-gold transition md:block hidden">&#8594;</button>
    </section>
  );
} 