import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/progetto1.png'
import IMG2 from '../../assets/progetto2.png'
import IMG3 from '../../assets/progetto3.png'
import IMG4 from '../../assets/progetto4.png'
import IMG5 from '../../assets/progetto5.png'
import IMG6 from '../../assets/progetto6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Gi-Pi Motor',
    demo: 'https://gipimotorshop.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'BeTech Telefonia',
    demo: 'https://betechtelefonia.it/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'CarpeDiem Gourmet',
    demo: 'http://carpediemgourmet.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Carmine Plaitano 1.0',
    demo: 'http://carminep.altervista.org/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'FSociety Bar',
    demo: 'https://fsociety29.altervista.org/'
  },
  {
    id: 6,
    image: IMG6,
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
         data.map(({id, image, title, github, demo}) => {
           return (
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
  
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Vai al Sito</a>
              </div>
          </article>
           )
         })
       }
       
      </div>
    </section>
  )
}

export default Portfolio