export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-vb-green mb-6">Latest News</h1>

      {/* News Categories */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        <button className="px-4 py-2 bg-vb-green text-white rounded-full whitespace-nowrap">All News</button>
        <button className="px-4 py-2 bg-white text-vb-green border border-vb-green rounded-full whitespace-nowrap">Events</button>
        <button className="px-4 py-2 bg-white text-vb-green border border-vb-green rounded-full whitespace-nowrap">Development</button>
        <button className="px-4 py-2 bg-white text-vb-green border border-vb-green rounded-full whitespace-nowrap">Business</button>
      </div>

      {/* News Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* News Card */}
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <span className="text-sm text-vb-gold">March 15, 2024</span>
            <h2 className="text-xl font-semibold text-vb-green mt-2 mb-2">News Title</h2>
            <p className="text-gray-600 mb-4">
              Brief excerpt from the news article...
            </p>
            <a href="#" className="text-vb-green font-semibold hover:text-vb-gold">
              Read More →
            </a>
          </div>
        </article>

        {/* More News Cards */}
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <span className="text-sm text-vb-gold">March 14, 2024</span>
            <h2 className="text-xl font-semibold text-vb-green mt-2 mb-2">Another News Title</h2>
            <p className="text-gray-600 mb-4">
              Another news excerpt...
            </p>
            <a href="#" className="text-vb-green font-semibold hover:text-vb-gold">
              Read More →
            </a>
          </div>
        </article>
      </div>
    </div>
  );
} 