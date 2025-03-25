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
    IoHeartOutline,
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoInstagram,
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
        host: "Hosted by a business",
        price: 336,
        date: "Apr 12 - 17",
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
        host: "Hosted by a business",
        price: 336,
        date: "Apr 12 - 17",
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
        host: "Hosted by a business",
        price: 336,
        date: "Apr 12 - 17",
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
        host: "Hosted by a business",
        price: 336,
        date: "Apr 12 - 17",
        images: [
            "https://picsum.photos/id/46/300.jpg",
            "https://picsum.photos/id/47/300.jpg",
            "https://picsum.photos/id/48/300.jpg",
        ],
    },
];

const navDestinations = [
    {
        tabTitle: "Popular", tabContent: [
            { subtabTitle: "Canmore", subtabContent: "Condo rentals", subtabUrl: "#canmore" },
            { subtabTitle: "Canmore", subtabContent: "Condo rentals", subtabUrl: "#canmore" },
            { subtabTitle: "Canmore", subtabContent: "Condo rentals", subtabUrl: "#canmore" },
            { subtabTitle: "Canmore", subtabContent: "Condo rentals", subtabUrl: "#canmore" },
            { subtabTitle: "Canmore", subtabContent: "Condo rentals", subtabUrl: "#canmore" },
            { subtabTitle: "Canmore", subtabContent: "Condo rentals", subtabUrl: "#canmore" },
            { subtabTitle: "Canmore", subtabContent: "Condo rentals", subtabUrl: "#canmore" },
            { subtabTitle: "Canmore", subtabContent: "Condo rentals", subtabUrl: "#canmore" },
            { subtabTitle: "Canmore", subtabContent: "Condo rentals", subtabUrl: "#canmore" },
            { subtabTitle: "Canmore", subtabContent: "Condo rentals", subtabUrl: "#canmore" },
            { subtabTitle: "Canmore", subtabContent: "Condo rentals", subtabUrl: "#canmore" },
            { subtabTitle: "Canmore", subtabContent: "Condo rentals", subtabUrl: "#canmore" },
        ]
    },
    { tabTitle: "Arts & Culture", tabContent: [] },
    { tabTitle: "Outdoors", tabContent: [] },
    { tabTitle: "Mountain", tabContent: [] },
    { tabTitle: "Beach", tabContent: [] },
    { tabTitle: "Unique stays", tabContent: [] },
    { tabTitle: "Categories", tabContent: [] },
    { tabTitle: "Things to do", tabContent: [] },
    { tabTitle: "Travel tips & inspiration", tabContent: [] },
    { tabTitle: "Airbnb-friendly apartments", tabContent: [] },
];

const navFooter = [
    {
        category: "Support",
        links: [
            { label: "Help Center", url: "#" },
            { label: "AirCover", url: "#" },
            { label: "Anti-discrimination", url: "#" },
            { label: "Disability support", url: "#" },
            { label: "Cancellation options", url: "#" },
            { label: "Report a neighborhood concern", url: "#" },
        ]
    },
    {
        category: "Hosting",
        links: [
            { label: "Airbnb your home", url: "#" },
            { label: "AirCover for Hosts", url: "#" },
            { label: "Hosting resources", url: "#" },
            { label: "Community forum", url: "#" },
            { label: "Hosting responsibly", url: "#" },
            { label: "Airbnb-friendly apartments", url: "#" },
            { label: "Join a free Hosting class", url: "#" },
            { label: "Find a co‑host", url: "#" },
        ]
    },
    {
        category: "Airbnb",
        links: [
            { label: "Newsroom", url: "#" },
            { label: "New features", url: "#" },
            { label: "Careers", url: "#" },
            { label: "Investors", url: "#" },
            { label: "Gift cards", url: "#" },
            { label: "Airbnb.org emergency stays", url: "#" },
        ]
    }
]

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
        <>
            <section className="max-w-6xl mx-auto flex align-center justify-between py-4 gap-4">
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

            <hr className="border-gray-200 mt-8" />

            <section className="max-w-6xl mx-auto flex flex-col gap-4">
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

            <section className="py-10 bg-gray-100">
                <div className="max-w-6xl mx-auto text-sm">
                    <h2 className="font-bold text-xl">Inspiration for future getaways</h2>

                    <nav className="mt-4">
                        <ul className="flex border-b border-gray-300">
                            {navDestinations.map((tab, index) => (
                                <li key={index}>
                                    <button className={classNames(
                                        "py-3",
                                        { "pl-0 pr-2 border-b-2": index == 0 },
                                        { "px-2": index != 0 }
                                    )}>{tab.tabTitle}</button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="mt-4">
                        {navDestinations.map((tab, index) => (
                            <div className={classNames(
                                "grid grid-cols-6 gap-4",
                                { "hidden": index != 0 }
                            )}>
                                {tab.tabContent.map((subtab, index) => (
                                    <a href={subtab.subtabUrl} key={index}>
                                        <span className="font-semibold block">{subtab.subtabTitle}</span>
                                        <span>{subtab.subtabContent}</span>
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            <section className="py-10 bg-gray-100">
                <div className="max-w-6xl mx-auto text-sm grid grid-cols-3 gap-4">
                    {navFooter.map((item, index) => (
                        <div key={index}>
                            <h3 className="font-bold text-lg">{item.category}</h3>
                            <nav className="mt-4">
                                <ul>
                                    {item.links.map((link, index) => (
                                        <li key={index}>
                                            <a className="block py-1" href={link.url}>{link.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    ))}
                </div>
            </section >

            <section className="bg-gray-100">
                <div className="max-w-6xl mx-auto text-sm flex items-center justify-between gap-4 border-t-1 border-gray-300 py-3">
                    <nav>
                        <ul className="flex items-center">
                            <li>© 2025 Edalgrin</li>
                            <li><a className="block py-2 px-3" href="#">Terms</a></li>
                            <li><a className="block py-2 px-3" href="#">Sitemap</a></li>
                            <li><a className="block py-2 px-3" href="#">Privacy</a></li>
                            <li><a className="block py-2 px-3" href="#">Your privacy choices</a></li>
                        </ul>
                    </nav>

                    <nav>
                        <ul className="flex items-center">
                            <li>
                                <button className="flex items-center px-3 py-2 gap-2">
                                    <IoGlobeOutline />
                                    <span>English (US)</span>
                                </button>
                            </li>
                            <li>
                                <button className="flex items-center px-3 py-2 gap-2">
                                    <span>€</span>
                                    <span>EUR</span>
                                </button>
                            </li>
                            <li><a className="block p-1 text-2xl" href="#"><IoLogoFacebook /></a></li>
                            <li><a className="block p-1 text-2xl" href="#"><IoLogoTwitter /></a></li>
                            <li><a className="block p-1 text-2xl" href="#"><IoLogoInstagram /></a></li>
                        </ul>
                    </nav>
                </div>
            </section >
        </>
    );
};

export default Airbnb;
