import CTA from './CTA'
import HeaderSocials from './Header-Socials'
import cpAvatar from 'assets/image/cp_avatar.png'

const Header = () => {

   return (
      <header id="top">
         <div className="container header__container">
            <div className="header__text">
               <h3 className="text-primary">Ciao sono</h3>
               <h1>Carmine Plaitano</h1>
               <h3>Front-End Developer</h3>
               <CTA/>
               <HeaderSocials/>
            </div>
            <div className="me">
               <img src={cpAvatar} alt="me"/>
            </div>
         </div>
      </header>
   )
}

export default Header