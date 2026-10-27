import { useState, useEffect, useCallback } from 'react';
import './HeroCarousel.css';

export interface SlideData {
    id: number;
    image: string;
    title: string;
}

interface HeroCarouselProps {
    slides: SlideData[];
}

const AUTO_PLAY_DELAY = 5000;
const TRANSITION_DURATION = 700;

const HeroCarousel = ({ slides }: HeroCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [direction, setDirection] = useState<'next' | 'prev'>('next');
    const [isAnimating, setIsAnimating] = useState(false);

    const handleSlideChange = useCallback((newIndex: number, dir: 'next' | 'prev') => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection(dir);
        setPrevIndex(currentIndex);
        setCurrentIndex(newIndex);
        setTimeout(() => setIsAnimating(false), TRANSITION_DURATION);
    }, [currentIndex, isAnimating]);

    const nextSlide = useCallback(() => {
        const newIndex = (currentIndex + 1) % slides.length;
        handleSlideChange(newIndex, 'next');
    }, [currentIndex, slides.length, handleSlideChange]);

    const prevSlide = useCallback(() => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        handleSlideChange(newIndex, 'prev');
    }, [currentIndex, slides.length, handleSlideChange]);

    useEffect(() => {
        const timer = setInterval(nextSlide, AUTO_PLAY_DELAY);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const getSlideClass = (index: number) => {
        if (index === currentIndex) return 'active';
        if (index === prevIndex && isAnimating) {
            return direction === 'next' ? 'exiting-left' : 'exiting-right';
        }
        return direction === 'next' ? 'hidden-right' : 'hidden-left';
    };

    if (slides.length === 0) return null;

    return (
        <div className="hero-carousel-container">
            <div className="hero-carousel-track">
                {slides.map((slide, index) => (
                    <div className={`hero-slide ${getSlideClass(index)}`} key={slide.id}>
                        <img 
                            className="slide-image" 
                            src={slide.image} 
                            alt={slide.title} 
                            loading={index === 0 ? "eager" : "lazy"} 
                        />
                        <div className="slide-overlay" />
                        
                        <div className="slide-content">
                            <h2 className="slide-title">{slide.title}</h2>
                        </div>

                        {index === currentIndex && (
                            <div className="slide-progress-bar" />
                        )}
                    </div>
                ))}
            </div>

            <button className="carousel-control prev" onClick={prevSlide} aria-label="Назад">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="carousel-control next" onClick={nextSlide} aria-label="Вперёд">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>

            <div className="carousel-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleSlideChange(index, index > currentIndex ? 'next' : 'prev')}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;