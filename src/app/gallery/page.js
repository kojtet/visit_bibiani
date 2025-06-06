"use client";

import { useState } from "react";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "festivals", label: "Festivals" },
    { id: "sites", label: "Tourist Sites" },
    { id: "culture", label: "Culture" },
    { id: "business", label: "Business" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-vb-green mb-6">Photo Gallery</h1>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeFilter === filter.id
                ? "bg-vb-green text-white"
                : "bg-white text-vb-green border border-vb-green"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Gallery Items */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition"
          >
            {/* Placeholder for gallery images */}
          </div>
        ))}
      </div>

      {/* Video Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-vb-gold mb-6">Featured Videos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Video Placeholders */}
          <div className="aspect-video bg-gray-200 rounded-lg"></div>
          <div className="aspect-video bg-gray-200 rounded-lg"></div>
        </div>
      </section>
    </div>
  );
} 