import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiMessage3Line} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav ('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#chi-sono" onClick={() => setActiveNav ('#chi-sono')} className={activeNav === '#chi-sono' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#esperienze" onClick={() => setActiveNav ('#esperienze')} className={activeNav === '#esperienze' ? 'active' : ''}><BiBookAlt /></a>
      <a href="#servizi" onClick={() => setActiveNav ('#servizi')} className={activeNav === '#servizi' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contatti" onClick={() => setActiveNav ('#contatti')} className={activeNav === '#contatti' ? 'active' : ''}><RiMessage3Line /></a>
    </nav>
  )
}

export default Nav