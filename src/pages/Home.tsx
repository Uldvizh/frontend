import Header from "./../components/Header/Header";
import { Carousel } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { Lang } = useLanguage();

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
          <Carousel 
            className="glass-carousel" 
            fade 
            interval={5000} 
            indicators={true} 
            controls={true}
          >
            <Carousel.Item>
              <div className="carousel-slide bg-primary">
                <h2>{Lang.home.slide1}</h2>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-slide bg-secondary">
                <h2>{Lang.home.slide2}</h2>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-slide bg-dark">
                <h2>{Lang.home.slide3}</h2>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </main>

      <main className="main" id="main2">
        <svg className="qwe" width="1771" height="844" viewBox="0 0 1771 844" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1771" height="844" rx="109" fill="white" fillOpacity="0.01"/>
        </svg>
      </main>
    </div>
  );
};

export default Home;