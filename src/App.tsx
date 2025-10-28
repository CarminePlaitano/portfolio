import './assets/scss/app.scss';
import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './pages/Homepage.tsx';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations_en from '../public/locales/en/translation.json';
import translations_it from '../public/locales/it/translation.json';

function App() {
   initTranslations();

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Homepage />} />
         </Routes>
      </BrowserRouter>
   );

   function initTranslations() {
      i18n
         .use(initReactI18next)
         .init({
            resources: {
               en: {
                  translation: translations_en
               },
               it: {
                  translation: translations_it
               },
            },
            lng: 'it',
            fallbackLng: 'en',
            interpolation: {
               escapeValue: false
            }
         });
   }
}

export default App;
