import Link from 'next/link';

const galleryImages = [
  { id: 1, src: '/gallery-1.jpeg', alt: 'Cultural event with people in traditional attire' },
  { id: 2, src: '/gallery-2.jpeg', alt: 'Local musicians performing' },
  { id: 3, src: '/gallery-3.jpeg', alt: 'Night festival with drummers' },
  { id: 4, src: '/gallery-4.jpeg', alt: 'Stage performance at Bibiani event' },
  { id: 5, src: '/gallery-5.jpeg', alt: 'Traditional dancers in colorful costumes' },
  { id: 6, src: '/gallery-6.jpeg', alt: 'Group photo at a cultural event' },
  { id: 7, src: '/gallery-7.jpeg', alt: 'Children in traditional dress' },
  { id: 8, src: '/gallery-8.jpeg', alt: 'Family under a tree in Bibiani' },
];

export default function GalleryPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#006400]">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative aspect-square overflow-hidden rounded-lg shadow w-full">
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/gallery"
            className="inline-block bg-[#006400] text-white px-8 py-3 rounded-full hover:bg-[#004D00] transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
} 