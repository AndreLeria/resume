import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptBr from "@/assets/i18n/pt-br.json";
import enUs from "@/assets/i18n/en-us.json";

const resources = {
    pt: {
        translation: ptBr,
    },
    en: {
        translation: enUs,
    },
};

i18n.use(initReactI18next).init({
    debug: true,
    resources,
    lng: "pt-br",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
