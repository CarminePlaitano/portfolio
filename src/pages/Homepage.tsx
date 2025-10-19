import Header from "../components/header/Header.tsx";
import Nav from "../components/nav/Nav.tsx";
import Logo from "../components/logo/Logo.tsx";
import ChiSono from "../components/chi-sono/ChiSono.tsx";
import Esperienze from "../components/esperienze/Esperienze.tsx";
import Servizi from "../components/servizi/Servizi.tsx";
import Portfolio from "../components/portfolio/Portfolio.tsx";
import Testimonial from "../components/testimonial/Testimonial.tsx";
import Contatti from "../components/contatti/Contatti.tsx";
import Footer from "../components/footer/Footer.tsx";

export default function Homepage() {
   return (
      <>
         <Header/>
         <Nav/>
         <Logo/>
         <ChiSono/>
         <Esperienze/>
         <Servizi/>
         <Portfolio/>
         <Testimonial/>
         <Contatti/>
         <Footer/>
      </>
   );
}