//"use client";
//import { useState } from "react";
//import classNames from "classnames";
import classNames from "classnames";
import {
    IoOptions,
    IoGlobeOutline,
    IoPersonCircleSharp,
    IoSearchOutline,
    IoHomeOutline,
    IoStar,
    IoHeartOutline
} from "react-icons/io5";

const navCategories = [
    {
        icon: <IoHomeOutline />,
        category: "Baite",
    },
    {
        icon: <IoHomeOutline />,
        category: "Icone",
    },
    {
        icon: <IoHomeOutline />,
        category: "Vista mozzafiato",
    },
    {
        icon: <IoHomeOutline />,
        category: "Wow!",
    },
    {
        icon: <IoHomeOutline />,
        category: "Ville",
    },
    {
        icon: <IoHomeOutline />,
        category: "Luoghi remoti",
    },
    {
        icon: <IoHomeOutline />,
        category: "Sulle piste",
    },
    {
        icon: <IoHomeOutline />,
        category: "Baite",
    },
    {
        icon: <IoHomeOutline />,
        category: "Icone",
    },
    {
        icon: <IoHomeOutline />,
        category: "Vista mozzafiato",
    },
    {
        icon: <IoHomeOutline />,
        category: "Wow!",
    },
    {
        icon: <IoHomeOutline />,
        category: "Ville",
    },
    {
        icon: <IoHomeOutline />,
        category: "Luoghi remoti",
    },
    {
        icon: <IoHomeOutline />,
        category: "Sulle piste",
    }
]

const cards = [
    {
        id: "1",
        title: "San Martino in Badia, Italia",
        rating: 5.0,
        host: "Host: azienda specializzata",
        price: 336,
        date: "12 - 17 Apr",
        images: [
            "https://picsum.photos/id/76/300.jpg",
            "https://picsum.photos/id/77/300.jpg",
            "https://picsum.photos/id/78/300.jpg",
        ],
    },
    {
        id: "2",
        title: "San Martino in Badia, Italia",
        rating: 5.0,
        host: "Host: azienda specializzata",
        price: 336,
        date: "12 - 17 Apr",
        images: [
            "https://picsum.photos/id/26/300.jpg",
            "https://picsum.photos/id/27/300.jpg",
            "https://picsum.photos/id/28/300.jpg",
        ],
    },
    {
        id: "3",
        title: "San Martino in Badia, Italia",
        rating: 5.0,
        host: "Host: azienda specializzata",
        price: 336,
        date: "12 - 17 Apr",
        images: [
            "https://picsum.photos/id/36/300.jpg",
            "https://picsum.photos/id/37/300.jpg",
            "https://picsum.photos/id/38/300.jpg",
        ],
    },
    {
        id: "4",
        title: "San Martino in Badia, Italia",
        rating: 5.0,
        host: "Host: azienda specializzata",
        price: 336,
        date: "12 - 17 Apr",
        images: [
            "https://picsum.photos/id/46/300.jpg",
            "https://picsum.photos/id/47/300.jpg",
            "https://picsum.photos/id/48/300.jpg",
        ],
    },
    {
        id: "5",
        title: "San Martino in Badia, Italia",
        rating: 5.0,
        host: "Host: azienda specializzata",
        price: 336,
        date: "12 - 17 Apr",
        images: [
            "https://picsum.photos/id/56/300.jpg",
            "https://picsum.photos/id/57/300.jpg",
            "https://picsum.photos/id/58/300.jpg",
        ],
    },
];

const AirbnbCard = ({ id, title, rating, host, price, date, images }) => {
    return (
        <div className="relative text-sm">
            <div className="flex justify-between items-center absolute top-3 left-3 right-3">
                <span className="bg-white px-2 py-1 shadow-md border border-gray-100">Love by Guests</span>
                <button className="p-3 bg-white rounded-full text-xl z-1">
                    <IoHeartOutline />
                </button>
            </div>
            <div className="flex overflow-x-hidden">
                {images.map((image, index) => (
                    <img className={classNames("rounded-xl", { "lazyload": index })} key={index} src={image} alt="" />
                ))};
            </div>
            <div className="flex justify-between items-center gap-3 mt-2">
                <h3 className="font-semibold">{title}</h3>
                <div className="flex gap-1 items-center">
                    <IoStar />
                    <span>{rating}</span>
                </div>
            </div>
            <p>{host}</p>
            <p>{date}</p>
            <p className="flex items-center gap-1">
                <span className="font-semibold">{price} €</span>
                <span>night</span>
            </p>
            <a href={`#more${id}`} className="block mt-2 bg-rose-400 text-white py-2 px-4 rounded-lg text-center before:absolute before:inset-0 before:rounded-xl before:content-['']">
                View more
            </a>
        </div>
    )
}

const Airbnb = () => {

    return (
        <div className="max-w-6xl mx-auto">
            <section className="flex align-center justify-between py-4 gap-4">
                <a href="#home" className="grow-1">
                    <h1 className="text-4xl font-bold text-rose-400">airbnb</h1>
                </a>

                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-4">
                        <button className="px-4 py-2 border rounded-lg">Alloggi</button>
                        <button className="px-4 py-2 border rounded-lg">Esperienze</button>
                    </div>

                    <form className="flex rounded-full border border-gray-200 shadow-md text-xs flex-basis-0 items-center">
                        <label className="py-2 px-5">
                            <span>Dove</span>
                            <input type="text" placeholder="Cerca destinazioni" />
                        </label>
                        <label className="py-2 px-5">
                            <span>Check in</span>
                            <input type="text" placeholder="Aggiungi data di arrivo" />
                        </label>
                        <label className="py-2 px-5">
                            <span>Check out</span>
                            <input type="text" placeholder="Aggiungi data di partenza" />
                        </label>
                        <label className="py-2 px-5">
                            <span>Chi</span>
                            <input type="text" placeholder="Aggiungi ospiti" />
                        </label>
                        <button className="p-3 bg-rose-400 text-white rounded-full shrink-0 text-xl">
                            <IoSearchOutline />
                        </button>
                    </form>
                </div>

                <nav>
                    <ul className="flex gap-4 items-center">
                        <li><a href="#rent">Affitta con Airbnb</a></li>
                        <li><button className="p-3 border rounded-full text-xl"><IoGlobeOutline /></button></li>
                        <li><button className="p-3 border rounded-full text-xl"><IoPersonCircleSharp /></button></li>
                    </ul>
                </nav>
            </section>

            <section className="flex flex-col gap-4 mt-8">
                <div className="flex align-center gap-4 py-4 items-center">
                    <nav className="overflow-x-hidden">
                        <ul className="flex items-center">
                            {navCategories.map((category, index) => (
                                <li key={index} className="shrink-0">
                                    <button className="flex flex-col items-center gap-2 w-30 py-3">
                                        {category.icon}
                                        <span className="text-xs">{category.category}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg">
                        <IoOptions />
                        <span>Filter</span>
                    </button>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <AirbnbCard key={index} {...card} />
                    ))}
                </div>
                <div className="py-10 text-center">LOADING</div>
            </section>

            <section className="py-10">
                nav3 & footer
            </section>
        </div>
    );
};

export default Airbnb;
