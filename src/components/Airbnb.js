//"use client";
//import { useState } from "react";
//import classNames from "classnames";
import {
    IoOptions,
    IoGlobeOutline,
    IoPersonCircleSharp,
    IoSearchOutline,
    IoHomeOutline,
    IoStar,
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

const Airbnb = () => {

    return (
        <div className="max-w-6xl mx-auto">
            <section className="flex align-center justify-between py-4 gap-4">
                <a href="#home" className="grow-1">
                    <h1 className="text-4xl font-bold text-rose-400">airbnb</h1>
                </a>

                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-4">
                        <button className="px-4 py-2 border rounded-full">Alloggi</button>
                        <button className="px-4 py-2 border rounded-full">Esperienze</button>
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
            <section className="flex flex-col gap-4 mt-4">
                <div className="flex align-center gap-4 py-4 items-center">
                    <nav className="overflow-x-auto">
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
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-rose-400 text-white rounded-lg">
                        <IoOptions />
                        <span>Filter</span>
                    </button>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b" alt="Airbnb" />
                    <h3>San Martino in Badia, Italia</h3>
                    <div>
                        <IoStar />
                        <span>5,0</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Airbnb;
