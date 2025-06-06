export default function WelcomeSection() {
  return (
    <section className="max-w-4xl mx-auto w-full px-4 flex flex-col sm:flex-row items-center gap-8 py-12" id="welcome">
      <div className="flex-shrink-0 flex items-center justify-center w-32 h-32 bg-vb-green rounded-full text-white text-5xl">
        <span role="img" aria-label="map">🗺️</span>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-vb-green mb-2">Welcome to Bibiani</h2>
        <p className="text-lg text-vb-cocoa mb-2">Bibiani is the vibrant gateway to Ghana's Western North Region, known for its rich culture, lush landscapes, and thriving cocoa and mining industries.</p>
        <p className="text-base text-vb-green">Discover the beauty, heritage, and opportunities that make Bibiani a unique destination for visitors and investors alike.</p>
      </div>
    </section>
  );
} 