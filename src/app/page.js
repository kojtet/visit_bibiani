import Hero from "./components/Hero";
import QuickNav from "./components/QuickNav";
import EventsCarousel from "./components/EventsCarousel";
import WelcomeSection from "./components/WelcomeSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <QuickNav />
      <EventsCarousel />
      <WelcomeSection />
    </div>
  );
}
