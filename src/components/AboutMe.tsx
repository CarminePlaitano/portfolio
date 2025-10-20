import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';
import SmallCard from './ui/SmallCard';
import Button from './ui/Button';

const AboutMe = () => {
   const { t } = useTranslation();

   return (
      <section className="about-me" id="about-me">
         <div className="container about-me_container">
            <div className="about-me_container_cards">
               <SmallCard className="" icon={FaAward} title={t("Experience")} subtitle={t("3+ Years")} />
               <SmallCard className="" icon={FiUsers} title={t("Clients")} subtitle={t("Agencies and Start-ups")} />
               <SmallCard className="" icon={VscFolderLibrary} title={t("Projects")} subtitle={t("20+ Completed")} />
            </div>
            <div className="about-me_container_text">
               <h2>{t("About Me")}</h2>
               <p>{t("My name is Carmine Plaitano and I am a Full-Stack Web Developer with 3+ years of professional experience building maintainable web applications, pragmatic frontend interfaces and APIs using PHP (Symfony, Yii2), modern JavaScript and TypeScript (React, Angular), testing tools (Vitest, PHPUnit) and other useful technologies (Docker, Git, MySQL, PostgreSQL)")}.
                  <br /><br />
                  {t("I currently work at Localero, a startup platform where bands, venues (locals) and artists can register, create and present live events. The platform includes a competitive leaderboard that ranks bands and artists by score with the opportunity to perform on a major event sponsored by Localero.")}
                  <br /><br />
                  {t("I am passionate about coding and web development and I am always looking for new challenges and opportunities to grow professionally.")}
               </p>
               <Button href="#contatti" className="btn btn-primary">Let's Talk</Button>
            </div>
         </div>
      </section>
   )
}

export default AboutMe;