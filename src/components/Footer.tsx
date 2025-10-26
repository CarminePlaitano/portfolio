import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
   let currentYear = new Date().getFullYear();

   return (
      <footer>
         <div className="footer_bio">

            <a href="#top" className="footer_name">Carmine <span className="text-light"><br/>Plaitano</span></a>
         </div>

         <ul className="permalinks">
            <li><a href="#top">Home</a></li>
            <li><a href="#about-me">About me</a></li>
            {/* <li><a href="#esperienze">Esperienze</a></li> */}
            {/* <li><a href="#servizi">Servizi</a></li> */}
            {/* <li><a href="#portfolio">Portfolio</a></li> */}
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact-me">Contact me</a></li>
         </ul>

         <div className="footer_socials">
            <a href="https://www.linkedin.com/in/carmine-plaitano-45b286218/">
               <FaLinkedinIn/>
            </a>
            <a href="https://www.instagram.com/carmineplaitano.webp/">
               <FiInstagram/>
            </a>
            <a href="https://www.facebook.com/carmineplaitano.webp/">
               <FaFacebookF/>
            </a>
         </div>

         <div className="footer_copyright">
            <small>Carmine Plaitano &copy;  {currentYear} - All rights reserved.</small>
            <br/>
            <small>P.IVA: 06247250654</small>
         </div>
      </footer>
   )
}

export default Footer