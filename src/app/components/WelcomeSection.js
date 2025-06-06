"use client";
import { useState } from "react";

export default function WelcomeSection() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🗺️' },
    { id: 'culture', label: 'Culture', icon: '🎭' },
    { id: 'economy', label: 'Economy', icon: '💰' },
  ];

  const content = {
    overview: {
      title: "Welcome to Bibiani",
      text: "Bibiani is the vibrant gateway to Ghana's Western North Region, known for its rich culture, lush landscapes, and thriving cocoa and mining industries. Discover the beauty, heritage, and opportunities that make Bibiani a unique destination for visitors and investors alike."
    },
    culture: {
      title: "Rich Cultural Heritage",
      text: "Experience the deep-rooted traditions of Bibiani through our colorful festivals, traditional music, and warm hospitality. Our community celebrates both ancient customs and modern progress, creating a unique cultural tapestry."
    },
    economy: {
      title: "Economic Opportunities",
      text: "Bibiani offers diverse economic opportunities from gold mining and cocoa farming to emerging sectors like tourism and agro-processing. The region's strategic location and natural resources make it an ideal destination for investment."
    }
  };

  return (
    <section className="max-w-6xl mx-auto w-full px-4 py-16" id="welcome">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Side */}
          <div className="relative h-64 lg:h-auto bg-gradient-to-br from-vb-green to-vb-gold p-8 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto">
                {tabs.find(tab => tab.id === activeTab)?.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">Bibiani</h3>
              <p className="text-white/90">Western North Region, Ghana</p>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full"></div>
          </div>
          
          {/* Content Side */}
          <div className="p-8">
            {/* Tab Navigation */}
            <div className="flex gap-2 mb-6 bg-gray-100 rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-vb-green text-white shadow-md'
                      : 'text-gray-600 hover:text-vb-green'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Content */}
            <div className="fade-in">
              <h2 className="text-2xl font-bold text-vb-green mb-4">
                {content[activeTab].title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {content[activeTab].text}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-vb-gold">50K+</div>
                  <div className="text-sm text-gray-500">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-vb-gold">100+</div>
                  <div className="text-sm text-gray-500">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-vb-gold">15+</div>
                  <div className="text-sm text-gray-500">Attractions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}