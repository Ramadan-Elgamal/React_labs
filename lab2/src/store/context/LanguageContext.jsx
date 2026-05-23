import { createContext, useState, useContext } from 'react';

export const LanguageContext = createContext({
    language: 'en',
    setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    
    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

