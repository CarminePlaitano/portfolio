import { useEffect } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import italyFlag from 'assets/image/italy.png';
import ukFlag from 'assets/image/united-kingdom.png';

const LangSelector = () => {
    const { i18n } = useTranslation();
    const changeLanguageHandler = (lang: string) => {
        console.log("Changing language to: " + lang);
        i18n.changeLanguage(lang)
    };

    useEffect(() => {
        console.log("Current language: " + i18next.language);
        changeLanguageHandler(i18next.language);
    }, [i18n.language]);

    return (
        <div className="lang-selector mb-3">
            <button className={`btn btn-sm lang-selector_btn ${i18n.language === 'en' ? 'btn-lang-active' : ''}`} onClick={() => changeLanguageHandler('en')}><img src={ukFlag} />EN</button>
            <button className={`btn btn-sm lang-selector_btn ${i18n.language === 'it' ? 'btn-lang-active' : ''}`} onClick={() => changeLanguageHandler('it')}><img src={italyFlag} />IT</button>
        </div>
    )
};

export default LangSelector;