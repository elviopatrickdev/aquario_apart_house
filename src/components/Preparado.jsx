import { useTranslation } from "react-i18next";
import preparado from '../assets/preparado.png';

function Preparado() {

    const { t } = useTranslation();

    return (
        <section className="
            relative
            mx-4 md:mx-auto
            max-w-lg md:max-w-2xl lg:max-w-6xl
            mb-12 md:mb-8
            h-[140px] md:h-[260px]
            overflow-hidden
            rounded-3xl
            font-sans
        ">
            {/* Imagem de Fundo */}
            <div
                className="absolute inset-0 bg-cover bg-center brightness-65"
                style={{
                    backgroundImage: `url(${preparado})`
                }}
            />

            {/* Conteúdo */}
            <div className="
                relative
                flex flex-col
                justify-start
                mt-6 md:mt-10
                px-6 md:px-10
                text-white text-center md:text-left
            ">
                <h1 className="
                    text-lg md:text-3xl
                    font-semibold
                ">
                    {t("cta.title")}
                </h1>

                <p className="
                    text-xs md:text-xl
                    font-medium
                    opacity-90
                ">
                    {t("cta.subtitle")}
                </p>
            </div>
        </section>
    );
}

export default Preparado;