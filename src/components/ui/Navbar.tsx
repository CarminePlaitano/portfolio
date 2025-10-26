import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookAlt } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { RiMessage3Line } from 'react-icons/ri'
import { useState } from 'react'

const Navbar = () => {
   const [activeNav, setActiveNav] = useState('#')
   return (
      <nav>
         <a href="#top" onClick={() => setActiveNav('#')}
            className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
         <a href="#about-me" onClick={() => setActiveNav('#about-me')}
            className={activeNav === '#about-me' ? 'active' : ''}><AiOutlineUser/></a>
         <a href="#portfolio" onClick={() => setActiveNav('#portfolio')}
            className={activeNav === '#portfolio' ? 'active disabled' : 'disabled'}><BiBookAlt/></a>
         <a href="#testimonials" onClick={() => setActiveNav('#testimonials')}
            className={activeNav === '#testimonials' ? 'active disabled' : ''}><RiServiceLine/></a>
         <a href="#contact-me" onClick={() => setActiveNav('#contact-me')}
            className={activeNav === '#contact-me' ? 'active' : ''}><RiMessage3Line/></a>
      </nav>
   )
}

export default Navbar