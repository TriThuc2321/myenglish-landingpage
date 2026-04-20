import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import Marquee from "./_components/Marquee";
import Programs from "./_components/Programs";
import Activities from "./_components/Activities";
import Posters from "./_components/Posters";
import Honor from "./_components/Honor";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      <Nav />
      <Hero />
      <Marquee />
      <Programs />
      <Activities />
      <Posters />
      <Honor />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
