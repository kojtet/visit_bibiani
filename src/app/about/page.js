"use client";
import { useState } from "react";

export default function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timelineEvents = [
    {
      year: "1900s",
      title: "Early Settlement",
      description: "Bibiani was established as a small farming community, with early settlers attracted by the fertile land."
    },
    {
      year: "1920s",
      title: "Gold Discovery",
      description: "The discovery of gold deposits led to the establishment of mining operations and rapid growth."
    },
    {
      year: "1950s",
      title: "Municipal Status",
      description: "Bibiani gained municipal status and became an important administrative center."
    },
    {
      year: "1990s",
      title: "Modern Development",
      description: "Infrastructure development and modernization programs transformed the town."
    },
    {
      year: "2020s",
      title: "Tourism Growth",
      description: "Focus on sustainable tourism and economic diversification for the future."
    }
  ];

  return (
    <div className="min-h-screen bg-vb-cream">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-vb-green to-vb-gold flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">About Bibiani</h1>
          <p className="text-xl">Discover our rich history and vibrant culture</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl font-bold text-vb-green mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Bibiani has a rich history dating back to the early 20th century when it was established as a mining town. 
                The discovery of gold in the area led to significant development and growth of the community, transforming 
                it from a small settlement into a thriving municipal center.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Today, Bibiani stands as the gateway to Ghana's Western North Region, known for its diverse economy, 
                rich cultural heritage, and warm hospitality. The town continues to grow while preserving its traditional 
                values and customs.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-vb-gold">50,000+</div>
                  <div className="text-sm text-gray-600">Population</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-vb-gold">120+</div>
                  <div className="text-sm text-gray-600">Years of History</div>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-vb-green/20 to-vb-gold/20 flex items-center justify-center">
                  <span className="text-6xl">🏛️</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-vb-green text-center mb-12">Historical Timeline</h2>
          <div className="max-w-4xl mx-auto">
            {/* Timeline Navigation */}
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <div className="flex gap-2 min-w-max">
                {timelineEvents.map((event, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTimeline(index)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeTimeline === index
                        ? 'bg-vb-green text-white shadow-lg'
                        : 'bg-white text-vb-green border border-vb-green hover:bg-vb-green hover:text-white'
                    }`}
                  >
                    {event.year}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline Content */}
            <div className="bg-white rounded-2xl shadow-xl p-8 fade-in">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-vb-green mb-2">
                  {timelineEvents[activeTimeline].year}
                </h3>
                <h4 className="text-xl font-semibold text-vb-gold mb-4">
                  {timelineEvents[activeTimeline].title}
                </h4>
                <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  {timelineEvents[activeTimeline].description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Traditions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-vb-green text-center mb-12">Culture & Traditions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card hover-lift">
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-xl font-semibold text-vb-green mb-3">Traditional Festivals</h3>
                <p className="text-gray-600">
                  Experience vibrant festivals like the Eluo Festival that celebrate our rich cultural heritage.
                </p>
              </div>
            </div>
            <div className="card hover-lift">
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-xl font-semibold text-vb-green mb-3">Music & Dance</h3>
                <p className="text-gray-600">
                  Traditional drumming and dance performances that tell the stories of our ancestors.
                </p>
              </div>
            </div>
            <div className="card hover-lift">
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">🏺</div>
                <h3 className="text-xl font-semibold text-vb-green mb-3">Arts & Crafts</h3>
                <p className="text-gray-600">
                  Local artisans create beautiful pottery, textiles, and wood carvings using traditional techniques.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Geography & Location */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-vb-green/20 to-vb-gold/20 flex items-center justify-center">
                  <span className="text-6xl">🗺️</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-vb-green mb-6">Strategic Location</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Bibiani is strategically located in Ghana's Western North Region, serving as a crucial link between 
                major cities and rural communities. The town's position makes it an ideal hub for trade, tourism, 
                and economic development.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-vb-gold text-xl">📍</span>
                  <span className="text-gray-700">Western North Region, Ghana</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-vb-gold text-xl">🌡️</span>
                  <span className="text-gray-700">Tropical climate with two distinct seasons</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-vb-gold text-xl">🌳</span>
                  <span className="text-gray-700">Rich forest reserves and natural resources</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}