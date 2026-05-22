import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowRight,
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

import carpa from "../assets/carpa.png";
import neon from "../assets/neon.png";
import oscar from "../assets/oscar.png";

function Alojamentos() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            id: 1,
            title: "Neon",
            subtitle: "Apt 01",
            image: neon01,
            fish: neon,
            bedrooms: 2,
            rotate: "-rotate-6",
            price: 55,
            images: [neon01, neon02, neon03, neon04, neon05, neon06],
        },
        {
            id: 2,
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
        {
            id: 3,
            title: "Carpa",
            subtitle: "Apt 05",
            image: carpa01,
            fish: carpa,
            bedrooms: 2,
            rotate: "rotate-6",
            price: 65,
            images: [carpa01, carpa02, carpa03, carpa04, carpa05, carpa06],
        },
    ];

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
            prev === selectedImages.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? selectedImages.length - 1 : prev - 1
        );
    };

    return (
        <section id="house" className="w-full bg-white py-1 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* HEADER */}
                <span className="subtitle gochi-hand-regular text-[#004d61] text-xs mb-1">
                    {t("house.subtitle")}
                </span>

                <h2 className="title text-[#004d61] text-2xl md:text-4xl font-bold tracking-tight uppercase">
                    {t("house.title")}
                </h2>

                <p className="text-[#0E5368] text-center max-w-4xl mt-6 text-sm md:text-base leading-relaxed">
                    {t("house.description")}
                </p>

                {/* CARDS */}
                <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 mt-8">

                    {cards.map((card, index) => (
                        <div key={card.id} className={`relative bg-white w-[260px] sm:w-[230px] md:w-[240px] lg:w-[270px] xl:w-[300px] rounded-[28px] shadow-xl border border-[#d9d9d9] p-3 transition-all duration-300 hover:-translate-y-2 ${card.rotate} ${index === 1 ? "z-20 md:mx-[-10px]" : "z-10 md:mt-8"}`}>

                            <div className="overflow-hidden rounded-[22px]">
                                <img src={card.image} alt={card.title} className="w-full h-[160px] lg:h-[200px] object-cover transition-all duration-500 hover:scale-105" />
                            </div>

                            <div className="absolute left-1/2 -translate-x-1/2 top-[140px] lg:top-[180px]">
                                <img src={card.fish} alt="Peixe" className="w-20 object-contain" />
                            </div>

                            <div className="pt-4 pb-2 px-2 flex flex-col items-start">

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

                                    <div className="flex flex-col items-center justify-center">
                                        <div className="flex items-center">
                                            <img src={bed02} className="w-7" />
                                            <p className="text-[10px]">{card.bedrooms}</p>
                                        </div>
                                        <p className="text-[10px]">{t("house.people")}</p>
                                    </div>

                                    <div className="flex flex-col items-center justify-center">
                                        <div className="flex items-center">
                                            <img src={wc} className="w-8 mb-1" />
                                            <p className="text-[10px]">1</p>
                                        </div>
                                        <p className="text-[10px]">WC</p>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <img src={actv02} className="w-7" />
                                        <p className="text-[10px]">AC | TV</p>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <img src={wifi02} className="w-7" />
                                        <p className="text-[10px]">Wi-Fi</p>
                                    </div>

                                </div>

                                <div className="w-full h-[1px] bg-gray-200 my-1"></div>

                                <button
                                    onClick={() => openCarousel(card.images)}
                                    className="w-full mt-2 text-sm font-semibold bg-[#17B5C1] hover:bg-[#109ca7] transition-all duration-300 text-white rounded-full py-3 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                                >
                                    {t("house.view_photos")}
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTTOM BUTTON */}
                <button
                    onClick={() => navigate("/Apartamentos")}
                    className="btn-dark mt-4 mb-10 text-sm font-semibold flex items-center pl-6 pr-1 gap-1 py-2 border-2 rounded-full bg-[#0F4A5A] text-white hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                    {t("house.more_apartments")}
                    <FontAwesomeIcon icon={faCircleArrowRight} style={{ fontSize: "34px" }} />
                </button>

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
        </section>
    );
}

export default Alojamentos;