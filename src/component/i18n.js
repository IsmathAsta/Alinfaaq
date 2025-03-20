import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "AboutUs": "About Us",
        "AboutUsTitle": "Allah Helps Those Who Help Themselves",
        "AboutUsContent": "Al-Infaaq Trust was established in 2016 with the aim of identifying economically backward families in society and providing them with the necessary support. What started with a single family has now grown to assist over 30 families.",
        "OurMission": "Our Mission",
        "Mission1": "Providing <b>essential assistance</b> to underprivileged families.",
        "Mission2": "Empowering women with <b>self-employment training</b> and <b>job opportunities</b>.",
        "Mission3": "Offering <b>IT education</b> and training programs to students.",
        "ReadMore": "Read More ▶",
        "Notices": "Notices",
        "TailoringCourse": "👗 Tailoring Course",
        "EmbroideryCourse": "🧵 Embroidery & Aari Work",
        "SoftwareCourse": "💻 Software Development Course",
        "OngoingRegistrations": "Ongoing Registrations",
        "TailoringDetails": "Learn professional tailoring skills with hands-on training.",
        "EmbroideryDetails": "Master embroidery and aari work techniques for traditional designs.",
        "SoftwareDetails": "Full-stack development training in React, Node.js, and databases.",
        "services_support": "Services and Support",
                "monthly_essentials": "Monthly Essential Items",
                "monthly_essentials_desc": "We provide grocery essentials to more than 30+ families every month.",
                "medical_education_fund": "Medical & Education Assistance",
                "medical_education_fund_desc": "We support families with emergency medical expenses, educational assistance, and scholarships for students.",
                "self_employment_support": "Self-Employment Support",
                "self_employment_support_desc": "We help families start their own businesses and assist with government welfare schemes.",
                "scholarship_assistance": "Scholarship Assistance",
                "scholarship_assistance_desc": "We conduct camps to help students apply for government and private scholarships.",
      },
    },
    ta: {
      translation: {
        "AboutUsTitle": "உதவியவர்களுக்கு அல்லாஹ் உதவுவான்",
        "AboutUsContent": "Al-Infaaq Trust என்பது 2016 ஆம் ஆண்டில் ஆரம்பிக்கப்பட்டது, சமூகத்தில் பொருளாதார ரீதியாக பின் தங்கியுள்ள குடும்பங்களை அடையாளம் காண்ந்து, அவர்களுக்கு தேவையான உதவிகளை வழங்கும் நோக்குடன் செயல்படுகிறது. ஒரே ஒரு குடும்பத்துடன் தொடங்கிய இந்த நற்செயல், இன்று 30+ குடும்பங்களுக்கு உதவியாக வளர்ந்துள்ளது.",
        "OurMission": "எங்கள் நோக்கம்",
        "Mission1": "ஆதரவற்ற குடும்பங்களுக்கு <b>அத்தியாவசிய உதவிகள்</b> வழங்குதல்.",
        "Mission2": "பெண்களுக்கு <b>சுயதொழில் பயிற்சி</b> மற்றும் <b>பணிபல வாய்ப்புகளை</b> உருவாக்குதல்.",
        "Mission3": "மாணவர்களுக்கு <b>தகவல் தொழில்நுட்ப (IT) கல்வி</b> பயிற்சிகளை வழங்குதல்.",
        "ReadMore": "மேலும் படிக்க ▶",
        "Notices": "அறிவிப்புகள்",
        "TailoringCourse": "👗 தையல் பயிற்சி",
        "EmbroideryCourse": "🧵 எம்பிராய்டரி & ஆரி வேலை",
        "SoftwareCourse": "💻 மென்பொருள் வளர்ப்பு பயிற்சி",
        "OngoingRegistrations": "நடப்பு பதிவுகள்",
        "TailoringDetails": "கைத்தொழில் பயிற்சியுடன் தொழில்முறை தையல் நுட்பங்களை கற்றுக்கொள்ளுங்கள்.",
        "EmbroideryDetails": "பாரம்பரிய வடிவமைப்புகளுக்கான எம்பிராய்டரி மற்றும் ஆரி வேலை நுட்பங்களை கற்றுக்கொள்ளுங்கள்.",
        "services_support": "சேவைகள் மற்றும் ஆதரவு",
                "monthly_essentials": "மாதாந்திர அத்தியாவசிய பொருட்கள்",
                "monthly_essentials_desc": "நாம் 30 க்கும் மேற்பட்ட குடும்பங்களுக்கு மாதந்தோறும் அவர்கள் குடும்பத்திற்கு தேவையான மளிகை பொருட்களை கொடுத்து வருகிறோம்.",
                "medical_education_fund": "மருத்துவம், கல்வி உதவித்தொகை",
                "medical_education_fund_desc": "நாம் பராமரிக்கும் குடும்பங்களுக்கு அவசர மருத்துவச் செலவுகள், கல்விக்கான ஆதரவு, மற்றும் மாணவர்களுக்கு உதவித்தொகை வழங்கி, அவர்களின் நல்லதிர்கால வளர்ச்சிக்கு துணையாக இருக்கிறோம்.",
                "self_employment_support": "சுய தொழில் உதவி",
                "self_employment_support_desc": "நாம் பராமரிக்கும் குடும்பங்களில் சுய தொழில் செய்ய விரும்புவோருக்கு சுய தொழிலும் ஏற்படுத்தி கொடுக்கின்றோம். பொது மக்களுக்கு உதவும் வகையில் அரசு நல திட்டங்கள் முகாம்கள் நடத்தி அவர்களுக்கு ஆன்லைன் ல் (online) விண்ணப்பித்து கொடுக்கின்றோம்.",
                "scholarship_assistance": "உதவித்தொகை (Scholarship)",
                "scholarship_assistance_desc": "மாணவ,மாணவிகளுக்கு அரசு மற்றும் தனியார் நிறுவங்கள் வழங்கும் உதவி தொகை (scholarship) கிடைக்கும் வகையில் முகாம்கள் நடத்தி அவர்களுக்கு விண்ணப்பித்து கொடுக்கின்றோம்.",
      },
    },
  },
  lng: "ta", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});



export default i18n;
