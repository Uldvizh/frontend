import { useState } from 'react';
import './GalleryBar.css';
import photo from './../../assets/photo_2026-10-22_08-14-24.jpg'

interface CardData {
    id: number;
    name: string;
    date: string;
    minAge: 0 | 6 | 12 | 16 | 18; 
    img: string;
    address: string;
    type?: string;
}

const eventTypes = [
    { id: 'standup', name: 'Стендапы' },
    { id: 'festival', name: 'Фестивали' },
    { id: 'concert', name: 'Концерты' }
];

const GalleryBar = () => {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

    const handleTypeClick = (typeId: string) => {
        setSelectedTypes(prev => {
            if (prev.includes(typeId)) {
                // Если уже выбрано - убираем
                return prev.filter(t => t !== typeId);
            } else {
                // Если не выбрано - добавляем
                return [...prev, typeId];
            }
        });
    };

    const cardsData: CardData[] = [
        {
            id: 1,
            name: "Концерт группы XYZ",
            date: "15 ноября 2026",
            minAge: 16,
            img: photo,
            address: "ул. Ленина, 10",
            type: "concert"
        },
        {
            id: 2,
            name: "Выставка современного искусства",
            date: "1 декабря 2026",
            minAge: 0,
            img: "https://images.unsplash.com/photo-1518998053901-5348d3969105?w=600&q=80",
            address: "пр. Мира, 25",
            type: "festival"
        },
        {
            id: 3,
            name: "Стендап шоу «Пятница»",
            date: "20 ноября 2026",
            minAge: 18,
            img: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=600&q=80",
            address: "ул. Пушкина, 5",
            type: "standup"
        },
        {
            id: 4,
            name: "Джазовый вечер",
            date: "25 ноября 2026",
            minAge: 12,
            img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&q=80",
            address: "ул. Гагарина, 12",
            type: "concert"
        },
        {
            id: 5,
            name: "Synthwave Party",
            date: "10 декабря 2026",
            minAge: 16,
            img: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&q=80",
            address: "ул. Электронная, 8",
            type: "festival"
        },
        {
            id: 6,
            name: "Комедийный вечер",
            date: "5 декабря 2026",
            minAge: 16,
            img: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=600&q=80",
            address: "ул. Театральная, 3",
            type: "standup"
        },
        {
            id: 7,
            name: "Рок фестиваль",
            date: "15 декабря 2026",
            minAge: 18,
            img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
            address: "Стадион Арена",
            type: "festival"
        },
        {
            id: 8,
            name: "Классический концерт",
            date: "20 декабря 2026",
            minAge: 0,
            img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&q=80",
            address: "Филармония",
            type: "concert"
        }
    ];

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
                            <span className="chip-text">{type.name}</span>
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
                filteredCards.map((card) => (
                    <div className="card" key={card.id}>
                        <img className="card-image" src={card.img} alt={card.name} loading="lazy" />
                        <div className="card-overlay" />
                        <div className="card-badge">{card.minAge}+</div>
                        <div className="card-content">
                            <h3 className="card-title">{card.name}</h3>
                            <div className="card-meta">
                                <span className="card-meta-item">📅 {card.date}</span>
                                <span className="card-meta-item"> {card.address}</span>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default GalleryBar;