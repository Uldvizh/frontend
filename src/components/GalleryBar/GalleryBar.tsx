import './GalleryBar.css'

interface CardData {
    name: string;
    date: string;
    minAge: 0 | 6 | 12 | 16 | 18; 
    img: string;
    address: string;
}

const GalleryBar = () => {
    const cardsData: CardData[] = [
        {
            name: "Концерт группы XYZ",
            date: "2026-11-15",
            minAge: 16,
            img: "",
            address: "ул. Ленина, 10"
        },
        {
            name: "Концерт группы XYZ",
            date: "2026-11-15",
            minAge: 16,
            img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
            address: "ул. Ленина, 10"
        },
        {
            name: "Концерт группы XYZ",
            date: "2026-11-15",
            minAge: 16,
            img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
            address: "ул. Ленина, 10"
        },
        {
            name: "Концерт группы XYZ",
            date: "2026-11-15",
            minAge: 16,
            img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
            address: "ул. Ленина, 10"
        },
        {
            name: "Концерт группы XYZ",
            date: "2026-11-15",
            minAge: 16,
            img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
            address: "ул. Ленина, 10"
        },
        {
            name: "Концерт группы XYZ",
            date: "2026-11-15",
            minAge: 16,
            img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
            address: "ул. Ленина, 10"
        },
        {
            name: "Концерт группы XYZ",
            date: "2026-11-15",
            minAge: 16,
            img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
            address: "ул. Ленина, 10"
        },
        {
            name: "Концерт группы XYZ",
            date: "2026-11-15",
            minAge: 16,
            img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
            address: "ул. Ленина, 10"
        },

        
        {
            name: "Стендап шоу",
            date: "2026-11-20",
            minAge: 18,
            img: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=600&q=80",
            address: "ул. Пушкина, 5"
        }
    ];

    return (
        <div className="gallery-cards-canvas">
            {cardsData.map((card, index) => (
                <div className="card" key={index}>
                    <img className="card-image" src={card.img} alt={card.name} />
                    <div className="card-overlay" />
                    <div className="card-badge">{card.minAge}+</div>
                    <div className="card-content">
                        <h3 className="card-title">{card.name}</h3>
                        <div className="card-meta">
                            <span className="card-meta-item"> {card.date}</span>
                            <span className="card-meta-item">📍 {card.address}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GalleryBar;