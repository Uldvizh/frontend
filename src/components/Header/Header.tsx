import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-collapsed' : 'header-expanded'}`}>
      <div className="header-container">
        <div className="header-left">
          <div className="logo-wrapper">
            <div className="logo">
              <span className="logo-text">ULDVIZH</span>
            </div>
          </div>
        </div>

        <div className="header-right">
          <div className="language-toggle">
            <button className="lang-btn">ENG</button>
            <button className="lang-btn active">RU</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;