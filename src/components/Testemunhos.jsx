import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const testimonialsData = [
    {
        name: "Tim",
        country: "de",
        rating: 5,
        textKey:
            "testimonials.tim",
    },
    {
        name: "Fernandes",
        country: "pt",
        rating: 5,
        textKey:
            "testimonials.fernandes",
    },
    {
        name: "Sergio",
        country: "es",
        rating: 4,
        textKey:
            "testimonials.sergio",
    },
    {
        name: "Elia",
        country: "it",
        rating: 5,
        textKey:
            "testimonials.elia",
    },
    {
        name: "Lilly-sophie",
        country: "de",
        rating: 4,
        textKey:
            "testimonials.lilly_sophie",
    },
    {
        name: "Daniel",
        country: "fr",
        rating: 5,
        textKey:
            "testimonials.daniel",
    },
    {
        name: "Marie",
        country: "fr",
        rating: 5,
        textKey:
            "testimonials.marie",
    },
    {
        name: "Marianne",
        country: "fr",
        rating: 5,
        textKey:
            "testimonials.marianne",
    },
    {
        name: "Thomas",
        country: "de",
        rating: 4,
        textKey:
            "testimonials.thomas",
    },
    {
        name: "Itsaso",
        country: "es",
        rating: 4,
        textKey:
            "testimonials.itsaso",
    },
    {
        name: "Herve",
        country: "fr",
        rating: 5,
        textKey:
            "testimonials.herve",
    }
];

function Testemunhos() {
    const { t } = useTranslation();

    const [current, setCurrent] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setCardsPerView(1);
            else if (window.innerWidth < 1024) setCardsPerView(2);
            else setCardsPerView(3);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        setCurrent((prev) =>
            prev + 1 > testimonialsData.length - cardsPerView ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev - 1 < 0 ? testimonialsData.length - cardsPerView : prev - 1
        );
    };

    const visibleCards = testimonialsData.slice(
        current,
        current + cardsPerView
    );

    return (
        <section
            id="reviews"
            className="w-full lg:max-w-6xl mx-auto bg-[#e0f0f4] py-16 overflow-hidden font-sans rounded-3xl"
        >
            <div className="mx-auto px-4 md:px-16 lg:px-8 text-center">
                {/* SUBTITLE */}
                <p className="gochi-hand-regular text-[#004d61] text-xs md:text-sm mb-2">
                    {t("testimonials.subtitle")}
                </p>

                {/* TITLE */}
                <h2 className="text-[#004d61] text-2xl md:text-4xl font-bold tracking-tight uppercase mb-16 md:mb-24">
                    {t("testimonials.title")}
                </h2>

                {/* SLIDER */}
                <div className="relative flex items-center justify-center">
                    {/* LEFT */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 z-10 bg-white w-9 h-9 md:w-11 md:h-11 rounded-full shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    {/* CARDS */}
                    <div
                        className={`grid gap-8 w-full px-12 md:px-16 ${cardsPerView === 1
                            ? "grid-cols-1"
                            : cardsPerView === 2
                                ? "grid-cols-2"
                                : "grid-cols-3"
                            }`}
                    >
                        {visibleCards.map((item, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-2xl pt-16 pb-3 px-3 shadow-sm"
                            >
                                {/* FLAG */}
                                <div className="absolute -top-9 left-1/2 -translate-x-1/2">
                                    <div className="w-18 h-18 rounded-full border-[6px] border-white overflow-hidden shadow-md">
                                        <img
                                            src={`https://flagcdn.com/w80/${item.country}.png`}
                                            alt={item.country}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="bg-[#e0f0f4] rounded-2xl p-5 h-full flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg italic font-semibold text-[#0e5063] mb-3">
                                            {item.name}
                                        </h3>

                                        <p className="text-[#31535c] text-sm leading-relaxed text-center">
                                            "{t(item.textKey)}"
                                        </p>
                                    </div>

                                    {/* STARS (INDIVIDUAL PER PERSON) */}
                                    <div className="flex justify-center gap-1 text-lg mt-5">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <FontAwesomeIcon
                                                key={i}
                                                icon={faStar}
                                                className={
                                                    i < item.rating
                                                        ? "text-yellow-400"
                                                        : "text-gray-300"
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 z-10 bg-white w-9 h-9 md:w-11 md:h-11 rounded-full shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>

                {/* DOTS */}
                <div className="flex justify-center gap-3 mt-10">
                    {Array.from({
                        length: testimonialsData.length - cardsPerView + 1,
                    }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 cursor-pointer rounded-full ${current === index
                                ? "bg-[#0e5063]"
                                : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testemunhos;