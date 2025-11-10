import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
   const { t } = useTranslation();

   let currentYear = new Date().getFullYear();

   return (
      <footer>
         <div className="footer_bio">

            <a href="#top" className="footer_name">Carmine <span className="text-light"><br/>Plaitano</span></a>
         </div>

         <ul className="permalinks">
            <li><a href="#top">Home</a></li>
            <li><a href="#about-me">{t("About me")}</a></li>
            <li><a href="#testimonials">{t("Testimonials")}</a></li>
            <li><a href="#contact-me">{t("Contact me")}</a></li>
         </ul>

         <div className="footer_socials">
            <a href="https://www.linkedin.com/in/carmine-plaitano-45b286218/" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
            <a href="https://github.com/CarminePlaitano" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href="https://www.instagram.com/carmineplaitano.it/" target="_blank" rel="noreferrer"><FiInstagram/></a>
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