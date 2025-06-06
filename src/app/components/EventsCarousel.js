import Image from "next/image";

const events = [
  { 
    title: "Bibiani Yam Festival", 
    date: "August 15-20, 2024", 
    location: "Bibiani Town Square",
    description: "Celebrate the rich agricultural heritage with traditional dances, food, and cultural displays.",
    img: "/event1.jpeg" 
  },
  { 
    title: "Cocoa Harvest Fair", 
    date: "November 5-10, 2024", 
    location: "Western North Region",
    description: "Experience the cocoa harvesting process and enjoy local delicacies made from cocoa.",
    img: "/event2.jpeg" 
  },
  { 
    title: "Mining Expo", 
    date: "February 12-15, 2025", 
    location: "Bibiani Convention Center",
    description: "Discover investment opportunities in the mining sector and network with industry leaders.",
    img: "/event3.jpeg" 
  },
  {
    title: "Cultural Heritage Week",
    date: "March 20-25, 2025",
    location: "Various Venues",
    description: "Immerse yourself in the rich cultural traditions of the Western North region.",
    img: "/event4.jpeg"
  }
];

export default function EventsCarousel() {
  return (
    <section className="py-16 bg-white" id="events">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#006400]">Featured Festivals & Events</h2>
        <div className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory">
          {events.map((event, i) => (
            <div 
              key={i} 
              className="min-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 border border-[#B8860B] snap-center"
            >
              <div className="h-48 w-full relative">
                <Image 
                  src={event.img} 
                  alt={event.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <span className="text-[#B8860B] text-sm font-semibold">{event.date}</span>
                <h3 className="font-bold text-xl text-[#006400]">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.location}</p>
                <p className="text-gray-600 text-sm">{event.description}</p>
                <button className="mt-2 text-[#006400] font-semibold hover:text-[#B8860B] transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 