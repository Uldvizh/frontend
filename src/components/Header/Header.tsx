import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, Lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Плавное смещение слайдера
  const sliderTranslate = lang === 'en' ? '0' : 'calc(100% - 0.2cqh)';

  return (
    <header className={`header ${isScrolled ? 'header-collapsed' : 'header-expanded'}`}>
      <div className="header-container">
        <div className="header-left">
          <div className="logo-wrapper">
            <div className="logo">
              <span className="logo-text">{Lang.header.logo}</span>
            </div>
          </div>
        </div>

        <div className="header-right">
          <div className="language-toggle">
            {/* Жидкий слайдер, который ездит под текстом */}
            <div 
              className="lang-slider"
              style={{ transform: `translateX(${sliderTranslate})` }}
            />
            
            <button 
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              {Lang.header.langEng}
            </button>
            <button 
              className={`lang-btn ${lang === 'ru' ? 'active' : ''}`}
              onClick={() => setLang('ru')}
            >
              {Lang.header.langRu}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;