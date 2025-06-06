export default function HospitalityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-vb-green mb-6">Hospitality in Bibiani</h1>

      {/* Hotels Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vb-gold mb-4">Hotels & Guesthouses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for hotel cards */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-vb-green mb-2">Hotel Name</h3>
            <p className="text-gray-600 mb-2">Description of amenities and services...</p>
            <div className="flex items-center gap-2 text-vb-gold">
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section>
        <h2 className="text-2xl font-semibold text-vb-gold mb-4">Restaurants & Eateries</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for restaurant cards */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-vb-green mb-2">Restaurant Name</h3>
            <p className="text-gray-600 mb-2">Specialties and cuisine type...</p>
            <span className="text-sm text-vb-gold">Location: Bibiani</span>
          </div>
        </div>
      </section>
    </div>
  );
} 