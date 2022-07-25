import React from 'react'
import './chi-sono.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const ChiSono = () => {
  return (
    <section id="chi-sono">
      <h3>Scopri di più su</h3>
      <h2>Chi sono</h2>

      <div className="container chi-sono__container">


        <div className="chi-sono__contenuto">
          <div className="chi-sono__cards">
            <article className="chi-sono__card">
              <FaAward className="chi-sono__icon" />
              <h4>Esperienza</h4>
              <small>1+ Anni</small>
            </article>

            <article className="chi-sono__card">
              <FiUsers className="chi-sono__icon" />
              <h4>Clienti</h4>
              <small>Agenzie e Piccoli Privati</small>
            </article>

            <article className="chi-sono__card">
              <VscFolderLibrary className="chi-sono__icon" />
              <h4>Progetti</h4>
              <small>20+ Progetti Completati</small>
            </article>
          </div>
        
        </div>

        <article className="chi-sono__text">
            <p>Ciao!
              Mi chiamo Carmine, ho 25 anni e lavoro e studio come sviluppatore web.</p>
              <p>Lavoro molto spesso dal lato front-end dei siti ma non mi dispiace conoscere e approfondire anche la parte back-end.
              Sono in grado di realizzare siti web come landing page, e-commerce, siti vetrina, ecc. in completa autonomia. Utilizzo web tools e CMS come Elementor, WooCommerce, Visual Composer.
              Altrimenti in codice con React, Bootstrap 5, SASS o Javascript.
              Con Javascript ho approfondito lo studio con TypeScript e la libreria jQuery.</p>
              <p>Attualmente sono concentrato nello sviluppo di Web App con l'uso di React per capire a pieno il potenziale di questo framework.</p>

            <a href="#contatti" className="btn btn-primary">Parliamo</a>
          </article>
          
      </div>
    </section>
  )
}

export default ChiSono