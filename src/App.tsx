import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Logo from './components/logo/Logo'
import ChiSono from './components/chi-sono/ChiSono'
import Esperienze from './components/esperienze/Esperienze'
import Servizi from './components/servizi/Servizi'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contatti from './components/contatti/Contatti'
import Footer from './components/footer/Footer'
import './assets/scss/app.scss'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
   .use(initReactI18next)
   .init({
      resources: {
         en: {
            translation: {
               "Welcome to React": "Welcome to React"
            }
         },
         it: {
            translation: {
               "Welcome to React": "Benvenuto su React"
            }
         }
      },
      lng: "en",
      fallbackLng: "en",
      interpolation: {
         escapeValue: false
      }
   });

function App() {
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
   )
}

export default App
