import Image from 'next/image';

const attractions = [
  {
    id: 1,
    name: 'Ankobra River',
    description: 'Experience the serene beauty of the Ankobra River, perfect for nature walks and photography.',
    image: '/images/ankobra-river.jpg'
  },
  {
    id: 2,
    name: 'Bibiani Forest Reserve',
    description: 'Explore the rich biodiversity of the forest reserve, home to various wildlife species.',
    image: '/images/forest-reserve.jpg'
  },
  {
    id: 3,
    name: 'Cultural Heritage Center',
    description: 'Immerse yourself in the rich cultural heritage of Bibiani and its surrounding communities.',
    image: '/images/cultural-center.jpg'
  }
];

export default function TouristAttractions() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#006400]">Top Tourist Attractions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <div key={attraction.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#006400]">{attraction.name}</h3>
                <p className="text-gray-600 mb-4">{attraction.description}</p>
                <button className="bg-[#B8860B] text-white px-6 py-2 rounded-full hover:bg-[#9B6F0A] transition-colors">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 