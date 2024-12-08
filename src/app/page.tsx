import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import WhyChooseUs from "./components/WhyChooseUs";
import MusicSchoolTestimonialCards from "./components/TestimonialCards";
import UpcomingWebinars from "./components/UpcomingWebinars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection />
    <FeaturedSection />
    <WhyChooseUs />
    <MusicSchoolTestimonialCards />
    <UpcomingWebinars />
    </main>
  );
}
