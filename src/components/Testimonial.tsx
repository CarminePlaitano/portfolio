import image1 from 'assets/image/marcosalvatore.png'
import image2 from 'assets/image/lenusmedia.png'
import image3 from 'assets/image/marcoautuori.png'
import image4 from 'assets/image/betech.png'
import image5 from 'assets/image/golden.png'
import image6 from 'assets/image/gipimotor.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
   {
      id: '1',
      image: image1,
      title: 'Marco Salvatore - PrestaShop Tech Evangelist',
      review: 'Con Carmine ho avuto la possibilità di collaborare varie volte ed è sempre un piacere'
   },
   {
      id: '2',
      image: image2,
      title: 'Lenus Media - Agenzia Web',
      review: 'Carmine ha collaborato con la nostra agenzia per poco tempo ma ha saputo comunque dimostrare le sue qualità'
   },
   {
      id: '3',
      image: image3,
      title: 'Marco Autuori Design',
      review: 'È sempre un piacere collaborare con una persona come Carmine'
   },
   {
      id: '4',
      image: image4,
      title: 'BeTech Telefonia',
      review: 'Nel mio sito web mancava la sezione relativa ai servizi che offre la mia attività. Ho contattato Carmine ed il problema è stato risolto. Grande!'
   },
   {
      id: '5',
      image: image5,
      title: 'GoldenLead Trading',
      review: 'Ho creato il mio sito web basato sul trading grazie a Carmine e ne sono molto soddisfatto. Ha integrato la possibilità di iscriversi alle piattaforme di trading tramite il mio sito!'
   },
   {
      id: '6',
      image: image6,
      title: 'GiPi Motor',
      review: 'Sono felice di aver chiesto a Carmine una mano per il mio sito. Ha risolto il problema in giornata.'
   }
]

const Testimonial = () => {
   return (
      <section id="testimonial">
         <h3>Recensioni</h3>
         <h2>Testimonials</h2>

         <Swiper className="container testimonials__container"
                 modules={[Pagination]}
                 spaceBetween={1000}
                 slidesPerView={1}
                 pagination={{clickable: true}}>
            {
               testimonials.map(({id, image, title, review}) => {
                  return (
                     <SwiperSlide key={id} className="testimonial">
                        <div className="client__avatar">
                           <img src={image} alt={title}/>
                        </div>
                        <h5 className="client__name">{title}</h5>
                        <small className="client__review">{review}</small>
                     </SwiperSlide>
                  )
               })
            }
         </Swiper>
      </section>
   )
}

export default Testimonial