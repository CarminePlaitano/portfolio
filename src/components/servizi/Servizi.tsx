import './servizi.css'
import {BiCheck} from 'react-icons/bi'

const Servizi = () => {
    return (
        <section id="servizi">
            <h3>Qui sono mostrati i miei</h3>
            <h2>Servizi</h2>

            <div className="container servizi__container">
                <div className="servizi">
                    <div className="servizi__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="servizi__list">
                        <li>
                            <BiCheck className="servizi__list-icon"/>
                            <p>Design sito web di tipo vetrina per desktop e/o mobile.</p>
                        </li>
                        <li>
                            <BiCheck className="servizi__list-icon"/>
                            <p>Design sito web di tipo blog per desktop e/o mobile.</p>
                        </li>
                        <li>
                            <BiCheck className="servizi__list-icon"/>
                            <p>Utilizzo di Elementor per design più innovativi.</p>
                        </li>
                        <li>
                            <BiCheck className="servizi__list-icon"/>
                            <p>Applicazione di regole base del layout e del design.</p>
                        </li>
                        <li>
                            <BiCheck className="servizi__list-icon"/>
                            <p>Possibilità di rivedere e migliorare parti del design.</p>
                        </li>
                    </ul>
                </div>

                <div className="servizi">
                    <div className="servizi__head">
                        <h3>Sviluppo Siti Web</h3>
                    </div>

                    <ul className="servizi__list">
                        <li>
                            <BiCheck className="servizi__list-icon"/>
                            <p>Creazione di siti web in HTML.</p>
                        </li>
                        <li>
                            <BiCheck className="servizi__list-icon"/>
                            <p>Utilizzo di Library come React.</p>
                        </li>
                        <li>
                            <BiCheck className="servizi__list-icon"/>
                            <p>Creazione di siti web con WordPress.</p>
                        </li>
                        <li>
                            <BiCheck className="servizi__list-icon"/>
                            <p>Possibilità di creare siti web di medie dimensione.</p>
                        </li>
                        <li>
                            <BiCheck className="servizi__list-icon"/>
                            <p>Completa assistenza nell'avvio di un e-commerce.</p>
                        </li>
                        <li>
                            <BiCheck className="servizi__list-icon"/>
                            <p>Assistenza H24 in caso di qualsiasi problema.</p>
                        </li>
                    </ul>
                </div>

                <div className="servizi">
                    <div className="servizi__head">
                        <h3>Riparazione Siti Web</h3>
                    </div>

                    <ul className="servizi__list">
                        <li>
                            <BiCheck className="servizi__list-icon"/>
                            <p>Individuazione ed eliminazione di bug dal sito.</p>
                        </li>
                        <li>
                            <BiCheck className="servizi__list-icon"/>
                            <p>Possibilità di aggiornare parti del sito.</p>
                        </li>
                        <li>
                            <BiCheck className="servizi__list-icon"/>
                            <p>Aggiunta di plugin al tuo sito WordPress.</p>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Servizi