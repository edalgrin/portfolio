"use client";
import { useState, useEffect } from "react";
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
  IoArrowBack,
  IoSyncCircle,
} from "react-icons/io5";

const navCategories = [
  {
    icon: <IoHomeOutline aria-hidden="true" />,
    category: "Cabins",
  },
  {
    icon: <IoHomeOutline aria-hidden="true" />,
    category: "Icons",
  },
  {
    icon: <IoHomeOutline aria-hidden="true" />,
    category: "Amazing views",
  },
  {
    icon: <IoHomeOutline aria-hidden="true" />,
    category: "OMG!",
  },
  {
    icon: <IoHomeOutline aria-hidden="true" />,
    category: "Bed & breakfasts",
  },
  {
    icon: <IoHomeOutline aria-hidden="true" />,
    category: "Beach",
  },
  {
    icon: <IoHomeOutline aria-hidden="true" />,
    category: "Ski-in/out",
  },
  {
    icon: <IoHomeOutline aria-hidden="true" />,
    category: "Treehouses",
  },
  {
    icon: <IoHomeOutline aria-hidden="true" />,
    category: "Countryside",
  },
  {
    icon: <IoHomeOutline aria-hidden="true" />,
    category: "Castles",
  },
];

const navDestinations = [
  {
    tabTitle: "Popular",
    tabContent: [
      {
        subtabTitle: "Canmore",
        subtabContent: "Condo rentals",
        subtabUrl: "#Canmore",
      },
      {
        subtabTitle: "Benalmádena",
        subtabContent: "Apartment rentals",
        subtabUrl: "#Benalmádena",
      },
      {
        subtabTitle: "Marbella",
        subtabContent: "Apartment rentals",
        subtabUrl: "#Marbella",
      },
      {
        subtabTitle: "Mijas",
        subtabContent: "Apartment rentals",
        subtabUrl: "#Mijas",
      },
      {
        subtabTitle: "Prescott",
        subtabContent: "Cabin rentals",
        subtabUrl: "#Prescott",
      },
      {
        subtabTitle: "Scottsdale",
        subtabContent: "Apartment rentals",
        subtabUrl: "#Scottsdale",
      },
      {
        subtabTitle: "Tucson",
        subtabContent: "Pet-friendly rentals",
        subtabUrl: "#Tucson",
      },
      {
        subtabTitle: "Jasper",
        subtabContent: "Cabin rentals",
        subtabUrl: "#Jasper",
      },
      {
        subtabTitle: "Mountain View",
        subtabContent: "Family-friendly rentals",
        subtabUrl: "#Mountain",
      },
      {
        subtabTitle: "Devonport",
        subtabContent: "Cottage rentals",
        subtabUrl: "#Devonport",
      },
      {
        subtabTitle: "Mallacoota",
        subtabContent: "Beach house rentals",
        subtabUrl: "#Mallacoota",
      },
      {
        subtabTitle: "Ibiza",
        subtabContent: "Vacation rentals",
        subtabUrl: "#Ibiza",
      },
      {
        subtabTitle: "Anaheim",
        subtabContent: "Condo rentals",
        subtabUrl: "#Anaheim",
      },
      {
        subtabTitle: "Monterey",
        subtabContent: "Cottage rentals",
        subtabUrl: "#Monterey",
      },
      {
        subtabTitle: "Paso Robles",
        subtabContent: "Cottage rentals",
        subtabUrl: "#Paso",
      },
      {
        subtabTitle: "Santa Barbara",
        subtabContent: "Beach house rentals",
        subtabUrl: "#Santa",
      },
      {
        subtabTitle: "Sonoma",
        subtabContent: "Cottage rentals",
        subtabUrl: "#Sonoma",
      },
    ],
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
      { label: "Help Center", url: "#Help" },
      { label: "AirCover", url: "#AirCover" },
      { label: "Anti-discrimination", url: "#Anti" },
      { label: "Disability support", url: "#Disability" },
      { label: "Cancellation options", url: "#Cancellation" },
      { label: "Report a neighborhood concern", url: "#Report" },
    ],
  },
  {
    category: "Hosting",
    links: [
      { label: "Airbnb your home", url: "#Airbnb" },
      { label: "AirCover for Hosts", url: "#AirCover" },
      { label: "Hosting resources", url: "#Hosting" },
      { label: "Community forum", url: "#Community" },
      { label: "Hosting responsibly", url: "#Hosting" },
      { label: "Airbnb-friendly apartments", url: "#Airbnb-friendly" },
      { label: "Join a free Hosting class", url: "#Join" },
      { label: "Find a co‑host", url: "#Find" },
    ],
  },
  {
    category: "Airbnb",
    links: [
      { label: "Newsroom", url: "#Newsroom" },
      { label: "New features", url: "#New" },
      { label: "Careers", url: "#Careers" },
      { label: "Investors", url: "#Investors" },
      { label: "Gift houses", url: "#Gift" },
      { label: "Airbnb.org emergency stays", url: "#Airbnb.org" },
    ],
  },
];

const handleInputClick = () => {
  alert("Open input popup");
};

const handleCategoryButton = () => {
  alert("Slide the carousel to show the options");
};

const handleImageButton = () => {
  alert("Slide the carousel to show the options");
};

const handleCarouselButton = () => {
  alert("Slide the carousel to show the options");
};

const handleTabButton = () => {
  alert("Change the tab");
};

const Card = ({ id, title, rating, host, price, date, images, favorite }) => {
  return (
    <div className="relative text-sm">
      <div className="flex justify-between items-center absolute top-3 left-3 right-3">
        {favorite && (
          <span className="font-semibold bg-white dark:bg-gray-800 px-2 py-1 shadow-md rounded-full">
            Guest favorite
          </span>
        )}
        <button className="btn-2 rounded-full p-3 text-xl z-1">
          <IoHeartOutline />
        </button>
      </div>
      <div className="flex overflow-x-hidden">
        {images.map((image, index) => (
          <img
            className={classNames("rounded-xl", { lazy: index })}
            key={index}
            src={image}
            alt=""
          />
        ))}
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
      <a
        href={`#more${id}`}
        aria-label="View more"
        className="group rounded-lg before:absolute before:inset-0 before:rounded-xl before:content-['']"
      >
        <span
          aria-hidden="true"
          className="hidden group-focus-visible:block mt-2 btn-1 py-2 px-4 rounded-lg text-center"
        >
          View more
        </span>

        <button
          aria-label="Previous Image"
          onClick={() => {
            handleImageButton();
          }}
          className="btn-2 rounded-full p-2 text-xl absolute top-33 left-3 opacity-0"
        >
          <IoArrowBack aria-hidden="true" />
        </button>

        <button
          aria-label="Next Image"
          onClick={() => {
            handleImageButton();
          }}
          className="btn-2 rounded-full p-2 text-xl absolute top-33 right-3 opacity-0 group-hover:opacity-100 duration-300 ease-in-out"
        >
          <IoArrowForward aria-hidden="true" />
        </button>
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <header className="shadow-onscroll fixed top-0 inset-x-0 bg-inherit z-2 ">
      <section className="container-7xl flex items-center justify-between py-3 lg:py-6 gap-1 sm:gap-4">
        <a href="#home" className="flex-grow-1 md:flex-grow-0 lg:pr-30">
          <h1 className="text-2xl font-bold text-rose-400">
            <span aria-hidden="true">/\</span>
            <span>airbnb</span>
          </h1>
        </a>

        <nav className="md:order-1">
          <ul className="flex gap-1 sm:gap-4 items-center">
            <li className="hidden sm:block">
              <a href="#rent" className="text-nowrap">
                Airbnb your home
              </a>
            </li>
            <li>
              <button
                aria-label="Open language menu"
                className="btn-2 rounded-full p-2 text-2xl"
              >
                <IoGlobeOutline aria-hidden="true" />
              </button>
            </li>
            <li>
              <button
                aria-label="Open user menu"
                className="btn-2 rounded-full p-2 text-2xl"
              >
                <IoPersonCircleSharp aria-hidden="true" />
              </button>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-4">
          <div className="hidden lg:flex lg:hidden-onscroll gap-4">
            <button className="px-4 py-2 font-bold">Homes</button>
            <button className="px-4 py-2">Experiences</button>
          </div>

          <form className="airbnb-form flex rounded-full border border-gray-200 shadow-md items-center">
            <label className="hidden md:flex flex-col py-2 px-4 relative after:absolute after:inset-y-2 after:right-0 after:content-[''] after:border-r-1 after:border-gray-300">
              <span className="font-semibold text-xs">
                <span className="hidden lg:block lg:hidden-onscroll">
                  Where
                </span>
                <span className="lg:block-onscroll">Anywhere</span>
              </span>
              <input
                className="hidden lg:block lg:hidden-onscroll text-sm field-sizing-content"
                onClick={() => {
                  handleInputClick();
                }}
                type="text"
                placeholder="Seach destination"
              />
            </label>
            <label className="hidden md:flex flex-col py-2 px-4 relative after:absolute after:inset-y-2 after:right-0 after:content-[''] after:border-r-1 after:border-gray-300">
              <span className="font-semibold text-xs">
                <span className="hidden lg:block lg:hidden-onscroll">
                  Check in
                </span>
                <span className="lg:block-onscroll">Any week</span>
              </span>
              <input
                className="hidden lg:block lg:hidden-onscroll text-sm field-sizing-content"
                onClick={() => {
                  handleInputClick();
                }}
                type="text"
                placeholder="Add dates"
              />
            </label>
            <label className="hidden lg:flex lg:hidden-onscroll flex-col py-2 px-4 relative after:absolute after:inset-y-2 after:right-0 after:content-[''] after:border-r-1 after:border-gray-300">
              <span className="font-semibold text-xs">Check out</span>
              <input
                className="text-sm field-sizing-content"
                onClick={() => {
                  handleInputClick();
                }}
                type="text"
                placeholder="Add dates"
              />
            </label>
            <label className="hidden md:flex flex-col py-2 px-4">
              <span className="hidden lg:block lg:hidden-onscroll font-semibold text-xs">
                Who
              </span>
              <input
                className="text-sm field-sizing-content"
                onClick={() => {
                  handleInputClick();
                }}
                type="text"
                placeholder="Add guests"
              />
            </label>
            <button
              aria-label="Search"
              className="btn-1 rounded-full p-3 shrink-0 text-xl md:m-1 lg:m-2"
            >
              <IoSearchOutline aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>

      <hr className="border-gray-200" />

      <section className="container-7xl flex flex-col gap-4">
        <div className="flex align-center gap-4 items-center">
          <button
            aria-label="Previous Categories"
            onClick={() => {
              handleCarouselButton();
            }}
            className="btn-2 rounded-full p-2 text-xl hidden"
          >
            <IoArrowBack aria-hidden="true" />
          </button>

          <nav className="overflow-x-hidden">
            <ul className="flex items-center">
              {navCategories.map((category, index) => (
                <li key={index} className="shrink-0">
                  <button
                    role="tab"
                    aria-selected={index == 0}
                    aria-controls={`panel-${index}`}
                    id={`category-tab-${index}`}
                    tabIndex={index == 0 ? "0" : "-1"}
                    onClick={() => {
                      handleCategoryButton();
                    }}
                    className={classNames(
                      "flex flex-col items-center gap-2 min-w-15 sm:min-w-30 py-3 lg:py-5 relative after:absolute after:inset-x-10 after:bottom-3 after:content-[''] after:border-b-2",
                      { "": index == 0 },
                      {
                        "text-gray-500 hover:text-gray-700 dark:hover:text-gray-400 after:border-transparent hover:after:border-gray-300 duration-300 ease-in-out":
                          index != 0,
                      }
                    )}
                  >
                    {category.icon}
                    <span className="text-xs font-bold">
                      {category.category}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <button
            aria-label="Next Categories"
            onClick={() => {
              handleCarouselButton();
            }}
            className="btn-2 rounded-full p-2 text-xl"
          >
            <IoArrowForward aria-hidden="true" />
          </button>

          <button
            aria-label="Filter"
            className="flex items-center justify-center gap-2 p-3 sm:px-4 sm:py-2 btn-2 rounded-full sm:rounded-md"
          >
            <IoOptions aria-hidden="true" />
            <span aria-hidden="true" className="hidden sm:block">
              Filter
            </span>
          </button>
        </div>
      </section>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-700 text-sm">
      <section className="container-7xl py-10 sm:grid sm:grid-cols-3 sm:gap-4">
        {navFooter.map((item, index) => (
          <div key={index}>
            {index != 0 && <hr className="border-gray-300 my-4 sm:hidden" />}
            <h3 className="font-bold text-lg">{item.category}</h3>
            <nav className="mt-4">
              <ul>
                {item.links.map((link, index) => (
                  <li key={index}>
                    <a className="block py-1" href={link.url}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ))}
      </section>

      <hr className="container-7xl border-gray-300" />

      <section className="container-7xl flex flex-col md:flex-row-reverse items-center justify-between gap-4 py-3">
        <nav>
          <ul className="flex items-center">
            <li>
              <button
                aria-label="Open language menu"
                className="flex items-center px-3 py-2 gap-2"
              >
                <IoGlobeOutline aria-hidden="false" />
                <span aria-hidden="false">English (US)</span>
              </button>
            </li>
            <li>
              <button
                aria-label="Open currency menu"
                className="flex items-center px-3 py-2 gap-2"
              >
                <span aria-hidden="true">€ EUR</span>
              </button>
            </li>
            <li>
              <a className="block p-1 text-2xl" href="#" aria-label="Facebook">
                <IoLogoFacebook aria-hidden="true" />
              </a>
            </li>
            <li>
              <a className="block p-1 text-2xl" href="#" aria-label="Twitter">
                <IoLogoTwitter aria-hidden="true" />
              </a>
            </li>
            <li>
              <a className="block p-1 text-2xl" href="#" aria-label="Instagram">
                <IoLogoInstagram aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className="flex flex-col sm:flex-row items-center">
            <li>© 2025 Edalgrin</li>
            <li>
              <a className="block py-2 px-3" href="#">
                Terms
              </a>
            </li>
            <li>
              <a className="block py-2 px-3" href="#">
                Sitemap
              </a>
            </li>
            <li>
              <a className="block py-2 px-3" href="#">
                Privacy
              </a>
            </li>
            <li>
              <a className="block py-2 px-3" href="#">
                Your privacy choices
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
};

const randomDate = () => {
  const month = Math.random() > 0.5 ? "Apr" : "May";
  const arrival = Math.ceil(Math.random() * 21);
  const departure = arrival + Math.ceil(Math.random() * 11);
  return `${month} ${arrival} - ${departure}`;
};

const randomImage = () => {
  return `https://picsum.photos/id/${Math.ceil(Math.random() * 201)}/300.jpg`;
};

const Airbnb = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    /*
    Normally I would fetch data from a server

    fetch("serverUrl")
        .then((response) => response.json())
        .then((items) =>  setHouses(items))
        .catch((error) => console.error("Error fetching:", error));
    }, []);
    
    In this case I'm generating the data with a function
    */

    const newHouses = [...houses];

    for (let i = 0; i < 8; i++) {
      newHouses.push({
        id: i,
        title: i,
        rating: (Math.random() * 1 + 4).toFixed(1),
        host: `Hosted by ${i}`,
        price: Math.ceil(Math.random() * 100 + 200),
        date: randomDate(),
        images: [randomImage()],
        favorite: Math.random() > 0.5,
      });
    }

    setHouses(newHouses);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 z-3">
        <a href="#content" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
      </div>
      <Header />

      <main id="content">
        <section className="container-7xl mt-40 lg:mt-70 mb-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {houses.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>

          <div
            className={classNames(
              "py-10 flex items-center justify-center gap-3 animate-pulse",
              { hidden: houses.length != 0 }
            )}
          >
            <span className="font-bold">LOADING</span>
            <IoSyncCircle
              aria-hidden="true"
              className="text-2xl animate-spin"
            />
          </div>
        </section>

        <section className="py-10 bg-gray-100 dark:bg-gray-700">
          <div className="container-7xl text-sm">
            <h2 className="font-bold text-xl">
              Inspiration for future getaways
            </h2>

            <nav className="mt-4 flex items-center gap-3">
              <button
                aria-label=""
                onClick={() => {
                  handleCarouselButton();
                }}
                className="btn-2 rounded-full p-2 text-xl hidden"
              >
                <IoArrowBack aria-hidden="true" />
              </button>

              <ul
                role="tablist"
                aria-label="Destinations"
                className="flex border-b border-gray-300 overflow-x-hidden"
              >
                {navDestinations.map((tab, index) => (
                  <li key={index} className="shrink-0">
                    <button
                      role="tab"
                      aria-selected={index == 0}
                      aria-controls={`panel-${index}`}
                      id={`link-tab-${index}`}
                      tabIndex={index == 0 ? "0" : "-1"}
                      className={classNames(
                        "py-3",
                        { "pl-0 pr-2 border-b-2": index == 0 },
                        { "px-2": index != 0 }
                      )}
                      onClick={() => {
                        handleTabButton();
                      }}
                    >
                      {tab.tabTitle}
                    </button>
                  </li>
                ))}
              </ul>

              <button
                aria-label="Next Destinations"
                onClick={() => {
                  handleCarouselButton();
                }}
                className="btn-2 rounded-full p-2 text-xl lg:hidden"
              >
                <IoArrowForward aria-hidden="true" />
              </button>
            </nav>

            <div className="mt-4">
              {navDestinations.map((tab, index) => (
                <div
                  key={index}
                  id={`link-panel-${index}`}
                  role="tabpanel"
                  tabIndex="0"
                  aria-labelledby={`link-tab-${index}`}
                  className={classNames(
                    "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4",
                    { hidden: index != 0 }
                  )}
                >
                  {tab.tabContent.map((subtab, index) => (
                    <a href={subtab.subtabUrl} key={index}>
                      <span className="font-semibold block">
                        {subtab.subtabTitle}
                      </span>
                      <span>{subtab.subtabContent}</span>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Airbnb;
