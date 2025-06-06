import Image from 'next/image';
import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    title: 'New Cultural Festival Announced',
    excerpt: 'Join us for the annual Bibiani Cultural Festival celebrating local traditions and heritage.',
    date: 'March 15, 2024',
    image: '/images/news-1.jpg'
  },
  {
    id: 2,
    title: 'Tourism Development Plan',
    excerpt: 'Major infrastructure improvements planned for Bibiani\'s tourist attractions.',
    date: 'March 10, 2024',
    image: '/images/news-2.jpg'
  },
  {
    id: 3,
    title: 'New Hotel Opening',
    excerpt: 'Luxury accommodation coming to Bibiani with the opening of Ankobra Resort.',
    date: 'March 5, 2024',
    image: '/images/news-3.jpg'
  }
];

export default function NewsPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#006400]">Latest News & Announcements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-[#B8860B] text-sm">{item.date}</span>
                <h3 className="text-xl font-semibold mb-2 text-[#006400]">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link 
                  href="/news"
                  className="inline-block bg-[#006400] text-white px-6 py-2 rounded-full hover:bg-[#004D00] transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 