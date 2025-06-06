export default function BusinessPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-vb-green mb-6">Business & Industry</h1>

      {/* Major Sectors Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vb-gold mb-4">Major Sectors</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Mining */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-vb-green mb-3">Mining</h3>
            <p className="text-gray-600 mb-4">
              Bibiani is home to one of Ghana's largest gold mines, contributing significantly to the local economy.
            </p>
            <div className="h-40 bg-gray-200 rounded-lg"></div>
          </div>

          {/* Agriculture */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-vb-green mb-3">Agriculture</h3>
            <p className="text-gray-600 mb-4">
              Rich cocoa farming and other agricultural activities form the backbone of the local economy.
            </p>
            <div className="h-40 bg-gray-200 rounded-lg"></div>
          </div>

          {/* Timber */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-vb-green mb-3">Timber</h3>
            <p className="text-gray-600 mb-4">
              Sustainable timber processing and export contribute to the region's economic growth.
            </p>
            <div className="h-40 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section>
        <h2 className="text-2xl font-semibold text-vb-gold mb-4">Investment Opportunities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-vb-green mb-3">Real Estate</h3>
            <p className="text-gray-600">
              Growing demand for residential and commercial properties in Bibiani.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-vb-green mb-3">Agro-Processing</h3>
            <p className="text-gray-600">
              Opportunities in cocoa processing and value addition.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 