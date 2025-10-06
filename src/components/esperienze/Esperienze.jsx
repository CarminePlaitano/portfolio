import React from 'react'
import './esperienze.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Esperienze = () => {
  return (
    <section id="esperienze">
      <h3>Dai un occhio alle mie</h3>
      <h2>Skills</h2>

      <div className="container esperienze__container">
        <div className="esperienze__frontend">
          <div className="esperienze__head">
          <h3>Frontend Development</h3>
          </div>
          <div className="esperienze__content">
            <div className="esperienze__dettagli">
              <BsPatchCheckFill className="esperienze__dettagli-icon" />
              <div className="esperienze__dettagli-text">
                <h4>HTML5</h4>
                <small className="text-light">Esperto</small>
              </div>
            </div>
            <div className="esperienze__dettagli">
              <BsPatchCheckFill className="esperienze__dettagli-icon" />
              <div className="esperienze__dettagli-text">
                <h4>CSS3</h4>
                <small className="text-light">Esperto</small>
              </div>
            </div>
            <div className="esperienze__dettagli">
              <BsPatchCheckFill className="esperienze__dettagli-icon" />
              <div className="esperienze__dettagli-text">
                <h4>JavaScript</h4>
                <small className="text-light">Esperto</small>
              </div>
            </div>
            <div className="esperienze__dettagli">
              <BsPatchCheckFill className="esperienze__dettagli-icon" />
              <div className="esperienze__dettagli-text">
                <h4>Bootstrap 5</h4>
                <small className="text-light">Esperto</small>
              </div>
            </div>
            <div className="esperienze__dettagli">
              <BsPatchCheckFill className="esperienze__dettagli-icon" />
              <div className="esperienze__dettagli-text">
                <h4>SASS</h4>
                <small className="text-light">Esperto</small>
              </div>
            </div>
            <div className="esperienze__dettagli">
              <BsPatchCheckFill className="esperienze__dettagli-icon" />
              <div className="esperienze__dettagli-text">
                <h4>TypeScript</h4>
                <small className="text-light">Esperto</small>
              </div>
            </div>
            <div className="esperienze__dettagli">
              <BsPatchCheckFill className="esperienze__dettagli-icon" />
              <div className="esperienze__dettagli-text">
                <h4>jQuery</h4>
                <small className="text-light">Esperto</small>
              </div>
            </div>
            <div className="esperienze__dettagli">
              <BsPatchCheckFill className="esperienze__dettagli-icon" />
              <div className="esperienze__dettagli-text">
                <h4>React</h4>
                <small className="text-light">Esperto</small>
              </div>
            </div>
            <div className="esperienze__dettagli">
              <BsPatchCheckFill className="esperienze__dettagli-icon" />
              <div className="esperienze__dettagli-text">
                <h4>WordPress</h4>
                <small className="text-light">Esperto</small>
              </div>
            </div>
            <div className="esperienze__dettagli">
              <BsPatchCheckFill className="esperienze__dettagli-icon" />
              <div className="esperienze__dettagli-text">
                <h4>Elementor</h4>
                <small className="text-light">Esperto</small>
              </div>
            </div>
            <div className="esperienze__dettagli">
              <BsPatchCheckFill className="esperienze__dettagli-icon" />
              <div className="esperienze__dettagli-text">
                <h4>WooCommerce</h4>
                <small className="text-light">Esperto</small>
              </div>
            </div>
          </div>
        </div>
        <div className="esperienze__backend">
        <div className="esperienze__head">
          <h3>Backend Development</h3>
          </div>
          <div className="esperienze__content">
            <div className="esperienze__dettagli">
              <BsPatchCheckFill className="esperienze__dettagli-icon" />
              <div className="esperienze__dettagli-text">
                <h4>NodeJs</h4>
                <small className="text-light">Esperto</small>
              </div>
            </div>
            <div className="esperienze__dettagli">
              <BsPatchCheckFill className="esperienze__dettagli-icon" />
              <div className="esperienze__dettagli-text">
                <h4>PHP</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </div>
            <div className="esperienze__dettagli">
              <BsPatchCheckFill className="esperienze__dettagli-icon" />
              <div className="esperienze__dettagli-text">
                <h4>SQL</h4>
                <small className="text-light">Esperto</small>
              </div>
            </div>
            <div className="esperienze__dettagli">
              <BsPatchCheckFill className="esperienze__dettagli-icon" />
              <div className="esperienze__dettagli-text">
                <h4>MySQL</h4>
                <small className="text-light">Esperto</small>
              </div>
            </div>
            <div className="esperienze__dettagli">
              <BsPatchCheckFill className="esperienze__dettagli-icon" />
              <div className="esperienze__dettagli-text">
                <h4>NoSQL</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Esperienze