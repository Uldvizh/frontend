import { useState } from 'react';
import './GalleryBar.css';
import { useLanguage } from './../../context/LanguageContext';
import { cardsData, type CardData } from './../../data/cardsData'; 
import defPic from './../../assets/background.png';

const eventTypes = [
    { id: 'standup' }, 
    { id: 'festival' },
    { id: 'concert' }
];

const GalleryBar = () => {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const { Lang } = useLanguage(); 

    const handleTypeClick = (typeId: string) => {
        setSelectedTypes(prev => {
            if (prev.includes(typeId)) {
                return prev.filter(t => t !== typeId);
            } else {
                return [...prev, typeId];
            }
        });
    };
    const filteredCards = selectedTypes.length > 0
        ? cardsData.filter(card => card.type && selectedTypes.includes(card.type))
        : cardsData;

    return (
        <div className="gallery-cards-canvas">
            <div className="category-chips">
                {eventTypes.map((type) => {
                    const isActive = selectedTypes.includes(type.id);
                    return (
                        <button
                            key={type.id}
                            className={`category-chip ${isActive ? 'active' : ''}`}
                            onClick={() => handleTypeClick(type.id)}
                            type="button"
                        >
                            {isActive && <span className="chip-glow" />}
                            <span className="chip-text">
                                {Lang.events?.[type.id as keyof typeof Lang.events] || type.id}
                            </span>
                            <svg 
                                className="chip-arrow" 
                                width="16" 
                                height="16" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </button>
                    );
                })}
            </div>

            {filteredCards.length === 0 ? (
                <div className="no-events-message">
                    <p>Нет мероприятий в выбранных категориях</p>
                </div>
            ) : (
                filteredCards.map((card) => {
                    const typeCard = Lang.events?.[card.type as keyof typeof Lang.events];
                    const [imgError, setImgError] = useState(false);
                    return (
                        <div className="card" key={card.id}>
                         <img 
                className="card-image" 
                src={imgError ? defPic : card.img} 
                alt={card.name} 
                loading="lazy"
                onError={() => setImgError(true)}
            />
                            <div className="card-overlay" />
                    
                            <div className="card-badges-container">
                                {card.type && typeCard && (
                                    <div className="card-badge card-badge-type">
                                        {typeCard}
                                    </div>
                                )}
                                <div className={`card-badge ${card.minAge === 18 ? 'redlabel' : ''}`}>
                                    {card.minAge}+
                                </div>
                            </div>

                            <div className="card-content">
                                <h3 className="card-title">{card.name}</h3>
                                <div className="card-meta">
                                    <span className="card-meta-item">{card.date}</span>
                                    <span className="card-meta-item">{card.address}</span>
                                    <a href="" className="card-price-button">{card.price}₽</a>
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default GalleryBar;