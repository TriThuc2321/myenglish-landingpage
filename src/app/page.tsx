import { Nav } from "./_components/Nav";
import { Hero } from "./_components/Hero";
import { About } from "./_components/About";
import { Programs } from "./_components/Programs";
import { Activities } from "./_components/Activities";
import { Honor } from "./_components/Honor";
import { Openings } from "./_components/Openings";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative flex-1">
        <Hero />

        <About />
        <Programs />
        <Activities />
        <Honor />
        <Openings />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
