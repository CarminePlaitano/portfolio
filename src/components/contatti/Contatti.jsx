import React from 'react'
import './contatti.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contatti = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uo1ixl9', 'template_bqcmhxb', form.current, 'G8ytDv3dIyV2zhn_D')
     
    e.target.reset()
      };

    return (
      <section id="contatti">
        <h3>Iniziamo a Lavorare</h3>
        <h2>Contattami</h2>

        <div className="container contatti__container">
          <div className="contatti__options">
            <article className="contatti__option">
              <MdOutlineEmail className="contatti__option-icon" />
              <h4>Email</h4>
              <h5>c.plaitano@gmail.com</h5>
              <a href="mailto:c.plaitano@gmail.com" target="_blank">Mandami un messaggio</a>
            </article>
            <article className="contatti__option">
              <RiMessengerLine className="contatti__option-icon" />
              <h4>Messenger</h4>
              <h5>Carmine Plaitano</h5>
              <a href="https://m.me/carmine.plaitano.3" target="_blank">Mandami un messaggio</a>
            </article>
            <article className="contatti__option">
              <BsWhatsapp className="contatti__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+39 327 206 1751</h5>
              <a href="https://wa.me/<+393272061751>" target="_blank">Mandami un messaggio</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Il Tuo Nome Completo' required />
            <input type="email" name='email' placeholder='La Tua Email' required />
            <textarea name="message" rows="7" placeholder='Il Tuo Messaggio' required></textarea>
            <a>
            <button type='submit' className='btn btn-primary form__button'>Invia Messaggio</button>
            </a>
          </form>
        </div>
      </section>
    )
  }

  export default Contatti