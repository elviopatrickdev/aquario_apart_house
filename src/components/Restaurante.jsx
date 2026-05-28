import drink from "../assets/fotos/38.png";
import comida from "../assets/fotos/39.png";
import ambiente from "../assets/fotos/02.jpg";
import spaguetti from "../assets/spaguetti.png";
import martini from "../assets/martini.png";

import { useTranslation } from "react-i18next";

function Restaurante() {
    const { t } = useTranslation();

    return (
        <section
            id="restaurant"
            className="bg-[#e0f0f4] py-10 lg:p-16 flex flex-col-reverse lg:flex-row items-center gap-12 w-full lg:max-w-6xl py-12 px-6 md:py-20 mx-auto rounded-3xl"
        >
            {/* IMAGENS */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full md:w-2/3 lg:w-1/2">
                <div className="rounded-tl-[100px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] overflow-hidden h-40 md:h-60">
                    <img src={comida} alt="food" className="w-full h-full object-cover" />
                </div>

                <div className="rounded-tl-[20px] rounded-tr-[100px] rounded-br-[20px] rounded-bl-[20px] overflow-hidden h-40 md:h-60">
                    <img src={drink} alt="drink" className="w-full h-full object-cover" />
                </div>

                <div className="col-span-2 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[100px] rounded-bl-[100px] overflow-hidden h-40 md:h-60">
                    <img src={ambiente} alt="restaurant ambiance" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* TEXTO */}
            <div className="w-full lg:w-1/2 text-center lg:text-start flex flex-col gap-6">

                <div>
                    <p className="subtitle gochi-hand-regular text-[#004d61] text-xs mb-1">
                        {t("restaurant.subtitle")}
                    </p>

                    <h1 className="title text-[#004d61] text-2xl md:text-4xl font-bold tracking-tight uppercase">
                        {t("restaurant.title")}
                    </h1>
                </div>

                <p className="max-w-5xl mx-auto text-[#004d61] text-sm md:text-base leading-relaxed text-justify">
                    {t("restaurant.description")}
                </p>

                {/* DESTAQUES */}
                <div className="flex lg:flex-col gap-4 mx-auto lg:mx-0">

                    <div className="flex items-center gap-2">
                        <img src={spaguetti} className="w-16 rounded-full object-contain" />
                        <span className="text-[#1a5f6b] font-semibold text-[12px] md:text-sm">
                            {t("restaurant.feature1")}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src={martini} className="w-16 rounded-full object-contain" />
                        <span className="text-[#1a5f6b] font-semibold text-[12px] md:text-sm">
                            {t("restaurant.feature2")}
                        </span>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Restaurante;