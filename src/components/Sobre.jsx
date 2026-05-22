import bed from "../assets/bed.png";
import food from "../assets/food.png";
import pool from "../assets/pool.png";
import wifi from "../assets/wi-fi.png";
import actv from "../assets/ac-tv.png";
import walk from "../assets/walk.png";

import { useTranslation } from "react-i18next";

function Sobre() {
    const { t } = useTranslation();

    return (
        <section id="about" className="w-full py-12 px-6 md:py-20 bg-white flex flex-col items-center text-center">

            {/* Cabeçalho */}
            <div className="max-w-4xl mx-auto mb-6">
                <p className="subtitle gochi-hand-regular text-[#004d61] text-sm mb-1">
                    {t("about.subtitle")}
                </p>

                <h2 className="title text-[#004d61] text-2xl md:text-4xl font-bold tracking-tight uppercase">
                    {t("about.title")}
                </h2>
            </div>

            {/* Texto Principal */}
            <div className="max-w-5xl mx-auto space-y-8 text-[#004d61] leading-relaxed">

                <p className="text-sm md:text-base">
                    {t("about.text1_part1")}{" "}
                    <span className="font-bold">Aquário Apart House</span>
                    {t("about.text1_part2")}
                </p>

                <p className="text-sm md:text-base">
                    {t("about.text2")}
                </p>

                <p className="text-md md:text-lg font-bold italic pt-4">
                    {t("about.highlight")}
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10 w-full max-w-6xl">

                <Feature img={bed} text={t("about.feature1")} />
                <Feature img={food} text={t("about.feature2")} />
                <Feature img={pool} text={t("about.feature3")} />
                <Feature img={wifi} text={t("about.feature4")} />
                <Feature img={actv} text={t("about.feature5")} />
                <Feature img={walk} text={t("about.feature6")} />

            </div>
        </section>
    );
}

function Feature({ img, text }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-18 h-18 flex-shrink-0">
                <img src={img} alt="" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-[#004d61] font-semibold text-sm leading-tight uppercase text-center">
                {text}
            </h3>
        </div>
    );
}

export default Sobre;