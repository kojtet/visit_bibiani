import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-16 bg-[#006400] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Planning a Visit or Partnership?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Get in touch with us to plan your visit, explore investment opportunities, or learn more about Bibiani's tourism potential.
        </p>
        <Link 
          href="/contact"
          className="inline-block bg-[#B8860B] text-white px-8 py-3 rounded-full hover:bg-[#9B6F0A] transition-colors text-lg font-semibold"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
} 