"use client";
import Image from "next/image";
import { useState } from "react";

const events = [
  { 
    title: "Bibiani Independence Festival", 
    date: "March 2025", 
    img: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    description: "Celebrate Bibiani's rich heritage and independence",
    category: "Cultural"
  },
  { 
    title: "Eluo Festival", 
    date: "August 2025", 
    img: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
    description: "Traditional harvest celebration with cultural performances",
    category: "Traditional"
  },
  { 
    title: "Cocoa Harvest Fair", 
    date: "November 2025", 
    img: "https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg",
    description: "Showcase of local cocoa farming and processing",
    category: "Agricultural"
  },
  { 
    title: "Mining Expo", 
    date: "February 2026", 
    img: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
    description: "Business networking and mining industry showcase",
    category: "Business"
  },
];

export default function EventsCarousel() {
  const [activeEvent, setActiveEvent] = useState(0);

  return (
    <section className="max-w-7xl mx-auto w-full px-4 py-16" id="events">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-vb-green mb-4">Featured Events & Festivals</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience the vibrant culture and traditions of Bibiani through our exciting events and festivals
        </p>
      </div>
      
      {/* Main Featured Event */}
      <div className="mb-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-80">
              <Image 
                src={events[activeEvent].img} 
                alt={events[activeEvent].title} 
                fill 
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-vb-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {events[activeEvent].category}
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-vb-gold text-sm font-semibold mb-2">
                {events[activeEvent].date}
              </span>
              <h3 className="text-2xl font-bold text-vb-green mb-4">
                {events[activeEvent].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {events[activeEvent].description}
              </p>
              <button className="btn-primary w-fit">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Event Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
        {events.map((event, i) => (
          <button
            key={i}
            onClick={() => setActiveEvent(i)}
            className={`min-w-[280px] bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0 transition-all duration-300 hover:shadow-lg ${
              i === activeEvent ? 'ring-2 ring-vb-gold scale-105' : 'hover:scale-102'
            }`}
          >
            <div className="h-32 w-full relative">
              <Image src={event.img} alt={event.title} fill className="object-cover" />
            </div>
            <div className="p-4 text-left">
              <span className="text-vb-gold text-xs font-semibold">{event.date}</span>
              <h4 className="font-bold text-sm text-vb-green mt-1">{event.title}</h4>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}