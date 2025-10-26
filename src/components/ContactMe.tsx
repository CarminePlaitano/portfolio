import { MdOutlineEmail } from 'react-icons/md'
import { RiInstagramLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import type { FormEvent } from "react";
import { useTranslation } from 'react-i18next';
import SmallCard from './ui/SmallCard';
import Button from './ui/Button';

const ContactMe = () => {
   const sendEmail = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.currentTarget.reset();
   };

   const { t } = useTranslation();

   return (
      <section id="contact-me" className="contact-me px-5">
         <div className="contact-me_header mb-5">
            <h3 className="text-center subtitle">{t("Let's start working")}</h3>
            <h2 className="text-center title">{t("Contact me")}</h2>
         </div>

         <div className="container contacts_container d-flex flex-column">
            <div className="contact-me_container_cards w-xl-50 d-flex flex-column md-flex-row flex-grow-1 gap-3 mx-auto">
               <SmallCard link="mailto:c.plaitano@gmail.com" title={t("Email")} subtitle={t("c.plaitano@gmail.com")} icon={MdOutlineEmail} />
               <SmallCard link="https://ig.me/m/carmineplaitano.it" title={t("Instagram")} subtitle={t("ig.me/m/carmineplaitano.it")} icon={RiInstagramLine}/>
               <SmallCard link="https://wa.me/393272061751" title={t("WhatsApp")} subtitle={t("+39 327 2061 751")} icon={BsWhatsapp} />
            </div>
            <div className="contact-me_form-container w-xl-50 mx-auto mt-4">
               <form onSubmit={sendEmail} className="contact-me_form-container_form">
                  <input type="text" name="name" placeholder={ t("Full Name") + "..." } required className="contact-me_form-container_form_input"/>
                  <input type="email" name="email" placeholder={ t("Email") + "..." } required className="contact-me_form-container_form_input"/>
                  <textarea name="message" placeholder={ t("Message") + "..." } required className="contact-me_form-container_form_textarea"></textarea>
                  <Button type="submit" className="btn btn-primary contact-me_form-container_form_button">{ t("Send Message") }</Button>
               </form>
            </div>
         </div>
      </section>
   )
}

export default ContactMe