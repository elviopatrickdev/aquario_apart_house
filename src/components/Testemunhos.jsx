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
        name: "Ana Maria",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
        textKey: "testimonials.0",
    },
    {
        name: "Edson Freitas",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
        textKey: "testimonials.1",
    },
    {
        name: "João Guilherme",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
        textKey: "testimonials.2",
    },
    {
        name: "Carla Souza",
        image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
        textKey: "testimonials.3",
    },
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
        <section id="reviews" className="w-full lg:max-w-6xl mx-auto bg-[#e0f0f4] py-16 overflow-hidden font-sans rounded-3xl">

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
                    <button onClick={prevSlide} className="absolute left-0 z-10 bg-white w-9 h-9 md:w-11 md:h-11 rounded-full shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    {/* CARDS */}
                    <div className={`grid gap-8 w-full px-12 md:px-16 ${cardsPerView === 1 ? "grid-cols-1" : cardsPerView === 2 ? "grid-cols-2" : "grid-cols-3"}`}>

                        {visibleCards.map((item, index) => (
                            <div key={index} className="relative bg-white rounded-2xl pt-16 pb-3 px-3 shadow-sm">

                                {/* AVATAR */}
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                                    <div className="w-24 h-24 rounded-full border-[6px] border-white overflow-hidden shadow-md">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="bg-[#e0f0f4] rounded-2xl p-5 h-full flex flex-col justify-between">

                                    <div>
                                        <h3 className="text-lg italic font-semibold text-[#0e5063] mb-3">
                                            {item.name}
                                        </h3>

                                        <p className="text-[#31535c] text-sm leading-relaxed">
                                            "{t(item.textKey)}"
                                        </p>
                                    </div>

                                    {/* STARS */}
                                    <div className="flex justify-center gap-1 text-yellow-400 text-lg mt-5">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                    {/* RIGHT */}
                    <button onClick={nextSlide} className="absolute right-0 z-10 bg-white w-9 h-9 md:w-11 md:h-11 rounded-full shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>

                </div>

                {/* DOTS */}
                <div className="flex justify-center gap-3 mt-10">
                    {Array.from({ length: testimonialsData.length - cardsPerView + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 cursor-pointer rounded-full ${current === index ? "bg-[#0e5063]" : "bg-gray-300"}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Testemunhos;