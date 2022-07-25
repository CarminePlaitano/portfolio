import React from 'react'
import './footer.css'
import ME from '../../assets/me.png'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
<div className="footer__bio">
      <div className="footer__me">       
          <img src={ME} alt="footer_image"></img>
      </div>
      <a href="#" className="footer__name">Carmine <span className="text-light"><br />Plaitano</span></a>
      </div>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#chi-sono">Chi Sono</a></li>
        <li><a href="#esperienze">Esperienza</a></li>
        <li><a href="#servizi">Servizi</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonianze</a></li>
        <li><a href="#contatti">Contatti</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/carmine-plaitano-45b286218/">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/carmineplaitano.webp/">
          <FiInstagram />
        </a>
        <a href="https://www.facebook.com/carmineplaitano.webp/">
          <FaFacebookF />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Carmine Plaitano - 2022. Tutti i diritti sono riservati</small>
      </div>
    </footer>
  )
}

export default Footer