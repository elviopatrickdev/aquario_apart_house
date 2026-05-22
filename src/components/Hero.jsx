import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="relative w-full mx-auto overflow-hidden">
      <div className="hero h-full flex flex-col justify-between p-6 sm:p-12 xl:p-16 z-0 text-center">

        {/* Texto Hero */}
        <div className="flex items-center h-screen mx-auto">
          <div className="z-30">

            {/* TÍTULO */}
            <h1
              className="text-2xl md:text-5xl lg:text-5xl font-bold text-white"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.4)" }}
            >
              {t("hero_title_line1")} <br />
              {t("hero_title_line2")}
            </h1>

            {/* DESCRIÇÃO */}
            <p
              className="text-sm md:text-xl lg:text-base text-white mb-2 md:mb-6"
              style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.4)" }}
            >
              {t("hero_description_line1")} <br />
              {t("hero_description_line2")}
            </p>

            {/* BOTÃO */}
            <button
              className="btn-light mx-auto mt-4 text-sm font-medium flex items-center pl-6 pr-1 py-2 rounded-full cursor-pointer transition-all duration-300 ease-out bg-[#199EA7] text-white gap-1 hover:shadow-xl hover:bg-[#158A99] hover:scale-105 active:scale-95"
              onClick={() => navigate("/Apartamentos")}
            >
              <span className="font-regular text-base">
                {t("hero_button")}
              </span>

              <FontAwesomeIcon
                icon={faCircleArrowRight}
                style={{
                  color: "#ffffff",
                  fontSize: "30px",
                }}
              />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;