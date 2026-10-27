import { useState } from 'react';
import Header from "./../components/Header/Header";
import { useLanguage } from '../context/LanguageContext';
import GalleryBar from "../components/GalleryBar/GalleryBar";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";

const eventTypes = [
  { id: 'standup', name: 'Стендапы' },
  { id: 'festival', name: 'Фестивали' },
  { id: 'concert', name: 'Концерты' }
];

const Home = () => {
  const { Lang } = useLanguage();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const heroSlides: SlideData[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
      title: Lang.home.slide1 || "Добро пожаловать"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80",
      title: Lang.home.slide2 || "Незабываемые эмоции"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80",
      title: Lang.home.slide3 || "Присоединяйтесь к нам"
    }
  ];

  const toggleType = (id: string) => {
    setSelectedTypes(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <filter id="liquid-morph" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="var(--morph-scale, 0)" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>
      </svg>

      <main className="main" id="main1">
        <Header />
        <div className="background-canvas">
          <HeroCarousel slides={heroSlides} />
        </div>
      </main>

      <main className="main" id="main2">
        <GalleryBar selectedTypes={selectedTypes} />
      </main>
    </div>
  );
};

export default Home;