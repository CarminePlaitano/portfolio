import './contatti.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import type {FormEvent} from "react";

const Contatti = () => {
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.reset();
    };

    return (
        <section id="contatti">
            <h3>Iniziamo a Lavorare</h3>
            <h2>Contattami</h2>

            <div className="container contatti__container">
                <div className="contatti__options">
                    <div className="contatti__option">
                        <MdOutlineEmail className="contatti__option-icon"/>
                        <h4>Email</h4>
                        <h5>c.plaitano@gmail.com</h5>
                        <a href="mailto:c.plaitano@gmail.com" target="_blank" rel="noreferrer">Mandami un messaggio</a>
                    </div>
                    <div className="contatti__option">
                        <RiMessengerLine className="contatti__option-icon"/>
                        <h4>Messenger</h4>
                        <h5>Carmine Plaitano</h5>
                        <a href="https://m.me/carmine.plaitano.3" target="_blank" rel="noreferrer">Mandami un
                            messaggio</a>
                    </div>
                    <div className="contatti__option">
                        <BsWhatsapp className="contatti__option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+39 327 206 1751</h5>
                        <a href="https://wa.me/<+393272061751>" target="_blank" rel="noreferrer">Mandami un
                            messaggio</a>
                    </div>
                </div>
                <form onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Il Tuo Nome Completo' required/>
                    <input type="email" name='email' placeholder='La Tua Email' required/>
                    <textarea name="message" placeholder='Il Tuo Messaggio' required></textarea>
                    <button type='submit' className='btn btn-primary form__button'>Invia Messaggio</button>
                </form>
            </div>
        </section>
    )
}

export default Contatti