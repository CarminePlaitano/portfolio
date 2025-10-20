import Nav from "../components/Nav.tsx";
import AboutMe from "../components/AboutMe.tsx";
import Esperienze from "../components/Esperienze.tsx";
import Servizi from "../components/Servizi.tsx";
import Portfolio from "../components/Portfolio.tsx";
import Testimonial from "../components/Testimonial.tsx";
import Contatti from "../components/Contatti.tsx";
import Footer from "../components/Footer.tsx";
import Intro from "../components/Intro.tsx";

export default function Homepage() {
   return (
      <>
         <Nav/>
         <Intro/>
         <AboutMe/>
         <Esperienze/>
         <Servizi/>
         <Portfolio/>
         <Testimonial/>
         <Contatti/>
         <Footer/>
      </>
   );
}