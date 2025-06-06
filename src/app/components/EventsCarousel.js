import Image from "next/image";

const events = [
  { title: "Bibiani Yam Festival", date: "Aug 2025", img: "/event1.jpg" },
  { title: "Cocoa Harvest Fair", date: "Nov 2025", img: "/event2.jpg" },
  { title: "Mining Expo", date: "Feb 2026", img: "/event3.jpg" },
];

export default function EventsCarousel() {
  return (
    <section className="max-w-6xl mx-auto w-full px-4" id="events">
      <h2 className="text-2xl font-bold mb-4 text-vb-green">Featured Events</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
        {events.map((event, i) => (
          <div key={i} className="min-w-[260px] bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0 border border-vb-gold">
            <div className="h-36 w-full relative">
              <Image src={event.img} alt={event.title} fill className="object-cover" />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <span className="text-vb-gold text-xs font-semibold">{event.date}</span>
              <span className="font-bold text-lg text-vb-green">{event.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 