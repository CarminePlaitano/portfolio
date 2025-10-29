import Navbar from "../components/ui/Navbar.tsx";
import AboutMe from "../components/AboutMe.tsx";
import Testimonial from "../components/Testimonial.tsx";
import ContactMe from "../components/ContactMe.tsx";
import Footer from "../components/Footer.tsx";
import Intro from "../components/Intro.tsx";

export default function Homepage() {
   return (
      <>
         <Navbar/>
         <Intro/>
         <AboutMe/>
         <Testimonial/>
         <ContactMe/>
         <Footer/>
      </>
   );
}