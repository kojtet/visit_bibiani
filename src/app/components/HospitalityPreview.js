import Image from 'next/image';

const hospitalityData = [
  {
    id: 1,
    name: 'Bibiani Grand Hotel',
    type: 'Hotel',
    rating: 4.5,
    price: 'From $80/night',
    image: '/images/hotel-1.jpg',
    description: 'Luxury accommodation in the heart of Bibiani'
  },
  {
    id: 2,
    name: 'Forest View Restaurant',
    type: 'Restaurant',
    rating: 4.2,
    price: '$$',
    image: '/images/restaurant-1.jpg',
    description: 'Traditional and international cuisine'
  },
  {
    id: 3,
    name: 'Ankobra Resort',
    type: 'Hotel',
    rating: 4.8,
    price: 'From $120/night',
    image: '/images/hotel-2.jpg',
    description: 'Riverside luxury with stunning views'
  }
];

export default function HospitalityPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#006400]">Where to Stay & Dine</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {hospitalityData.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-[#006400]">{item.name}</h3>
                  <span className="bg-[#B8860B] text-white px-2 py-1 rounded text-sm">
                    {item.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-gray-600">{item.rating}</span>
                  </div>
                  <span className="text-[#B8860B] font-semibold">{item.price}</span>
                </div>
                <button className="w-full mt-4 bg-[#006400] text-white px-6 py-2 rounded-full hover:bg-[#004D00] transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Map Placeholder */}
        <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Google Map will be embedded here</p>
        </div>
      </div>
    </section>
  );
} 