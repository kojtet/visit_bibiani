import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <section className="py-16 bg-gray-50" id="welcome">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#006400]">Bibiani in Focus</h2>
            <p className="text-lg text-gray-700">
              Bibiani is the vibrant gateway to Ghana's Western North Region, known for its rich culture, 
              lush landscapes, and thriving cocoa and mining industries. With a history dating back centuries, 
              Bibiani has evolved into a modern hub while preserving its cultural heritage and natural beauty.
            </p>
            <p className="text-lg text-gray-700">
              The town serves as a crucial economic center, connecting the Western North Region to the rest of 
              Ghana. Its strategic location, combined with abundant natural resources and a welcoming community, 
              makes it an ideal destination for tourists, investors, and those seeking to experience authentic 
              Ghanaian culture.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/bibiani-town.jpg"
                alt="Bibiani Town"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="w-48 h-32 relative">
                <Image
                  src="/ghana-map.png"
                  alt="Bibiani Location in Ghana"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">Bibiani's Location in Ghana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 