import image1 from 'assets/image/marcosalvatore.png'
import image2 from 'assets/image/lenusmedia.png'
import image3 from 'assets/image/marcoautuori.png'
import image4 from 'assets/image/betech.png'
import image5 from 'assets/image/gipimotor.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useTranslation } from 'react-i18next'

const Testimonial = () => {
   const { t } = useTranslation();

   const testimonials = [
      {
         id: '1',
         image: image1,
         title: 'Marco Salvatore - PrestaShop Tech Evangelist',
         review: t('I have had the opportunity to collaborate with Carmine several times and it is always a pleasure.')
      },
      {
         id: '2',
         image: image2,
         title: 'Lenus Media - ' + t('Web Agency'),
         review: t('Carmine collaborated with our agency for a short time but was still able to demonstrate his qualities.')
      },
      {
         id: '3',
         image: image3,
         title: 'Marco Autuori Design',
         review: t('It\'s always a pleasure to collaborate with someone like Carmine.')
      },
      {
         id: '4',
         image: image4,
         title: 'BeTech Telefonia',
         review: t('My website was missing a section about my business\'s services. I contacted Carmine, and the problem was solved. Great!')
      },
      {
         id: '5',
         image: image5,
         title: 'GiPi Motor',
         review: t('I\'m happy I asked Carmine for help with my website. He solved the problem within a day.')
      }
   ];

   return (
      <section id="testimonials" className="testimonials">
         <h3 className="text-center subtitle">{t("Reviews and")}</h3>
         <h2 className="text-center title mb-5">{t("Testimonials")}</h2>

         <div className="testimonials_container">
            <Swiper className="testimonials_container_slider"
               modules={[Pagination]}
               spaceBetween={1000}
               slidesPerView={1}
               pagination={{ clickable: true }}>
               {
                  testimonials.map(({ id, image, title, review }) => {
                     return (
                        <SwiperSlide key={id} className="testimonials_container_slider_slide">
                           <div className="testimonials_container_slider_slide_avatar">
                              <img src={image} alt={title} />
                           </div>
                           <h5 className="testimonials_container_slider_slide_name">{title}</h5>
                           <small className="testimonials_container_slider_slide_review">{review}</small>
                        </SwiperSlide>
                     )
                  })
               }
            </Swiper>
         </div>
      </section>
   )
}

export default Testimonial