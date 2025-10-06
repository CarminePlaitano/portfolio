import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/cp_avatar.png'
import HeaderSocials from './Header-Socials'


const Header = () => {

  return (
    <header>
      <div className="container header__container">
        <div className="header__text">
        <h3 className="text-primary">Ciao sono</h3>
        <h1>Carmine Plaitano</h1>
        <h3>Front-End Developer</h3>
        <CTA />
        <HeaderSocials />
        </div>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}







export default Header

