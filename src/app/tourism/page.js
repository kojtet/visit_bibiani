export default function TourismPage() {
  // Dummy data for tourist sites
  const developedSites = [
    {
      id: 1,
      name: "Ankobra River",
      description: "A scenic river perfect for nature walks and bird watching",
      image: "/placeholder-river.jpg"
    },
    {
      id: 2,
      name: "Bibiani Forest Reserve",
      description: "Rich biodiversity and hiking trails through pristine forest",
      image: "/placeholder-forest.jpg"
    },
    {
      id: 3,
      name: "Cultural Heritage Center",
      description: "Showcasing local traditions and historical artifacts",
      image: "/placeholder-cultural.jpg"
    }
  ];

  // Dummy data for undeveloped sites
  const undevelopedSites = [
    {
      id: 1,
      name: "Old Mining Sites",
      description: "Historical mining locations with potential for heritage tourism",
      status: "Needs Development"
    },
    {
      id: 2,
      name: "Hidden Waterfalls",
      description: "Natural waterfalls waiting to be developed into tourist attractions",
      status: "Investment Opportunity"
    }
  ];

  // Dummy data for festivals
  const festivals = [
    {
      id: 1,
      name: "Bibiani Independence Festival",
      date: "August 15-20, 2024",
      description: "Annual celebration of local culture and heritage"
    },
    {
      id: 2,
      name: "Harvest Festival",
      date: "October 5-7, 2024",
      description: "Traditional celebration of agricultural abundance"
    }
  ];

  // Dummy data for recreational spots
  const recreationalSpots = [
    {
      id: 1,
      name: "Nature Trail Park",
      category: "Nature Trails",
      description: "Scenic walking paths through natural landscapes"
    },
    {
      id: 2,
      name: "Eco-Tourism Center",
      category: "Eco-tourism",
      description: "Educational center for environmental awareness"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder-forest.jpg')" }}
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Tourism & Recreation</h1>
          <p className="text-xl max-w-2xl">
            Discover the Beauty, Culture, and Untapped Potential of Bibiani
          </p>
        </div>
      </section>

      {/* Developed Tourist Sites */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#006400] mb-8">Top Tourist Attractions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developedSites.map((site) => (
            <div key={site.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gray-200" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#006400] mb-2">{site.name}</h3>
                <p className="text-gray-600 mb-4">{site.description}</p>
                <button className="bg-[#B8860B] text-white px-4 py-2 rounded hover:bg-[#8B6914] transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Undeveloped Attractions */}
      <section className="bg-[#006400]/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#006400] mb-8">Untapped Natural Gems</h2>
          <div className="flex overflow-x-auto gap-6 pb-4">
            {undevelopedSites.map((site) => (
              <div key={site.id} className="min-w-[300px] bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#006400] mb-2">{site.name}</h3>
                <p className="text-gray-600 mb-4">{site.description}</p>
                <span className="inline-block bg-[#B8860B] text-white px-3 py-1 rounded-full text-sm">
                  {site.status}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-[#006400] text-white px-6 py-3 rounded-lg hover:bg-[#004d00] transition-colors">
              Partner with Us to Develop These Sites
            </button>
          </div>
        </div>
      </section>

      {/* Cultural Festivals */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#006400] mb-8">Festivals & Culture</h2>
        <div className="flex overflow-x-auto gap-6 pb-4">
          {festivals.map((festival) => (
            <div key={festival.id} className="min-w-[300px] bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#006400] mb-2">{festival.name}</h3>
              <p className="text-[#B8860B] font-medium mb-2">{festival.date}</p>
              <p className="text-gray-600">{festival.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recreational Spots */}
      <section className="bg-[#006400]/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#006400] mb-8">Recreation & Leisure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recreationalSpots.map((spot) => (
              <div key={spot.id} className="bg-white rounded-lg shadow-lg p-6">
                <span className="inline-block bg-[#B8860B] text-white px-3 py-1 rounded-full text-sm mb-4">
                  {spot.category}
                </span>
                <h3 className="text-xl font-semibold text-[#006400] mb-2">{spot.name}</h3>
                <p className="text-gray-600">{spot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tourism Development CTA Banner */}
      <section className="bg-[#006400] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Looking to invest in eco-tourism or heritage preservation?
          </h2>
          <button className="bg-white text-[#006400] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact the Tourism Desk
          </button>
        </div>
      </section>
    </div>
  );
} 