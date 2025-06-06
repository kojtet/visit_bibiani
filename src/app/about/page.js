export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-vb-green mb-6">About Bibiani</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-vb-gold">History</h2>
          <p className="text-gray-700">
            Bibiani has a rich history dating back to the early 20th century when it was established as a mining town. 
            The discovery of gold in the area led to significant development and growth of the community.
          </p>
        </div>
        <div className="relative h-64 bg-gray-200 rounded-lg">
          {/* Placeholder for history image */}
        </div>
      </div>
    </div>
  );
} 