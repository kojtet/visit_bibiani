export default function HospitalityPage() {
  // Dummy data for hotels
  const hotels = [
    {
      id: 1,
      name: "Bibiani Royal Hotel",
      stars: 4,
      description: "Luxury stay with modern amenities near the town center",
      location: "Central Bibiani",
      priceRange: "$$$",
      image: "/placeholder-hotel.jpg",
      amenities: ["WiFi", "Pool", "Restaurant"]
    },
    {
      id: 2,
      name: "Forest View Guesthouse",
      stars: 3,
      description: "Cozy accommodation with scenic views of the forest reserve",
      location: "Forest Road",
      priceRange: "$$",
      image: "/placeholder-guesthouse.jpg",
      amenities: ["WiFi", "Garden", "Breakfast"]
    },
    {
      id: 3,
      name: "Miner's Lodge",
      stars: 3,
      description: "Historic hotel with mining heritage and modern comforts",
      location: "Mining District",
      priceRange: "$$",
      image: "/placeholder-lodge.jpg",
      amenities: ["WiFi", "Bar", "Conference Room"]
    }
  ];

  // Dummy data for restaurants
  const restaurants = [
    {
      id: 1,
      name: "Aseda Chop Bar",
      cuisine: "Local",
      specialty: "Fufu with Light Soup",
      description: "Authentic local cuisine in a traditional setting",
      image: "/placeholder-food.jpg",
      location: "Market Square"
    },
    {
      id: 2,
      name: "Golden Coast Restaurant",
      cuisine: "Continental",
      specialty: "Grilled Tilapia",
      description: "Fresh seafood and international dishes",
      image: "/placeholder-restaurant.jpg",
      location: "Beach Road"
    },
    {
      id: 3,
      name: "Spice Garden",
      cuisine: "Fusion",
      specialty: "Jollof Rice with Grilled Chicken",
      description: "Modern fusion of local and international flavors",
      image: "/placeholder-fusion.jpg",
      location: "Town Center"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder-hotel.jpg')" }}
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Where to Stay & Eat</h1>
          <p className="text-xl max-w-2xl">
            Comfortable Stays and Authentic Flavors Await in Bibiani
          </p>
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#006400] mb-8">Top Hotels & Guesthouses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gray-200" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-[#006400]">{hotel.name}</h3>
                  <span className="bg-[#B8860B] text-white px-2 py-1 rounded text-sm">
                    {hotel.priceRange}
                  </span>
                </div>
                <div className="flex text-[#B8860B] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < hotel.stars ? "text-[#B8860B]" : "text-gray-300"}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{hotel.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.map((amenity, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                      {amenity}
                    </span>
                  ))}
                </div>
                <button className="bg-[#006400] text-white px-4 py-2 rounded hover:bg-[#004d00] transition-colors w-full">
                  Contact Hotel
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="bg-[#006400]/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#006400] mb-8">Taste the Culture</h2>
          <div className="flex overflow-x-auto gap-6 pb-4">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-[#006400]">{restaurant.name}</h3>
                    <span className="bg-[#B8860B] text-white px-3 py-1 rounded-full text-sm">
                      {restaurant.cuisine}
                    </span>
                  </div>
                  <p className="text-[#B8860B] font-medium mb-2">{restaurant.specialty}</p>
                  <p className="text-gray-600 mb-4">{restaurant.description}</p>
                  <p className="text-sm text-gray-500">📍 {restaurant.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#006400] mb-8">Find Nearby Hospitality Options</h2>
        <div className="bg-gray-200 rounded-lg h-[400px] relative">
          {/* Placeholder for map */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500">Map will be integrated here</p>
          </div>
          {/* Placeholder for location markers */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-[#B8860B] rounded-full flex items-center justify-center text-white">
            H
          </div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-[#006400] rounded-full flex items-center justify-center text-white">
            R
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="bg-[#B8860B] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Booking a Stay?</h2>
          <p className="text-xl mb-8">Contact us for personalized assistance.</p>
          <button className="bg-white text-[#B8860B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Tourism Office
          </button>
        </div>
      </section>
    </div>
  );
} 