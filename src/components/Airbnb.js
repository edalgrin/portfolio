"use client";
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
    IoArrowForward,
    IoSyncCircle,
} from "react-icons/io5";

const navCategories = [
    {
        icon: <IoHomeOutline aria-hidden="true" />,
        category: "Cabins"
    },
    {
        icon: <IoHomeOutline aria-hidden="true" />,
        category: "Icons"
    },
    {
        icon: <IoHomeOutline aria-hidden="true" />,
        category: "Amazing views"
    },
    {
        icon: <IoHomeOutline aria-hidden="true" />,
        category: "OMG!"
    },
    {
        icon: <IoHomeOutline aria-hidden="true" />,
        category: "Bed & breakfasts"
    },
    {
        icon: <IoHomeOutline aria-hidden="true" />,
        category: "Beach"
    },
    {
        icon: <IoHomeOutline aria-hidden="true" />,
        category: "Ski-in/out"
    },
    {
        icon: <IoHomeOutline aria-hidden="true" />,
        category: "Treehouses"
    },
    {
        icon: <IoHomeOutline aria-hidden="true" />,
        category: "Countryside"
    },
    {
        icon: <IoHomeOutline aria-hidden="true" />,
        category: "Castles"
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
            {
                subtabTitle: "Canmore",
                subtabContent: "Condo rentals",
                subtabUrl: "#Canmore"
            },
            {
                subtabTitle: "Benalmádena",
                subtabContent: "Apartment rentals",
                subtabUrl: "#Benalmádena"
            },
            {
                subtabTitle: "Marbella",
                subtabContent: "Apartment rentals",
                subtabUrl: "#Marbella"
            },
            {
                subtabTitle: "Mijas",
                subtabContent: "Apartment rentals",
                subtabUrl: "#Mijas"
            },
            {
                subtabTitle: "Prescott",
                subtabContent: "Cabin rentals",
                subtabUrl: "#Prescott"
            },
            {
                subtabTitle: "Scottsdale",
                subtabContent: "Apartment rentals",
                subtabUrl: "#Scottsdale"
            },
            {
                subtabTitle: "Tucson",
                subtabContent: "Pet-friendly rentals",
                subtabUrl: "#Tucson"
            },
            {
                subtabTitle: "Jasper",
                subtabContent: "Cabin rentals",
                subtabUrl: "#Jasper"
            },
            {
                subtabTitle: "Mountain View",
                subtabContent: "Family-friendly rentals",
                subtabUrl: "#Mountain"
            },
            {
                subtabTitle: "Devonport",
                subtabContent: "Cottage rentals",
                subtabUrl: "#Devonport"
            },
            {
                subtabTitle: "Mallacoota",
                subtabContent: "Beach house rentals",
                subtabUrl: "#Mallacoota"
            },
            {
                subtabTitle: "Ibiza",
                subtabContent: "Vacation rentals",
                subtabUrl: "#Ibiza"
            },
            {
                subtabTitle: "Anaheim",
                subtabContent: "Condo rentals",
                subtabUrl: "#Anaheim"
            },
            {
                subtabTitle: "Monterey",
                subtabContent: "Cottage rentals",
                subtabUrl: "#Monterey"
            },
            {
                subtabTitle: "Paso Robles",
                subtabContent: "Cottage rentals",
                subtabUrl: "#Paso"
            },
            {
                subtabTitle: "Santa Barbara",
                subtabContent: "Beach house rentals",
                subtabUrl: "#Santa"
            },
            {
                subtabTitle: "Sonoma",
                subtabContent: "Cottage rentals",
                subtabUrl: "#Sonoma"
            },
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
                <span className="font-semibold bg-white px-2 py-1 shadow-md border rounded-full border-gray-100">Guest favotire</span>
                <button className="p-3 bg-white rounded-full text-xl z-1">
                    <IoHeartOutline />
                </button>
            </div>
            <div className="flex overflow-x-hidden">
                {images.map((image, index) => (
                    <img className={classNames("rounded-xl", { "lazy": index })} key={index} src={image} alt="" />
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
            <a href={`#more${id}`} aria-label="View more" className="group rounded-lg before:absolute before:inset-0 before:rounded-xl before:content-['']">
                <span aria-hidden="true" className="hidden group-focus-visible:block mt-2 bg-rose-400 text-white py-2 px-4 rounded-lg text-center">View more</span>
            </a>
        </div>
    )
}

const handleInputClick = () => {
    alert("Open input popup");
}

const handleCarouselButton = () => {
    alert("Slide the carousel to show the options");
}

const handleTabButton = () => {
    alert("Change the tab");
}

const Header = () => {
    return (
        <header className="shadow-onscroll fixed top-0 inset-x-0 bg-white z-2 ">
            <section className="max-w-7xl px-3 mx-auto flex items-center justify-between py-3 lg:py-6 gap-1 sm:gap-4">
                <a href="#home" className="flex-grow-1 md:flex-grow-0 lg:pr-30">
                    <h1 className="text-2xl font-bold text-rose-400">
                        <span aria-hidden="true">/\</span>
                        <span>airbnb</span>
                    </h1>
                </a>

                <nav className="md:order-1">
                    <ul className="flex gap-1 sm:gap-4 items-center">
                        <li className="hidden sm:block"><a href="#rent" className="text-nowrap">Airbnb your home</a></li>
                        <li><button aria-label="Open language menu" className="p-2 border rounded-full text-2xl"><IoGlobeOutline aria-hidden="true" /></button></li>
                        <li><button aria-label="Open user menu" className="p-2 border rounded-full text-2xl"><IoPersonCircleSharp aria-hidden="true" /></button></li>
                    </ul>
                </nav>

                <div className="flex flex-col items-center gap-4">
                    <div className="hidden lg:flex lg:hidden-onscroll gap-4">
                        <button className="px-4 py-2">Homes</button>
                        <button className="px-4 py-2">Experiences</button>
                    </div>

                    <form className="airbnb-form flex rounded-full border border-gray-200 shadow-md items-center">
                        <label className="hidden md:flex flex-col py-2 px-4 relative after:absolute after:inset-y-2 after:right-0 after:content-[''] after:border-r-1 after:border-gray-300">
                            <span className="font-semibold text-xs">
                                <span className="hidden lg:block lg:hidden-onscroll">Where</span>
                                <span className="lg:block-onscroll">Anywhere</span>
                            </span>
                            <input className="hidden lg:block lg:hidden-onscroll text-sm field-sizing-content" onClick={() => { handleInputClick(); }} type="text" placeholder="Seach destination" />
                        </label>
                        <label className="hidden md:flex flex-col py-2 px-4 relative after:absolute after:inset-y-2 after:right-0 after:content-[''] after:border-r-1 after:border-gray-300">
                            <span className="font-semibold text-xs">
                                <span className="hidden lg:block lg:hidden-onscroll">Check in</span>
                                <span className="lg:block-onscroll">Any week</span>
                            </span>
                            <input className="hidden lg:block lg:hidden-onscroll text-sm field-sizing-content" onClick={() => { handleInputClick(); }} type="text" placeholder="Add dates" />
                        </label>
                        <label className="hidden lg:flex lg:hidden-onscroll flex-col py-2 px-4 relative after:absolute after:inset-y-2 after:right-0 after:content-[''] after:border-r-1 after:border-gray-300">
                            <span className="font-semibold text-xs">Check out</span>
                            <input className="text-sm field-sizing-content" onClick={() => { handleInputClick(); }} type="text" placeholder="Add dates" />
                        </label>
                        <label className="hidden md:flex flex-col py-2 px-4">
                            <span className="hidden lg:block lg:hidden-onscroll font-semibold text-xs">Who</span>
                            <input className="text-sm field-sizing-content" onClick={() => { handleInputClick(); }} type="text" placeholder="Add guests" />
                        </label>
                        <button aria-label="Search" className="p-3 bg-rose-400 text-white rounded-full shrink-0 text-xl md:m-1 lg:m-2">
                            <IoSearchOutline aria-hidden="true" />
                        </button>
                    </form>
                </div>
            </section>

            <hr className="border-gray-200" />

            <section className="max-w-7xl px-3 mx-auto flex flex-col gap-4">
                <div className="flex align-center gap-4 items-center">
                    <nav className="overflow-x-hidden">
                        <ul className="flex items-center">
                            {navCategories.map((category, index) => (
                                <li key={index} className="shrink-0">
                                    <button className="flex flex-col items-center gap-2 min-w-15 sm:min-w-30 py-3 lg:py-5">
                                        {category.icon}
                                        <span className="text-xs">{category.category}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button aria-label="Filter" className="flex items-center justify-center gap-2 p-3 sm:px-4 sm:py-2 border rounded-full sm:rounded-lg">
                        <IoOptions aria-hidden="true" />
                        <span aria-hidden="true" className="hidden sm:block">Filter</span>
                    </button>
                </div>
            </section>
        </header>
    )
}

const Main = () => {
    return (
        <main id="content">
            <section className="max-w-7xl px-3 mx-auto mt-40 lg:mt-70 mb-10">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <AirbnbCard key={index} {...card} />
                    ))}
                </div>
                <div className="py-10 flex items-center justify-center gap-3 animate-pulse hidden">
                    <span className="font-bold">LOADING</span>
                    <IoSyncCircle aria-hidden="true" className="text-2xl animate-spin" />
                </div>
            </section>

            <section className="py-10 bg-gray-100">
                <div className="max-w-7xl px-3 mx-auto text-sm">
                    <h2 className="font-bold text-xl">Inspiration for future getaways</h2>

                    <nav className="mt-4 pr-10 flex items-center gap-3">
                        <button aria-label="" onClick={() => { handleCarouselButton() }} className="bg-red-100 absolute top-1 right-0 p-2 border border-gray-300 bg-white rounded-full text-xl lg:hidden">
                            <IoArrowForward aria-hidden="true" />
                        </button>

                        <ul className="flex border-b border-gray-300 overflow-x-hidden">
                            {navDestinations.map((tab, index) => (
                                <li key={index} className="shrink-0">
                                    <button
                                        role="tab"
                                        aria-selected={index == 0}
                                        aria-controls={`panel-${index}`}
                                        id={`tab-${index}`}
                                        tabindex={index}
                                        className={classNames(
                                            "py-3",
                                            { "pl-0 pr-2 border-b-2": index == 0 },
                                            { "px-2": index != 0 }
                                        )}
                                        onClick={() => { handleTabButton() }}>{tab.tabTitle}</button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="mt-4">
                        {navDestinations.map((tab, index) => (
                            <div key={index} id={`panel-${index}`} role="tabpanel" tabindex="0" aria-labelledby={`tab-${index}`} className={classNames(
                                "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4",
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
        </main>
    )
}

const Footer = () => {
    return (
        <footer>
            <section className="py-10 bg-gray-100">
                <div className="max-w-7xl px-3 mx-auto text-sm sm:grid sm:grid-cols-3 sm:gap-4">
                    {navFooter.map((item, index) => (
                        <div key={index}>
                            {index != 0 && <hr className="border-gray-300 my-4 sm:hidden" />}
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
                <div className="max-w-7xl px-3 mx-auto text-sm flex flex-col md:flex-row-reverse items-center justify-between gap-4 border-t-1 border-gray-300 py-3">
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

                    <nav>
                        <ul className="flex flex-col sm:flex-row items-center">
                            <li>© 2025 Edalgrin</li>
                            <li><a className="block py-2 px-3" href="#">Terms</a></li>
                            <li><a className="block py-2 px-3" href="#">Sitemap</a></li>
                            <li><a className="block py-2 px-3" href="#">Privacy</a></li>
                            <li><a className="block py-2 px-3" href="#">Your privacy choices</a></li>
                        </ul>
                    </nav>
                </div>
            </section >
        </footer>
    )
}


const Airbnb = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

export default Airbnb;
