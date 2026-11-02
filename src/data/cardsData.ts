import photo from "../assets/photo_2026-10-22_08-14-24.jpg";

export interface CardData {
    id: number;
    name: string;
    date: string;
    minAge: 0 | 6 | 12 | 16 | 18; 
    img: string;
    address: string;
    type?: string;
    price: number; 
}

export const cardsData: CardData[] = [
    {
        id: 1,
        name: "Концерт группы XYZ",
        date: "15 ноября 2026",
        minAge: 16,
        img: photo,
        address: "ул. Ленина, 10",
        type: "concert",
        price: 0
    },
    {
        id: 2,
        name: "Стендап шоу «Пятница»",
        date: "20 ноября 2026",
        minAge: 18,
        img: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&q=80",
        address: "ул. Пушкина, 5",
        type: "standup",
        price: 300
    },
    {
        id: 3,
        name: "Джазовый вечер",
        date: "25 ноября 2026",
        minAge: 12,
        img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80",
        address: "ул. Гагарина, 12",
        type: "concert",
        price: 700
    },
    {
        id: 4,
        name: "Рок-фестиваль «Гром»",
        date: "1 декабря 2026",
        minAge: 16,
        img: "https://images.unsplash.com/photo-1459749411177-287ce38e658f?w=800&q=80",
        address: "Стадион «Центральный»",
        type: "festival",
        price: 1500
    },
    {
        id: 5,
        name: "Симфонический оркестр",
        date: "5 декабря 2026",
        minAge: 6,
        img: "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?w=800&q=80",
        address: "Консерватория, зал Чайковского",
        type: "concert",
        price: 1200
    },
    {
        id: 6,
        name: "Стендап баттл",
        date: "8 декабря 2026",
        minAge: 18,
        img: "https://images.unsplash.com/photo-1496337589254-7e19d0788e3b?w=800&q=80",
        address: "Клуб «Comedy Bar»",
        type: "standup",
        price: 500
    },
    {
        id: 7,
        name: "Электронная вечеринка",
        date: "12 декабря 2026",
        minAge: 18,
        img: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&q=80",
        address: "Клуб «Энергия»",
        type: "concert",
        price: 800
    },
    {
        id: 8,
        name: "Фестиваль уличной еды",
        date: "14 декабря 2026",
        minAge: 0,
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
        address: "Центральный парк",
        type: "festival",
        price: 0
    },
    {
        id: 9,
        name: "Поп-концерт «Звёзды»",
        date: "18 декабря 2026",
        minAge: 12,
        img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
        address: "Дворец спорта",
        type: "concert",
        price: 2000
    },
    {
        id: 10,
        name: "Комедийное шоу",
        date: "20 декабря 2026",
        minAge: 16,
        img: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=800&q=80",
        address: "Театр эстрады",
        type: "standup",
        price: 600
    },
    {
        id: 11,
        name: "Блюз-фестиваль",
        date: "22 декабря 2026",
        minAge: 16,
        img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
        address: "Набережная реки",
        type: "festival",
        price: 900
    },
    {
        id: 12,
        name: "Инди-рок вечер",
        date: "25 декабря 2026",
        minAge: 16,
        img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=800&q=80",
        address: "Антикафе «Меломан»",
        type: "concert",
        price: 400
    },
    {
        id: 13,
        name: "Новогодний стендап",
        date: "28 декабря 2026",
        minAge: 18,
        img: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&q=80",
        address: "Клуб «Laugh Factory»",
        type: "standup",
        price: 700
    },
    {
        id: 14,
        name: "Зимний музыкальный фестиваль",
        date: "30 декабря 2026",
        minAge: 0,
        img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
        address: "Городская площадь",
        type: "festival",
        price: 0
    },
    {
        id: 15,
        name: "Классический балет",
        date: "3 января 2027",
        minAge: 6,
        img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80",
        address: "Театр оперы и балета",
        type: "concert",
        price: 1500
    },
    {
        id: 16,
        name: "Хип-хоп концерт",
        date: "7 января 2027",
        minAge: 16,
        img: "https://images.unsplash.com/photo-1571266028243-3716f02d2b2e?w=800&q=80",
        address: "Клуб «Beat»",
        type: "concert",
        price: 1000
    },
    {
        id: 17,
        name: "Импровизация шоу",
        date: "10 января 2027",
        minAge: 12,
        img: "https://images.unsplash.com/photo-1516280440614-6697281d7f95?w=800&q=80",
        address: "Арт-пространство",
        type: "standup",
        price: 350
    },
    {
        id: 18,
        name: "Фестиваль света",
        date: "14 января 2027",
        minAge: 0,
        img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
        address: "Парк Горького",
        type: "festival",
        price: 0
    },
    {
        id: 19,
        name: "Акустический концерт",
        date: "17 января 2027",
        minAge: 12,
        img: "https://images.unsplash.com/photo-1510915361894-230e6e613fd8?w=800&q=80",
        address: "Книжный клуб",
        type: "concert",
        price: 450
    },
    {
        id: 20,
        name: "Кантри-фестиваль",
        date: "21 января 2027",
        minAge: 0,
        img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
        address: "Загородный клуб",
        type: "festival",
        price: 800
    }
];