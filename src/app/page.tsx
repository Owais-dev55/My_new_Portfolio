import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <Skills />
    <Contact />
    <Experience />
    <Footer />
   </div>
  );
}
