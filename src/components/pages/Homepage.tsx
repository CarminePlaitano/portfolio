import Navbar from "components/ui/Navbar";
import AboutMe from "components/pages/sections/homepage/AboutMe";
import Testimonial from "components/pages/sections/homepage/Testimonial";
import ContactMe from "components/pages/sections/homepage/ContactMe";
import Footer from "src/components/ui/Footer";
import Intro from "components/pages/sections/homepage/Intro";

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