import { MdOutlineEmail } from 'react-icons/md'
import { RiInstagramLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useTranslation } from 'react-i18next';
import SmallCard from './ui/SmallCard';

const ContactMe = () => {
   const { t } = useTranslation();

   return (
      <section id="contact-me" className="contact-me px-5">
         <div className="contact-me_header mb-5">
            <h3 className="text-center subtitle">{t("Let's start working")}</h3>
            <h2 className="text-center title">{t("Contact me")}</h2>
         </div>

         <div className="container contacts_container d-flex flex-column">
            <div className="contact-me_container_cards w-xl-50 d-flex flex-column flex-grow-1 gap-3 mx-auto">
               <SmallCard link="mailto:c.plaitano@gmail.com" target="_blank" title="Email" subtitle="c.plaitano@gmail.com" icon={MdOutlineEmail} />
               <SmallCard link="https://ig.me/m/carmineplaitano.it" target="_blank" title="Instagram" subtitle="ig.me/m/carmineplaitano.it" icon={RiInstagramLine}/>
               <SmallCard link="https://wa.me/393272061751" target="_blank" title="WhatsApp" subtitle="+39 327 2061 751" icon={BsWhatsapp} />
            </div>
         </div>
      </section>
   )
}

export default ContactMe