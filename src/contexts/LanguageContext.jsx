import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
    id: {
        title: "Panduan Paspor",
        welcome: "Selamat Datang",
        welcomeSub: "di Pusat Layanan Informasi Dokumen Perjalanan Republik Indonesia",
        officeName: "Kantor Imigrasi Kelas I TPI Ambon",
        selectCategory: "Pilih kategori panduan paspor",
        footer: "© 2026 Kantor Imigrasi",
    },
    en: {
        title: "Passport Guide",
        welcome: "Welcome",
        welcomeSub: "to the Travel Document Information Service Center of the Republic of Indonesia",
        officeName: "Immigration Office Class I TPI Ambon",
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
