import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      contact: "Contact Us",
      whatsapp: "WhatsApp",
    },
  },
  ta: {
    translation: {
      welcome: "வரவேற்பு",
      contact: "தொடர்பு கொள்ளுங்கள்",
      whatsapp: "வாட்ஸ்அப்",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en", 
  interpolation: { escapeValue: false },
});

export default i18n;
