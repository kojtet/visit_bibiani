const tiles = [
  { 
    title: "Tourist Attractions", 
    href: "/tourism", 
    icon: "🌄", 
    description: "Discover Bibiani's natural wonders and cultural sites",
    color: "bg-[#006400]" 
  },
  { 
    title: "Festivals & Culture", 
    href: "/tourism", 
    icon: "🎉", 
    description: "Experience vibrant local traditions and celebrations",
    color: "bg-[#B8860B]" 
  },
  { 
    title: "Where to Stay", 
    href: "/hospitality", 
    icon: "🏨", 
    description: "Find the perfect accommodation for your visit",
    color: "bg-[#006400]" 
  },
  { 
    title: "Invest in Bibiani", 
    href: "/business", 
    icon: "💼", 
    description: "Explore business opportunities in Western North",
    color: "bg-[#B8860B]" 
  },
];

export default function QuickNav() {
  return (
    <section className="py-16 bg-gray-50" id="explore">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.map((tile) => (
            <a
              key={tile.title}
              href={tile.href}
              className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-lg text-white text-center transition-all duration-300 hover:scale-105 hover:shadow-xl ${tile.color}`}
            >
              <span className="text-4xl mb-4">{tile.icon}</span>
              <h3 className="text-xl font-bold mb-2">{tile.title}</h3>
              <p className="text-sm opacity-90">{tile.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 