import Contact from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
   <div>
    {/* <Navbar /> */}
    <Hero />
    <Skills />
    <Contact />
    <Footer />
   </div>
  );
}
