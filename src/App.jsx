import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import Logo from './components/logo/Logo.jsx'
import ChiSono from './components/chi-sono/ChiSono.jsx'
import Esperienze from './components/esperienze/Esperienze.jsx'
import Servizi from './components/servizi/Servizi.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Testimonial from './components/testimonial/Testimonial.jsx'
import Contatti from './components/contatti/Contatti.jsx'
import Footer from './components/footer/Footer.jsx'





const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <Logo />
        <ChiSono />
        <Esperienze />
        <Servizi />
        <Portfolio />
        <Testimonial />
        <Contatti />
        <Footer />
    </>
  )
}

export default App
