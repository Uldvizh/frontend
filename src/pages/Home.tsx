import { useState } from 'react';
import Header from "./../components/Header/Header";
import { useLanguage } from '../context/LanguageContext';
import GalleryBar from "../components/GalleryBar/GalleryBar";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import slide1 from './../assets/slide1.png';
import slide2 from './../assets/slide2.png';
import slide3 from './../assets/slide3.png';
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
      image: slide1,
    },
    {
      id: 2,
      image: slide2,
    },
    {
      id: 3,
      image: slide3,
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