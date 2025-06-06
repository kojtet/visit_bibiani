import Hero from "./components/Hero";
import QuickNav from "./components/QuickNav";
import EventsCarousel from "./components/EventsCarousel";
import WelcomeSection from "./components/WelcomeSection";
import TouristAttractions from "./components/TouristAttractions";
import HospitalityPreview from "./components/HospitalityPreview";
import NewsPreview from "./components/NewsPreview";
import GalleryPreview from "./components/GalleryPreview";
import ContactCTA from "./components/ContactCTA";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <QuickNav />
      <EventsCarousel />
      <WelcomeSection />
      <TouristAttractions />
      <HospitalityPreview />
      <NewsPreview />
      <GalleryPreview />
    </main>
  );
}
