import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faChevronLeft,
    faChevronRight,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

import bed02 from "../assets/bed02.png";
import wc from "../assets/wc.png";
import wifi02 from "../assets/wi-fi02.png";
import actv02 from "../assets/ac-tv02.png";

import neon01 from "../assets/aptNeon/01.jpg";
import neon02 from "../assets/aptNeon/02.jpg";
import neon03 from "../assets/aptNeon/03.jpg";
import neon04 from "../assets/aptNeon/04.jpg";
import neon05 from "../assets/aptNeon/05.jpg";
import neon06 from "../assets/aptNeon/06.jpg";

import escalar01 from "../assets/aptEscalar/01.jpg";
import escalar02 from "../assets/aptEscalar/02.jpg";
import escalar03 from "../assets/aptEscalar/03.jpg";
import escalar04 from "../assets/aptEscalar/04.jpg";

import platy01 from "../assets/aptPlaty/01.jpg";
import platy02 from "../assets/aptPlaty/02.jpg";
import platy03 from "../assets/aptPlaty/03.jpg";
import platy04 from "../assets/aptPlaty/04.jpg";

import carpa01 from "../assets/aptCarpa/01.jpg";
import carpa02 from "../assets/aptCarpa/02.jpg";
import carpa03 from "../assets/aptCarpa/03.jpg";
import carpa04 from "../assets/aptCarpa/04.jpg";
import carpa05 from "../assets/aptCarpa/05.jpg";
import carpa06 from "../assets/aptCarpa/06.jpg";

import oscar01 from "../assets/aptOscar/01.jpg";
import oscar02 from "../assets/aptOscar/02.jpg";
import oscar03 from "../assets/aptOscar/03.jpg";
import oscar04 from "../assets/aptOscar/04.jpg";
import oscar05 from "../assets/aptOscar/05.jpg";
import oscar06 from "../assets/aptOscar/06.jpg";
import oscar07 from "../assets/aptOscar/07.jpg";
import oscar08 from "../assets/aptOscar/08.jpg";

import neon from "../assets/neon.png";
import platy from "../assets/platy.png";
import betta from "../assets/betta.png";
import disco from "../assets/disco.png";
import acara from "../assets/acara.png";
import oscar from "../assets/oscar.png";
import carpa from "../assets/carpa.png";
import escalar from "../assets/escalar.png";
import guppy from "../assets/guppy.png";

const apartmentsData = [
    {
        id: 1,
        title: "Neon",
        subtitle: "Apt 01",
        image: neon01,
        fish: neon,
        bedrooms: 1,
        rotate: "-rotate-6",
        price: 55,

        images: [
            neon01,
            neon02,
            neon03,
            neon04,
            neon05,
            neon06,
        ],
    },

    {
        id: 2,
        title: "Escalar",
        subtitle: "Apt 02",
        image: escalar01,
        fish: escalar,
        bedrooms: 1,
        rotate: "rotate-0",
        price: 55,

        images: [
            escalar01,
            escalar02,
            escalar03,
            escalar04,
        ],
    },

    {
        id: 3,
        title: "Betta",
        subtitle: "Apt 03",
        image: platy01,
        fish: betta,
        bedrooms: 1,
        rotate: "rotate-6",
        price: 55,

        images: [
            platy01,
            platy02,
            platy03,
            platy04,
        ],
    },

    {
        id: 4,
        title: "Guppy",
        subtitle: "Apt 04",
        image: platy01,
        fish: guppy,
        bedrooms: 1,
        rotate: "rotate-6",
        price: 55,

        images: [
            platy01,
            platy02,
            platy03,
            platy04,
        ],
    },

    {
        id: 5,
        title: "Carpa",
        subtitle: "Apt 05",
        image: carpa01,
        fish: carpa,
        bedrooms: 2,
        rotate: "rotate-6",
        price: 65,

        images: [
            carpa01,
            carpa02,
            carpa03,
            carpa04,
            carpa05,
            carpa06,
        ],
    },

    {
        id: 6,
        title: "Disco",
        subtitle: "Apt 06",
        image: escalar01,
        fish: disco,
        bedrooms: 1,
        rotate: "rotate-0",
        price: 55,

        images: [
            escalar01,
            escalar02,
            escalar03,
            escalar04,
        ],
    },

    {
        id: 7,
        title: "Acará",
        subtitle: "Apt 07",
        image: platy01,
        fish: acara,
        bedrooms: 1,
        rotate: "rotate-6",
        price: 55,

        images: [
            platy01,
            platy02,
            platy03,
            platy04,
        ],
    },

    {
        id: 8,
        title: "Platy",
        subtitle: "Apt 08",
        image: platy01,
        fish: platy,
        bedrooms: 1,
        rotate: "rotate-6",
        price: 55,

        images: [
            platy01,
            platy02,
            platy03,
            platy04,
        ],
    },

    {
        id: 9,
        title: "Oscar",
        subtitle: "Apt 09",
        image: oscar01,
        fish: oscar,
        bedrooms: 2,
        rotate: "rotate-0",
        price: 75,

        images: [
            oscar01,
            oscar02,
            oscar03,
            oscar04,
            oscar05,
            oscar06,
            oscar07,
            oscar08,
        ],
    },
];

function AllApt() {

    const { t } = useTranslation();

    /* =====================================
       FILTER STATES
    ====================================== */

    const [nameFilter, setNameFilter] = useState("");
    const [bedroomsFilter, setBedroomsFilter] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    /* =====================================
       CAROUSEL STATES
    ====================================== */

    const [isOpen, setIsOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    /* =====================================
       FILTER LOGIC
    ====================================== */

    const filtered = useMemo(() => {
        return apartmentsData.filter((apt) => {

            const matchName =
                apt.title
                    .toLowerCase()
                    .includes(nameFilter.toLowerCase()) ||

                apt.subtitle
                    .toLowerCase()
                    .includes(nameFilter.toLowerCase());

            const matchBedrooms = bedroomsFilter
                ? apt.bedrooms === Number(bedroomsFilter)
                : true;

            const matchMin = minPrice
                ? apt.price >= Number(minPrice)
                : true;

            const matchMax = maxPrice
                ? apt.price <= Number(maxPrice)
                : true;

            return (
                matchName &&
                matchBedrooms &&
                matchMin &&
                matchMax
            );
        });

    }, [
        nameFilter,
        bedroomsFilter,
        minPrice,
        maxPrice,
    ]);

    /* =====================================
       CAROUSEL FUNCTIONS
    ====================================== */

    const openCarousel = (images) => {
        setSelectedImages(images);
        setCurrentIndex(0);
        setIsOpen(true);

        document.body.style.overflow = "hidden";
    };

    const closeCarousel = () => {
        setIsOpen(false);

        document.body.style.overflow = "auto";
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === selectedImages.length - 1
                ? 0
                : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0
                ? selectedImages.length - 1
                : prev - 1
        );
    };

    return (
        <div className="min-h-screen bg-white">

            {/* HEADER */}
            <div className="max-w-7xl mx-auto flex flex-col items-center mt-28 mb-6 md:mt-34 md:mb-10">

                <span className="subtitle gochi-hand-regular text-[#004d61] text-xs mb-1">
                    {t("apartments.subtitle")}
                </span>

                <h2 className="title text-[#004d61] text-2xl md:text-4xl font-bold tracking-tight uppercase">
                    {t("apartments.title")}
                </h2>
            </div>

            {/* FILTERS */}
            <div
                className="
                    max-w-80
                    md:max-w-2xl
                    lg:max-w-6xl
                    w-full
                    mx-auto
                    relative
                    top-0
                    z-10
                    bg-[#0F4A5A]
                    shadow
                    p-4
                    space-y-3
                    md:flex
                    md:space-y-0
                    md:space-x-3
                    md:justify-between
                    rounded-2xl
                "
            >

                <input
                    className="
                        w-full
                        md:w-1/3
                        border-[#aaaaaa]
                        border
                        p-2
                        rounded
                        bg-white
                    "
                    placeholder={t("filters.search")}
                    value={nameFilter}
                    onChange={(e) =>
                        setNameFilter(e.target.value)
                    }
                />

                <input
                    type="number"
                    className="
                        w-full
                        md:w-1/5
                        border-[#aaaaaa]
                        border
                        p-2
                        rounded
                        bg-white
                    "
                    placeholder={t("filters.guests")}
                    value={bedroomsFilter}
                    onChange={(e) =>
                        setBedroomsFilter(e.target.value)
                    }
                />

                <input
                    type="number"
                    className="
                        w-full
                        md:w-1/5
                        border-[#aaaaaa]
                        border
                        p-2
                        rounded
                        bg-white
                    "
                    placeholder={t("filters.minPrice")}
                    value={minPrice}
                    onChange={(e) =>
                        setMinPrice(e.target.value)
                    }
                />

                <input
                    type="number"
                    className="
                        w-full
                        md:w-1/5
                        border-[#aaaaaa]
                        border
                        p-2
                        rounded
                        bg-white
                    "
                    placeholder={t("filters.maxPrice")}
                    value={maxPrice}
                    onChange={(e) =>
                        setMaxPrice(e.target.value)
                    }
                />
            </div>

            {/* CARDS */}
            <div
                className="
                    relative
                    grid
                    grid-cols-1
                    md:grid-cols-3
                    gap-8
                    my-10
                    max-w-5xl
                    mx-auto
                    px-4
                    justify-items-center
                "
            >

                {filtered.map((card) => (
                    <div
                        key={card.id}
                        className="
                            relative
                            bg-white
                            w-[260px]
                            sm:w-[230px]
                            md:w-[240px]
                            lg:w-[270px]
                            xl:w-[300px]
                            rounded-[28px]
                            shadow-xl
                            border
                            border-[#d9d9d9]
                            p-3
                            transition-all
                            duration-300
                            hover:-translate-y-2
                        "
                    >

                        {/* IMAGE */}
                        <div className="overflow-hidden rounded-[22px]">

                            <img
                                src={card.image}
                                alt={card.title}
                                className="
                                    w-full
                                    h-[160px]
                                    lg:h-[200px]
                                    object-cover
                                    transition-all
                                    duration-500
                                    hover:scale-105
                                "
                            />
                        </div>

                        {/* FISH ICON */}
                        <div
                            className="
                                absolute
                                left-1/2
                                -translate-x-1/2
                                top-[140px]
                                lg:top-[180px]
                            "
                        >

                            <img
                                src={card.fish}
                                alt="Peixe"
                                className="w-20 object-contain"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="pt-4 px-2 flex flex-col items-start">

                            {/* TITLE */}
                            <div className="flex justify-between items-start w-full px-1">

                                <div className="flex flex-col items-start w-full mb-3">

                                    <h3 className="text-[#0E5368] text-2xl font-semibold">
                                        {card.title}
                                    </h3>

                                    <span className="text-[#0E5368] text-sm font-semibold">
                                        {card.subtitle}
                                    </span>
                                </div>

                                <h3 className="text-[#0E5368] text-lg font-semibold mt-1">
                                    €{card.price}/{t("house.noite")}
                                </h3>
                            </div>

                            {/* INFO */}
                            <div className="flex justify-between items-center w-full px-2 lg:px-4 mb-2">

                                <div className="flex flex-col items-center">
                                    <span className="flex items-center text-[#707070] font-regular gap-1">
                                        <img
                                            src={bed02}
                                            alt="Cama"
                                            className="w-7 object-contain"
                                        />

                                        <p>{card.bedrooms}</p>
                                    </span>
                                    <span className="text-[#707070] text-[10px] font-regular">
                                        <p>{t("house.people")}</p>
                                    </span>
                                </div>

                                <div className="flex flex-col items-center">
                                    <span className="flex items-center text-[#707070]">

                                        <img
                                            src={wc}
                                            alt="Banheiro"
                                            className="w-8 object-contain"
                                        />

                                        <p>1</p>
                                    </span>
                                    <span className="text-[#707070] text-[10px] font-regular">
                                        <p>WC</p>
                                    </span>
                                </div>

                                <div className="flex flex-col items-center">
                                    <span className="flex items-center text-[#707070]">

                                        <img
                                            src={actv02}
                                            alt="AC e TV"
                                            className="w-7 object-contain"
                                        />
                                    </span>
                                    <span className="text-[#707070] text-[10px] font-regular">
                                        <p>AC | TV</p>
                                    </span>
                                </div>

                                <div className="flex flex-col items-center">
                                    <span className="flex items-center text-[#707070]">

                                        <img
                                            src={wifi02}
                                            alt="Wi-fi"
                                            className="w-7 object-contain"
                                        />
                                    </span>
                                    <span className="text-[#707070] text-[10px] font-regular">
                                        <p>Wi-Fi</p>
                                    </span>
                                </div>
                            </div>

                            {/* LINE */}
                            <div className="w-full h-[1px] bg-gray-200 my-1"></div>

                            {/* BUTTON */}
                            <button
                                onClick={() =>
                                    openCarousel(card.images)
                                }
                                className="
                                    w-full
                                    mt-2
                                    bg-[#17B5C1]
                                    hover:bg-[#109ca7]
                                    transition-all
                                    duration-300
                                    text-white
                                    rounded-full
                                    py-3
                                    px-4
                                    flex
                                    items-center
                                    justify-center
                                    gap-1
                                    shadow-lg
                                    cursor-pointer
                                    hover:scale-[1.02]
                                    active:scale-[0.98]
                                "
                            >

                                <span className="text-base font-semibold">
                                    {t("house.view_photos")}
                                </span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* =====================================
                MODAL / CAROUSEL
            ====================================== */}

            {isOpen && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 px-4">

                    {/* CLOSE */}
                    <button
                        onClick={closeCarousel}
                        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 text-white cursor-pointer active:scale-95 transition-all duration-300 hover:scale-105"
                    >
                        <FontAwesomeIcon icon={faXmark} className="text-xl" />
                    </button>

                    {/* IMAGE */}
                    <div className="relative top-10 w-full max-w-5xl flex flex-col items-center gap-3">
                        <img
                            src={selectedImages[currentIndex]}
                            alt="Apartamento"
                            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
                        />
                    </div>

                    {/* CONTROLS */}
                    <div className="relative top-10 flex items-center justify-center gap-6 mt-4 mb-6">

                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full bg-white/10 text-white cursor-pointer active:scale-95 transition-all duration-300 hover:scale-105"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        {/* DOTS */}
                        <div className="flex gap-2">
                            {selectedImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`rounded-full cursor-pointer active:scale-95 duration-300 hover:scale-105 transition-all ${currentIndex === index
                                        ? "w-6 h-2 bg-white"
                                        : "w-2 h-2 bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full bg-white/10 text-white cursor-pointer active:scale-95 transition-all duration-300 hover:scale-105"
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
}

export default AllApt;