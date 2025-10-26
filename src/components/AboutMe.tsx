import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';
import SmallCard from './ui/SmallCard';
import Button from './ui/Button';

const AboutMe = () => {
   const { t } = useTranslation();

   return (
      <section id="about-me" className="about-me px-5">
         <div className="about-me_header mb-5">
            <h3 className="text-center subtitle">{t("Something")}</h3>
            <h2 className="text-center title">{t("About Me")}</h2>
         </div>
         <div className="container about-me_container d-flex flex-column gap-5">
            <div className="about-me_container_cards w-xl-50 d-flex flex-column md-flex-row flex-grow-1 gap-3 mx-auto">
               <SmallCard title={t("Experience")} subtitle={t("3+ Years")} icon={FaAward} />
               <SmallCard title={t("Clients")} subtitle={t("Agencies and Start-ups")} icon={FiUsers} />
               <SmallCard title={t("Projects")} subtitle={t("20+ Completed")} icon={VscFolderLibrary} />
            </div>
            <div className="about-me_container_text w-xl-50 mx-auto">
               <p className="text-justify">{t("My name is Carmine Plaitano and I am a Full-Stack Web Developer with 3+ years of professional experience building maintainable web applications, pragmatic frontend interfaces and APIs using PHP (Symfony, Yii2), modern JavaScript and TypeScript (React, Angular), testing tools (Vitest, PHPUnit) and other useful technologies (Docker, Git, MySQL, PostgreSQL)")}.</p>
               <p className="text-justify">{t("I am passionate about coding and web development and I am always looking for new challenges and opportunities to grow professionally.")}</p>
               <Button href="#contacts" className="btn btn-primary mt-3 float-end">Let's Talk</Button>
            </div>
         </div>
      </section>
   )
}

export default AboutMe;