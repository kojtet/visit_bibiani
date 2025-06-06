export default function TourismPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-vb-green mb-6">Tourism in Bibiani</h1>
      
      {/* Tourist Sites Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vb-gold mb-4">Tourist Sites</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for tourist site cards */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-vb-green mb-2">Site Name</h3>
            <p className="text-gray-600 mb-2">Brief description of the tourist site...</p>
            <span className="text-sm text-vb-gold">Location: Bibiani</span>
          </div>
        </div>
      </section>

      {/* Festivals Section */}
      <section>
        <h2 className="text-2xl font-semibold text-vb-gold mb-4">Festivals</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Placeholder for festival cards */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold text-vb-green mb-2">Festival Name</h3>
            <p className="text-gray-600">Description of the festival...</p>
          </div>
        </div>
      </section>
    </div>
  );
} 