import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';

const ChiSono = () => {
   const { t } = useTranslation();

   return (
      <section id="chi-sono">

         <div className="container chi-sono__container">

            <div className="chi-sono__contenuto">
               <div className="chi-sono__cards">
                  <div className="chi-sono__card">
                     <FaAward className="chi-sono__icon"/>
                     <h4>{ t('welcome') } Esperienza</h4>
                     <small>3+ Anni</small>
                  </div>

                  <div className="chi-sono__card">
                     <FiUsers className="chi-sono__icon"/>
                     <h4>Clienti</h4>
                     <small>Agenzie e Piccoli Privati</small>
                  </div>

                  <div className="chi-sono__card">
                     <VscFolderLibrary className="chi-sono__icon"/>
                     <h4>Progetti</h4>
                     <small>20+ Progetti Completati</small>
                  </div>
               </div>

            </div>

            <div className="chi-sono__text">
               <h2>Chi sono</h2>

               <p>Ciao! Mi chiamo Carmine, ho 29 anni e lavoro e studio come sviluppatore web.</p>
               <p>Lavoro sia lato front-end che back-end, realizzando siti web come landing page, e-commerce, siti
                  vetrina, ecc. in completa autonomia. Utilizzo web tools e CMS come Elementor, WooCommerce,
                  Visual Composer.
                  Altrimenti in codice con React, Bootstrap 5, SASS o Javascript.
                  Con Javascript ho approfondito lo studio con TypeScript e la libreria jQuery.</p>
               <p>Attualmente sono concentrato nello sviluppo di Web App con l'uso di React per capire a pieno il
                  potenziale di questo framework.</p>

               <a href="#contatti" className="btn btn-primary">Parliamo</a>
            </div>

         </div>
      </section>
   )
}

export default ChiSono;