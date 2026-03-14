import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all language files
import en from './i18n/en.json';
import fr from './i18n/fr.json';
import es from './i18n/es.json';
import de from './i18n/de.json';
import it from './i18n/it.json';
import pt from './i18n/pt.json';
import ru from './i18n/ru.json';
import zh from './i18n/zh.json';
import ja from './i18n/ja.json';
import ko from './i18n/ko.json';
import ar from './i18n/ar.json';
import hi from './i18n/hi.json';
import nl from './i18n/nl.json';
import sv from './i18n/sv.json';
import da from './i18n/da.json';
import no from './i18n/no.json';
import fi from './i18n/fi.json';
import tr from './i18n/tr.json';

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  es: { translation: es },
  de: { translation: de },
  it: { translation: it },
  pt: { translation: pt },
  ru: { translation: ru },
  zh: { translation: zh },
  ja: { translation: ja },
  ko: { translation: ko },
  ar: { translation: ar },
  hi: { translation: hi },
  nl: { translation: nl },
  sv: { translation: sv },
  da: { translation: da },
  no: { translation: no },
  fi: { translation: fi },
  tr: { translation: tr },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // Remove hardcoded lng to enable detection
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'es', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ko', 'ar', 'hi', 'nl', 'sv', 'da', 'no', 'fi', 'tr'],
    detection: {
      // Order of detection methods - always check navigator first on refresh
      order: ['navigator', 'htmlTag'],
      // Don't cache to always detect browser language on refresh
      caches: [],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;