import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/about/bibiani-hero.jpg"
          alt="Bibiani landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Bibiani</h1>
          <p className="text-xl md:text-2xl">Land of Culture, Mining, and Opportunity</p>
        </div>
      </section>

      {/* History Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#006400]">History of Bibiani</h2>
            <p className="text-gray-700">
              Bibiani's story begins in the early 20th century with the discovery of gold deposits. 
              What started as a small mining settlement has grown into a vibrant regional hub, 
              playing a crucial role in Ghana's economic development.
            </p>
            <p className="text-gray-700">
              The town's strategic location and rich natural resources have made it a center for 
              trade and industry in the Western North Region. Today, Bibiani stands as a testament 
              to Ghana's mining heritage while embracing modern development.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/about/history.jpg"
              alt="Historical Bibiani"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#006400] mb-12 text-center">Timeline of Development</h2>
          <div className="flex overflow-x-auto pb-8 gap-8 snap-x">
            {[
              {
                year: "1900s",
                title: "Gold Discovery",
                description: "Initial gold deposits discovered, establishing Bibiani as a mining town"
              },
              {
                year: "1950s",
                title: "Post-Independence Growth",
                description: "Expansion of mining operations and infrastructure development"
              },
              {
                year: "2000s",
                title: "Modern Development",
                description: "Diversification into agriculture and regional trade"
              },
              {
                year: "Today",
                title: "Regional Hub",
                description: "Thriving community with modern amenities and cultural heritage"
              }
            ].map((item, index) => (
              <div key={index} className="min-w-[280px] bg-white p-6 rounded-lg shadow-md snap-center">
                <span className="text-[#B8860B] font-bold">{item.year}</span>
                <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Identity Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#006400] mb-12 text-center">Cultural Identity</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Traditional Music",
              description: "Rich heritage of drumming and dance traditions",
              image: "/about/music.jpg"
            },
            {
              title: "Local Crafts",
              description: "Skilled artisans creating beautiful traditional crafts",
              image: "/about/crafts.jpg"
            },
            {
              title: "Local Cuisine",
              description: "Authentic Ghanaian dishes with unique local flavors",
              image: "/about/food.jpg"
            },
            {
              title: "Festivals",
              description: "Vibrant celebrations of culture and community",
              image: "/about/festivals.jpg"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#006400]">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Western North Region Section */}
      <section className="bg-[#B8860B] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">About Western North Region</h2>
              <p>
                The Western North Region is a vital economic zone in Ghana, known for its rich 
                agricultural resources and natural beauty. As a key producer of cocoa, timber, 
                and other cash crops, the region plays a crucial role in Ghana's economy.
              </p>
              <p>
                With its strategic location and abundant natural resources, the Western North 
                Region is emerging as a significant development zone, attracting investment 
                and fostering sustainable growth.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/about/region-map.jpg"
                alt="Western North Region Map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>


    </main>
  );
} 