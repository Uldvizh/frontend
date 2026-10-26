import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Language } from '../locales';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  Lang: typeof translations.ru;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('ru');
  const Lang = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, Lang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};