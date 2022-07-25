import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/carmine-plaitano-45b286218/" target="_blank"><BsLinkedin /></a>
        <a href="https://www.instagram.com/carmineplaitano.webp/" target="_blank"><BsInstagram /></a>
        <a href="https://www.facebook.com/carmineplaitano.webp/" target="_blank"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials