const tiles = [
  { title: "Tourist Attractions", href: "/tourism", icon: "🌄", color: "bg-vb-gold" },
  { title: "Festivals", href: "/tourism", icon: "🎉", color: "bg-vb-green" },
  { title: "Where to Stay", href: "/hospitality", icon: "🏨", color: "bg-vb-cocoa" },
  { title: "Invest in Bibiani", href: "/business", icon: "💼", color: "bg-vb-gold" },
];

export default function QuickNav() {
  return (
    <section className="max-w-5xl mx-auto w-full px-4" id="explore">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {tiles.map((tile) => (
          <a
            key={tile.title}
            href={tile.href}
            className={`flex flex-col items-center justify-center h-32 rounded-xl shadow-md text-white text-center font-semibold text-lg gap-2 transition transform hover:scale-105 ${tile.color}`}
          >
            <span className="text-3xl">{tile.icon}</span>
            {tile.title}
          </a>
        ))}
      </div>
    </section>
  );
} 