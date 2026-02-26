import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
    id: {
        title: "Panduan Paspor",
        welcome: "Selamat Datang 👋",
        selectCategory: "Pilih kategori panduan paspor",
        footer: "© 2026 Kantor Imigrasi",
    },
    en: {
        title: "Passport Guide",
        welcome: "Welcome 👋",
        selectCategory: "Select a passport guide category",
        footer: "© 2026 Immigration Office",
    },
};

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("id");

    const toggleLang = () => {
        setLang((prev) => (prev === "id" ? "en" : "id"));
    };

    const t = translations[lang];

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
