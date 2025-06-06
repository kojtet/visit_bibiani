"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  {
    src: "/hero1.jpeg",
    title: "Lush Forests of Bibiani",
    subtitle: "Experience nature's beauty"
  },
  {
    src: "/hero2.jpeg", 
    title: "Cultural Heritage",
    subtitle: "Rich traditions and festivals"
  },
  {
    src: "/hero3.jpeg",
    title: "Modern Development",
    subtitle: "Growing opportunities"
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function next() { setIndex((i) => (i + 1) % images.length); }
  function prev() { setIndex((i) => (i - 1 + images.length) % images.length); }

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img.src}
            alt={img.title}
            fill
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay"></div>
      
      {/* Content */}
      <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white text-shadow mb-6">
          Visit Bibiani
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-vb-gold font-semibold text-shadow mb-4">
          Gateway to Western North
        </p>
        <p className="text-lg sm:text-xl text-white text-shadow mb-8 max-w-2xl mx-auto">
          {images[index].subtitle}
        </p>
        
        <div className="flex gap-4 justify-center mt-8 flex-wrap">
          <a href="#explore" className="btn-primary">
            Explore Bibiani
          </a>
          <a href="#plan" className="btn-secondary">
            Plan Your Visit
          </a>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={prev} 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-vb-green text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hidden md:block"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={next} 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-vb-green text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hidden md:block"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-vb-gold scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}