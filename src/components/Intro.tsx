import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import cpAvatar from 'assets/image/cp_photo.png';
import cpCv from 'assets/CarminePlaitano-CV(EN).pdf';
import Button from './ui/Button';
import { useTranslation } from 'react-i18next';
import cpLogo from 'assets/image/cp_logo.png';

const Intro = () => {

   const { t } = useTranslation();

   return (
      <section id="top" className="intro">
         <div className="container intro_container w-75">
            <div className="intro_container_text">
               <h3>{ t("Hey! I'm") }</h3>
               <h1 className="title">Carmine Plaitano</h1>
               <h3>Full Stack Web Developer</h3>
               <div className="intro_container_cta">
                  <Button href={cpCv} className="btn" target="_blank">{ t("Read CV") }</Button>
                  <Button href="#contact-me" className="btn btn-primary">{ t("Lets Talk") }</Button>
               </div>
               <div className="intro_container_socials">
                  <a href="https://www.linkedin.com/in/carmine-plaitano-45b286218/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                  <a href="https://github.com/CarminePlaitano" target="_blank" rel="noreferrer"><BsGithub /></a>
                  <a href="https://www.instagram.com/carmineplaitano.it/" target="_blank" rel="noreferrer"><BsInstagram /></a>
               </div>
            </div>
            <img className="intro_container_photo" src={cpAvatar} alt="me" />
         </div>
         <img className="intro_logo" src={cpLogo} alt="logo_carmine-plaitano"/>
      </section>
   )
}

export default Intro;