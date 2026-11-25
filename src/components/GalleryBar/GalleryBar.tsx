import { useState, useEffect } from 'react';
import './GalleryBar.css';
import { useLanguage } from './../../context/LanguageContext';
import defPic from './../../assets/background.png';

interface BackendEvent {
  id: number;
  title: string;
  type: string;
  age: number;
  start_date: string;
  address: string;
  price: number;
  image_url: string;
}

interface DisplayCard {
  id: string;
  name: string;
  typeKey: string;
  typeName: string;
  minAge: number;
  date: string;
  address: string;
  price: number;
  img: string;
}

const eventTypes = [
  { id: 'standup', keyword: 'стендап' },
  { id: 'festival', keyword: 'фестиваль' },
  { id: 'concert', keyword: 'концерт' }
];

const Card = ({ card, Lang }: { card: DisplayCard, Lang: any }) => {
  const [imgError, setImgError] = useState(false);
  const typeCard = Lang.events?.[card.typeKey as keyof typeof Lang.events] || card.typeName;

  return (
    <div className="card">
      <img
        className="card-image"
        src={imgError ? defPic : card.img}
        alt={card.name}
        loading="lazy"
        onError={() => setImgError(true)}
      />
      <div className="card-overlay" />
      <div className="card-badges-container">
        {typeCard && (
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
          <span className="card-price-button">
            {card.price === 0 ? 'Бесплатно' : card.price === -1 ? 'Свободный взнос' : `${card.price}₽`}
          </span>
        </div>
      </div>
    </div>
  );
};

const GalleryBar = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const { Lang } = useLanguage();
  const [events, setEvents] = useState<DisplayCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://astonishing-pastelito-e6e568.netlify.app/api/events/approved')
      .then(res => {
        if (!res.ok) throw new Error(`Ошибка HTTP: ${res.status}`);
        return res.json();
      })
      .then((data: BackendEvent[]) => {
        const mappedCards: DisplayCard[] = data.map(event => {
          const dateObj = new Date(event.start_date);
          const formattedDate = dateObj.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            hour: '2-digit',
            minute: '2-digit'
          });

          const lowerType = event.type.toLowerCase();
          const matchedType = eventTypes.find(et => lowerType.includes(et.keyword))?.id || 'event';

          return {
            id: event.id.toString(),
            name: event.title,
            typeKey: matchedType,
            typeName: event.type,
            minAge: event.age || 0,
            date: formattedDate,
            address: event.address || 'Адрес уточняется',
            price: event.price || 0,
            img: event.image_url || defPic
          };
        });
        setEvents(mappedCards);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Ошибка загрузки мероприятий:", err);
        setError("Не удалось загрузить мероприятия. Попробуйте позже.");
        setIsLoading(false);
      });
  }, []);

  const handleTypeClick = (typeId: string) => {
    setSelectedTypes(prev =>
      prev.includes(typeId)
        ? prev.filter(t => t !== typeId)
        : [...prev, typeId]
    );
  };

  const filteredCards = selectedTypes.length > 0
    ? events.filter(card => selectedTypes.includes(card.typeKey))
    : events;

  if (isLoading) {
    return <div className="loading-state" style={{ padding: '40px', textAlign: 'center' }}>Загрузка мероприятий...</div>;
  }

  if (error) {
    return <div className="error-state" style={{ padding: '40px', textAlign: 'center', color: 'var(--error-color, red)' }}>{error}</div>;
  }

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
        filteredCards.map((card) => (
          <Card key={card.id} card={card} Lang={Lang} />
        ))
      )}
    </div>
  );
};

export default GalleryBar;