import progetto1 from 'assets/image/progetto1.png'
import progetto2 from 'assets/image/progetto2.png'
import progetto3 from 'assets/image/progetto3.png'
import progetto4 from 'assets/image/progetto4.png'
import progetto5 from 'assets/image/progetto5.png'
import progetto6 from 'assets/image/progetto6.png'

const data = [
   {
      id: 1,
      image: progetto1,
      title: 'Gi-Pi Motor',
      demo: 'https://gipimotorshop.com/'
   },
   {
      id: 2,
      image: progetto2,
      title: 'BeTech Telefonia',
      demo: 'https://betechtelefonia.it/'
   },
   {
      id: 3,
      image: progetto3,
      title: 'CarpeDiem Gourmet',
      demo: 'http://carpediemgourmet.com/'
   },
   {
      id: 4,
      image: progetto4,
      title: 'Carmine Plaitano 1.0',
      demo: 'http://carminep.altervista.org/'
   },
   {
      id: 5,
      image: progetto5,
      title: 'FSociety Bar',
      demo: 'https://fsociety29.altervista.org/'
   },
   {
      id: 6,
      image: progetto6,
      title: 'GoldenLead',
      demo: 'https://goldentrading.it/'
   },
]

const Portfolio = () => {
   return (
      <section id="portfolio">
         <h3>I miei Lavori più recenti</h3>
         <h2>Portfolio</h2>

         <div className="container portfolio__container">

            {
               data.map(({id, image, title, demo}) => {
                  return (
                     <div key={id} className="portfolio__item">
                        <div className="portfolio__item-image">
                           <img src={image} alt={title}/>
                        </div>

                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                           <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Vai al
                              Sito</a>
                        </div>
                     </div>
                  )
               })
            }

         </div>
      </section>
   )
}

export default Portfolio