import { useTranslation } from "react-i18next";
import preparado from "../assets/preparado.png";

function Preparado() {
    const { t } = useTranslation();

    return (
        <section
            className="
        relative
        mx-4 md:mx-auto
        max-w-lg md:max-w-2xl lg:max-w-6xl
        mb-12 md:mb-8
        h-[180px] md:h-[260px]
        overflow-hidden
        rounded-3xl
        font-sans
      "
        >
            {/* Imagem de Fundo */}
            <div
                className="absolute inset-0 bg-cover bg-center brightness-65"
                style={{
                    backgroundImage: `url(${preparado})`,
                }}
            />

            {/* Conteúdo */}
            <div
                className="
          relative z-10
          flex h-full flex-col
          items-center md:items-start
          justify-center
          px-6 md:px-10
          text-white text-center md:text-left
        "
            >
                <h1
                    className="
            text-lg md:text-3xl
            font-semibold
          "
                >
                    {t("cta.title")}
                </h1>

                <p
                    className="
            mt-1
            text-xs md:text-xl
            font-medium
            opacity-90
          "
                >
                    {t("cta.subtitle")}
                </p>

                {/* LINK RESERVA */}
                <a
                    href="https://reservas.quartoverde.pt/aquario-hotel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            mt-4 md:mt-6
            inline-flex items-center justify-center
            rounded-full
            bg-white
            px-6 py-2 md:px-8 md:py-3
            text-sm
            font-medium
            text-[#0F4A5A]
            transition-all duration-300
            hover:scale-105
            hover:bg-[#f1f1f1]
            active:scale-95
            shadow-md
          "
                >
                    {t("Fazer Reserva")}
                </a>
            </div>
        </section>
    );
}

export default Preparado;