import './GalleryBar.css'

interface CardData {
    id: number;
    name: string;
    date: string;
    minAge: 0 | 6 | 12 | 16 | 18; 
    img: string;
    address: string;
}

const GalleryBar = () => {
    const cardsData: CardData[] = [
        {
            id: 1,
            name: "Концерт группы XYZ",
            date: "15 ноября 2026",
            minAge: 16,
            img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
            address: "ул. Ленина, 10"
        },
        {
            id: 2,
            name: "Выставка современного искусства",
            date: "1 декабря 2026",
            minAge: 0,
            img: "https://images.unsplash.com/photo-1518998053901-5348d3969105?w=600&q=80",
            address: "пр. Мира, 25"
        },
        {
            id: 3,
            name: "Стендап шоу «Пятница»",
            date: "20 ноября 2026",
            minAge: 18,
            img: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=600&q=80",
            address: "ул. Пушкина, 5"
        },
        {
            id: 4,
            name: "Джазовый вечер",
            date: "25 ноября 2026",
            minAge: 12,
            img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&q=80",
            address: "ул. Гагарина, 12"
        },
        {
            id: 2,
            name: "Выставка современного искусства",
            date: "1 декабря 2026",
            minAge: 0,
            img: "https://images.unsplash.com/photo-1518998053901-5348d3969105?w=600&q=80",
            address: "пр. Мира, 25"
        },
        {
            id: 3,
            name: "Стендап шоу «Пятница»",
            date: "20 ноября 2026",
            minAge: 18,
            img: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=600&q=80",
            address: "ул. Пушкина, 5"
        },
        {
            id: 4,
            name: "Джазовый вечер",
            date: "25 ноября 2026",
            minAge: 12,
            img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&q=80",
            address: "ул. Гагарина, 12"
        },
        {
            id: 2,
            name: "Выставка современного искусства",
            date: "1 декабря 2026",
            minAge: 0,
            img: "https://images.unsplash.com/photo-1518998053901-5348d3969105?w=600&q=80",
            address: "пр. Мира, 25"
        },
        {
            id: 3,
            name: "Стендап шоу «Пятница»",
            date: "20 ноября 2026",
            minAge: 18,
            img: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=600&q=80",
            address: "ул. Пушкина, 5"
        },
        {
            id: 4,
            name: "Джазовый вечер",
            date: "25 ноября 2026",
            minAge: 12,
            img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&q=80",
            address: "ул. Гагарина, 12"
        }
    ];

    return (
        <div className="gallery-cards-canvas">
            {cardsData.map((card) => (
                <div className="card" key={card.id}>
                    <img className="card-image" src={card.img} alt={card.name} loading="lazy" />
                    <div className="card-overlay" />
                    <div className="card-badge">{card.minAge}+</div>
                    <div className="card-content">
                        <h3 className="card-title">{card.name}</h3>
                        <div className="card-meta">
                            <span className="card-meta-item">📅 {card.date}</span>
                            <span className="card-meta-item">📍 {card.address}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GalleryBar;