import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import Marquee from "./_components/Marquee";
import WhyUs from "./_components/WhyUs";
import VisionMission from "./_components/VisionMission";
import CorePrograms from "./_components/Programs";
import Curriculum from "./_components/Curriculum";
import Activities from "./_components/Activities";
import Achievements from "./_components/Honor";
import Teachers from "./_components/Teachers";
import Founder from "./_components/Founder";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      <Nav />
      <Hero />
      <Marquee />
      <WhyUs />
      <VisionMission />
      <CorePrograms />
      <Curriculum />
      <Activities />
      <Achievements />
      <Teachers />
      <Founder />
      <Contact />
      <Footer />
    </main>
  );
}
