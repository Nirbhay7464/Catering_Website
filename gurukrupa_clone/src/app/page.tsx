import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import LocationCoverage from "./components/LocationCoverage";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <LocationCoverage/>
      <Packages/>
      <Stats/>
      <Gallery/>
      <Testimonials />
      <Contact/>
      {/* <WhatsAppButton/> */}
    </main>
  );
}
