import { useState } from "react";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowRight,
    faChevronLeft,
    faChevronRight,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

import img01 from "../assets/fotos/01.jpg";
import img02 from "../assets/fotos/02.jpg";
import img03 from "../assets/fotos/03.jpg";
import img04 from "../assets/fotos/04.jpg";
import img05 from "../assets/fotos/05.jpg";
import img06 from "../assets/fotos/06.jpg";
import img07 from "../assets/fotos/07.jpg";
import img08 from "../assets/fotos/08.jpg";
import img09 from "../assets/fotos/09.jpg";
import img10 from "../assets/fotos/10.jpg";
import img11 from "../assets/fotos/11.jpg";
import img12 from "../assets/fotos/12.jpg";
import img13 from "../assets/fotos/13.jpg";
import img14 from "../assets/fotos/14.jpg";
import img15 from "../assets/fotos/15.jpg";
import img16 from "../assets/fotos/16.jpg";
import img17 from "../assets/fotos/17.jpg";
import img18 from "../assets/fotos/18.jpg";
import img19 from "../assets/fotos/19.jpg";
import img20 from "../assets/fotos/20.jpg";
import img21 from "../assets/fotos/21.jpg";
import img22 from "../assets/fotos/22.jpg";
import img23 from "../assets/fotos/23.jpg";
import img24 from "../assets/fotos/24.jpg";
import img25 from "../assets/fotos/25.jpg";
import img26 from "../assets/fotos/26.jpg";
import img27 from "../assets/fotos/27.jpg";
import img28 from "../assets/fotos/28.jpg";
import img29 from "../assets/fotos/29.jpg";
import img30 from "../assets/fotos/30.jpg";
import img31 from "../assets/fotos/31.jpg";
import img32 from "../assets/fotos/32.jpg";
import img33 from "../assets/fotos/33.jpg";
import img34 from "../assets/fotos/34.jpg";
import img35 from "../assets/fotos/35.jpg";
import img36 from "../assets/fotos/36.jpg";
import img37 from "../assets/fotos/37.jpg";

export default function GaleriaDeMomentos() {

  const { t } = useTranslation();

    /* =========================
       STATES DO CARROSSEL
    ========================== */
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const principalImages = [
        img06,
        img33,
        img02,
        img01,
        img10,
    ];

    const images = [
        img01,
        img02,
        img03,
        img04,
        img05,
        img06,
        img07,
        img08,
        img09,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
        img26,
        img27,
        img28,
        img29,
        img30,
        img31,
        img32,
        img33,
        img34,
        img35,
        img36,
        img37,
    ];

    /* =========================
           FUNÇÕES DO CARROSSEL
        ========================== */

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
        <section id="gallery" className="w-full bg-white flex flex-col items-center py-14 md:py-18 px-4">
            {/* Header */}
            <div className="max-w-6xl mx-auto text-center">
                <p className="subtitle gochi-hand-regular text-[#004d61] text-xs mb-1">
                    {t("gallery.subtitle")}
                </p>
                <h2 className="title text-[#004d61] text-2xl md:text-4xl font-bold tracking-tight uppercase mb-12">
                    {t("gallery.title")}
                </h2>
            </div>

            {/* Gallery */}
            <div className="relative w-full max-w-6xl flex justify-center items-center">
                <div className="flex items-center justify-center gap-[-40px]">
                    {principalImages.map((src, i) => (
                        <div
                            key={i}
                            className={`
                                    relative rounded-2xl overflow-hidden shadow-lg
                                    w-24 h-34 sm:w-42 sm:h-58 lg:w-80 lg:h-110
                                    transition-transform duration-300
                                     ${i === 2 ? "z-20 scale-100"
                                    : (i === 1 || i === 3) ? "z-10 scale-80"
                                        : "z-0 scale-60 opacity-90"}
                                    -ml-8 first:ml-0 md:-ml-14 md:first:ml-0 lg:-ml-28 lg:first:ml-0 hover:-translate-y-2 
              `}
                        >
                            <img
                                src={src}
                                alt={`gallery-${i}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Button */}
            <button className="btn-dark mt-8 md:mt-10 flex items-center pl-6 pr-1 py-2 border-2 rounded-full cursor-pointer transition-all duration-300 ease-out bg-[#0F4A5A] text-white gap-1 hover:shadow-xl hover:bg-[#072730] hover:scale-105 active:scale-95" onClick={() => openCarousel(images)}>
                <span className="text-sm md:text-base">
                    {t("gallery.button")}
                </span>
                <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    style={{
                        color: "#ffffff",
                        fontSize: "30px",
                    }}
                />
            </button>

            {/* =====================================
                MODAL / CARROSSEL
            ====================================== */}
            {isOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        z-50
                        flex
                        items-center
                        justify-center
                        bg-black/80
                        backdrop-blur-md
                        px-4
                    "
                >

                    {/* CLOSE */}
                    <button
                        onClick={closeCarousel}
                        className="
                            absolute
                            top-5
                            right-5
                            md:top-8
                            md:right-8
                            w-12
                            h-12
                            md:w-14
                            md:h-14
                            rounded-full
                            bg-white/10
                            hover:bg-white/20
                            text-white
                            transition-all
                            duration-300
                            backdrop-blur-sm
                            cursor-pointer
                        "
                    >
                        <FontAwesomeIcon
                            icon={faXmark}
                            className="text-2xl"
                        />
                    </button>

                    {/* LEFT */}
                    <button
                        onClick={prevSlide}
                        className="
                            absolute
                            left-6
                            md:left-8
                            mb-7
                            md:mb-6
                            w-12
                            h-12
                            md:w-14
                            md:h-14
                            rounded-full
                            bg-white/10
                            hover:bg-white/20
                            text-white
                            transition-all
                            duration-300
                            backdrop-blur-sm
                            cursor-pointer
                        "
                    >
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            className="text-xl"
                        />
                    </button>

                    {/* IMAGE */}
                    <div
                        className="
                            w-full
                            max-w-5xl
                            flex
                            flex-col
                            items-center
                            animate-[fadeIn_0.3s_ease]
                        "
                    >

                        <img
                            src={selectedImages[currentIndex]}
                            alt="Apartamento"
                            className="
                                w-full
                                h-[280px]
                                sm:h-[400px]
                                md:h-[550px]
                                object-cover
                                rounded-3xl
                                shadow-2xl
                                border
                                border-white/10
                            "
                        />

                        {/* DOTS */}
                        <div className="flex gap-2 mt-6">

                            {selectedImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`
                                        transition-all
                                        duration-300
                                        rounded-full
                                        cursor-pointer

                                        ${currentIndex === index
                                            ? "w-8 h-3 bg-white"
                                            : "w-3 h-3 bg-white/40 hover:bg-white/70"
                                        }
                                    `}
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <button
                        onClick={nextSlide}
                        className="
                            absolute
                            right-6
                            md:right-8
                            mb-7
                            md:mb-6
                            w-12
                            h-12
                            md:w-14
                            md:h-14
                            rounded-full
                            bg-white/10
                            hover:bg-white/20
                            text-white
                            transition-all
                            duration-300
                            backdrop-blur-sm
                            cursor-pointer
                        "
                    >
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className="text-xl"
                        />
                    </button>
                </div>
            )}

        </section>
    );
}