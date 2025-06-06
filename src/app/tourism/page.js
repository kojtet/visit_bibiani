"use client";
import { useState } from "react";

export default function TourismPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const attractions = [
    {
      id: 1,
      name: "Bibiani Forest Reserve",
      category: "nature",
      image: "https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg",
      description: "Explore pristine forest with diverse wildlife and hiking trails",
      location: "15km from Bibiani center",
      activities: ["Hiking", "Bird Watching", "Photography"]
    },
    {
      id: 2,
      name: "Traditional Palace",
      category: "cultural",
      image: "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg",
      description: "Historic palace showcasing traditional architecture and royal heritage",
      location: "Bibiani town center",
      activities: ["Cultural Tours", "History Learning", "Photography"]
    },
    {
      id: 3,
      name: "Cocoa Plantation Tours",
      category: "agricultural",
      image: "https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg",
      description: "Learn about cocoa farming from bean to chocolate",
      location: "Various locations around Bibiani",
      activities: ["Farm Tours", "Chocolate Making", "Educational Visits"]
    },
    {
      id: 4,
      name: "Ankasa River",
      category: "nature",
      image: "https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg",
      description: "Scenic river perfect for fishing and relaxation",
      location: "20km south of Bibiani",
      activities: ["Fishing", "Boat Rides", "Picnicking"]
    },
    {
      id: 5,
      name: "Gold Mine Heritage Site",
      category: "historical",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      description: "Historical mining site showcasing Bibiani's gold mining heritage",
      location: "Bibiani mining district",
      activities: ["Historical Tours", "Mining Education", "Photography"]
    },
    {
      id: 6,
      name: "Local Markets",
      category: "cultural",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      description: "Vibrant markets selling local crafts, food, and textiles",
      location: "Bibiani market square",
      activities: ["Shopping", "Cultural Experience", "Food Tasting"]
    }
  ];

  const festivals = [
    {
      name: "Bibiani Independence Festival",
      date: "March 2025",
      description: "Annual celebration of Bibiani's independence and cultural heritage",
      highlights: ["Traditional dances", "Cultural displays", "Local cuisine", "Music performances"]
    },
    {
      name: "Eluo Festival",
      date: "August 2025",
      description: "Traditional harvest festival celebrating the bounty of the land",
      highlights: ["Harvest ceremonies", "Traditional rituals", "Community feasts", "Cultural performances"]
    },
    {
      name: "Cocoa Festival",
      date: "November 2025",
      description: "Celebration of cocoa farming and chocolate production",
      highlights: ["Cocoa exhibitions", "Chocolate tasting", "Farmer awards", "Agricultural displays"]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Attractions', icon: '🌟' },
    { id: 'nature', label: 'Nature', icon: '🌳' },
    { id: 'cultural', label: 'Cultural', icon: '🎭' },
    { id: 'historical', label: 'Historical', icon: '🏛️' },
    { id: 'agricultural', label: 'Agricultural', icon: '🌾' }
  ];

  const filteredAttractions = activeFilter === 'all' 
    ? attractions 
    : attractions.filter(attraction => attraction.category === activeFilter);

  return (
    <div className="min-h-screen bg-vb-cream">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-vb-green to-vb-gold flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Tourism in Bibiani</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover breathtaking attractions, rich culture, and unforgettable experiences
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Tourist Sites Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-vb-green mb-4">Tourist Attractions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From pristine forests to cultural landmarks, Bibiani offers diverse attractions for every traveler
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-vb-green text-white shadow-lg scale-105'
                    : 'bg-white text-vb-green border border-vb-green hover:bg-vb-green hover:text-white'
                }`}
              >
                <span>{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>

          {/* Attractions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAttractions.map((attraction) => (
              <div key={attraction.id} className="card hover-lift fade-in">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-vb-gold text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                      {attraction.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-vb-green mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 mb-4">{attraction.description}</p>
                  <div className="flex items-center gap-2 text-sm text-vb-gold mb-4">
                    <span>📍</span>
                    <span>{attraction.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {attraction.activities.map((activity, index) => (
                      <span 
                        key={index}
                        className="bg-vb-cream text-vb-green px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Festivals Section */}
        <section id="festivals" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-vb-green mb-4">Festivals & Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the vibrant culture of Bibiani through our colorful festivals and traditional celebrations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {festivals.map((festival, index) => (
              <div key={index} className="card hover-lift">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-vb-gold rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                      🎉
                    </div>
                    <h3 className="text-xl font-bold text-vb-green mb-2">{festival.name}</h3>
                    <span className="text-vb-gold font-semibold">{festival.date}</span>
                  </div>
                  <p className="text-gray-600 mb-6 text-center">{festival.description}</p>
                  <div>
                    <h4 className="font-semibold text-vb-green mb-3">Festival Highlights:</h4>
                    <ul className="space-y-2">
                      {festival.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="text-vb-gold">✨</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tourism Investment CTA */}
        <section className="bg-gradient-to-r from-vb-green to-vb-gold rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Invest in Tourism</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in developing Bibiani's tourism potential. Explore opportunities in eco-tourism, 
            cultural tourism, and hospitality development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/business" className="bg-white text-vb-green px-8 py-3 rounded-full font-semibold hover:bg-vb-cream transition-colors">
              Investment Opportunities
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-vb-green transition-colors">
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}