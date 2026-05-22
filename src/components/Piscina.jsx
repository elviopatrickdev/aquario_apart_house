import piscina01 from "../assets/piscina01.png";
import piscina02 from "../assets/fotos/05.jpg";
import piscinaHomem from "../assets/piscinaHomem.png";

import { useTranslation } from "react-i18next";

function Piscina() {
    const { t } = useTranslation();

    return (
        <section id="pool" className="relative max-w-lg md:max-w-2xl lg:max-w-6xl mx-auto mt-1 p-6 font-sans">

            <div className="flex flex-col lg:flex-row gap-12 items-center">

                {/* ESQUERDA */}
                <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-start mt-10 lg:mt-20">

                    {/* HEADER */}
                    <header>
                        <p className="subtitle gochi-hand-regular text-[#004d61] text-xs mb-1">
                            {t("pool.subtitle")}
                        </p>

                        <h1 className="title text-[#004d61] text-2xl md:text-4xl font-bold tracking-tight uppercase">
                            {t("pool.title")}
                        </h1>
                    </header>

                    {/* DESCRIÇÃO */}
                    <p className="max-w-5xl mx-auto text-[#004d61] text-sm md:text-base leading-relaxed text-justify">
                        {t("pool.description")}
                    </p>

                    {/* IMAGENS BAIXO */}
                    <div className="flex items-start gap-6 pt-1">

                        {/* homem */}
                        <div className="relative w-1/2 overflow-hidden flex items-center lg:ml-2">
                            <img
                                src={piscinaHomem}
                                alt="relax"
                                className="object-cover h-40 md:h-80 z-20"
                            />
                            <div className="absolute bg-[#e0f0f4] h-30 w-30 md:h-55 md:w-55 rounded-full bottom-4 md:bottom-10 z-10" />
                        </div>

                        {/* piscina noite */}
                        <div className="w-1/2">
                            <img
                                src={piscina02}
                                alt="pool night"
                                className="rounded-tl-[20px] rounded-tr-[60px] rounded-br-[20px] rounded-bl-[60px] w-60 h-36 md:h-60 object-cover"
                            />
                        </div>

                    </div>
                </div>

                {/* DIREITA */}
                <div className="w-full lg:w-1/2 relative">
                    <div className="rounded-tl-[20px] rounded-tr-[60px] rounded-br-[20px] rounded-bl-[60px] overflow-hidden">
                        <img
                            src={piscina01}
                            alt="main pool"
                            className="w-full h-80 md:h-136 object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Piscina;