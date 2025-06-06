import Hero from "./components/Hero";
import QuickNav from "./components/QuickNav";
import EventsCarousel from "./components/EventsCarousel";
import WelcomeSection from "./components/WelcomeSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="bg-vb-cream">
        <QuickNav />
        <EventsCarousel />
        <WelcomeSection />
      </div>
    </div>
  );
}