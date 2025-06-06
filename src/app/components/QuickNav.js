const tiles = [
  { 
    title: "Tourist Attractions", 
    href: "/tourism", 
    icon: "🌄", 
    color: "bg-vb-gold",
    description: "Discover natural wonders and cultural sites"
  },
  { 
    title: "Festivals & Culture", 
    href: "/tourism#festivals", 
    icon: "🎉", 
    color: "bg-vb-green",
    description: "Experience vibrant traditions and celebrations"
  },
  { 
    title: "Where to Stay", 
    href: "/hospitality", 
    icon: "🏨", 
    color: "bg-vb-cocoa",
    description: "Find comfortable accommodations"
  },
  { 
    title: "Invest in Bibiani", 
    href: "/business", 
    icon: "💼", 
    color: "bg-vb-light-green",
    description: "Explore business opportunities"
  },
];

export default function QuickNav() {
  return (
    <section className="max-w-6xl mx-auto w-full px-4 py-16" id="explore">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-vb-green mb-4">Explore Bibiani</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover everything Bibiani has to offer - from stunning natural attractions to exciting business opportunities
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiles.map((tile, index) => (
          <a
            key={tile.title}
            href={tile.href}
            className={`group relative overflow-hidden rounded-2xl shadow-lg text-white text-center font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl ${tile.color} h-48 flex flex-col items-center justify-center p-6`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform duration-300">
                {tile.icon}
              </span>
              <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-200 transition-colors">
                {tile.title}
              </h3>
              <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                {tile.description}
              </p>
            </div>
            
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        ))}
      </div>
    </section>
  );
}