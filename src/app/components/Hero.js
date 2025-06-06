"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/hero1.jpeg",
  "/hero2.jpeg",
  "/hero3.jpeg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  function next() { setIndex((i) => (i + 1) % images.length); }
  function prev() { setIndex((i) => (i - 1 + images.length) % images.length); }

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <Image
        src={images[index]}
        alt="Bibiani scenery"
        fill
        className="object-cover object-center transition-all duration-700"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg mb-4">
          Visit Bibiani <span className="text-[#B8860B]">– Gateway to Western North</span>
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          Explore culture, nature, investment and opportunity
        </p>
        <div className="flex gap-4 justify-center mt-4 flex-wrap">
          <a 
            href="#explore" 
            className="bg-[#B8860B] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#9B6F0A] transition-colors text-lg"
          >
            Explore Bibiani
          </a>
          <a 
            href="#plan" 
            className="bg-white text-[#006400] px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Plan Your Visit
          </a>
        </div>
      </div>
      <button 
        onClick={prev} 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-[#B8860B] transition-colors md:block hidden"
        aria-label="Previous image"
      >
        &#8592;
      </button>
      <button 
        onClick={next} 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-[#B8860B] transition-colors md:block hidden"
        aria-label="Next image"
      >
        &#8594;
      </button>
    </section>
  );
} 