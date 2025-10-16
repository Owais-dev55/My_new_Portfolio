import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
// import Navbar from "@/components/Navbar/Navbar";
// import Skills from "@/components/Skills/Skills";
// import Projects from "@/components/Projects/Projects";
import { ScrollToTop } from "@/components/Scroll-to-Top/Scroll-to-Top";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
   <div>
    {/* <Navbar /> */}
    <Hero />
    {/* <Projects /> */}
    {/* <Skills /> */}
    <Experience />
    <Contact />
    <Testimonial />
    <Footer />
    <ScrollToTop/>
   </div>
  );
}
