import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
    faWhatsapp,
    faFacebookF,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/logo.png";

import apt01 from "../assets/apt01.png";
import apt02 from "../assets/apt02.png";
import apt03 from "../assets/apt03.png";
import apt04 from "../assets/apt04.png";
import apt05 from "../assets/apt05.png";
import apt06 from "../assets/apt06.png";

const galleryImages = [
    apt01,
    apt02,
    apt03,
    apt04,
    apt05,
    apt06,
];

function Footer02() {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const goToSection = (sectionId) => {
        navigate("/");

        setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: "smooth",
            });
        }, 100);
    };

    const goToApartamentos = () => {
        navigate("/Apartamentos");

        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 50);
    };

    return (
        <footer className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 rounded-xl bg-[#ffffff] text-white pb-4 font-sans">

            {/* Conteúdo Principal */}
            <div className="bg-[#004d61] p-8 mx-auto text-center md:text-start grid grid-cols-1 md:grid-cols-3 gap-10 rounded-xl">

                {/* Coluna 1 */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-6">
                        {t("footer.contact")}
                    </h3>

                    <ul className="text-white space-y-4 text-sm opacity-80">
                        <li>{t("footer.location")}</li>
                        <li>+238 992 93 33</li>
                        <li>info@aquarioaparthouse.cv</li>
                    </ul>
                </div>

                {/* Coluna 2 - LINKS RÁPIDOS */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-6">
                        {t("footer.links")}
                    </h3>

                    <ul className="space-y-4 text-sm opacity-80">

                        <li className="text-white hover:translate-x-1 transition-transform cursor-pointer"
                            onClick={() => goToSection("house")}
                        >
                            {t("nav.Alojamentos")}
                        </li>

                        <li className="text-white hover:translate-x-1 transition-transform cursor-pointer"
                            onClick={() => goToSection("restaurant")}
                        >
                            {t("nav.Restaurante")}
                        </li>

                        <li className="text-white hover:translate-x-1 transition-transform cursor-pointer"
                            onClick={() => goToSection("pool")}
                        >
                            {t("nav.Piscina")}
                        </li>

                        <li className="text-white hover:translate-x-1 transition-transform cursor-pointer"
                            onClick={() => goToSection("reviews")}
                        >
                            {t("nav.Faqs")}
                        </li>

                        <li className="text-white hover:translate-x-1 transition-transform cursor-pointer"
                            onClick={() => goToSection("gallery")}
                        >
                            {t("nav.Galeria")}
                        </li>

                        <li className="text-white hover:translate-x-1 transition-transform cursor-pointer"
                            onClick={() => goToSection("contact")}
                        >
                            {t("nav.Contacto")}
                        </li>

                    </ul>
                </div>

                {/* Coluna 3 */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-6">
                        {t("footer.apartments")}
                    </h3>

                    <div
                        className="grid grid-cols-3 gap-2 cursor-pointer"
                        onClick={goToApartamentos}
                    >
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="aspect-square rounded-lg overflow-hidden group border-[#aaaaaa] border-2"
                            >
                                <img
                                    src={image}
                                    alt={`Apartamento ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Logo + Redes */}
            <div className="max-w-6xl px-4 mx-auto flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-start mt-10 gap-6">

                <div>
                    <a href="/">
                        <div className="bg-white inline-block rounded-sm cursor-pointer">
                            <img
                                src={logo}
                                alt="Logo Aquário Aparthouse"
                                className="h-12 rounded-xl object-cover"
                            />
                        </div>
                    </a>

                    <p className="text-[#004d61] text-sm md:text-justify leading-relaxed opacity-80 max-w-xs mt-2">
                        {t("footer.description")}
                    </p>
                </div>

                {/* Redes Sociais */}
                <div className="flex items-center gap-3">

                    <a
                        onClick={() => goToSection("contact")}
                        className="cursor-pointer hover:scale-105 transition-all"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#004d61", fontSize: "28px" }} />
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=100009400630194&locale=pt_BR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-105 transition-all"
                    >
                        <FontAwesomeIcon icon={faFacebookF} style={{ color: "#004d61", fontSize: "28px" }} />
                    </a>

                    <a
                        href="https://www.instagram.com/aquariohotelboavista?igsh=MWR2dGhlOG1lOGsydQ%3D%3D"
                        className="hover:scale-105 transition-all"
                    >
                        <FontAwesomeIcon icon={faInstagram} style={{ color: "#004d61", fontSize: "28px" }} />
                    </a>

                    <a
                        href="https://www.booking.com/hotel/cv/aquario.pt-br.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-xl text-[#004d61] hover:scale-105 transition-all"
                    >
                        Booking
                    </a>

                </div>
            </div>

            {/* Linha */}
            <div className="max-w-6xl mx-auto mt-6 px-4">
                <div className="h-px bg-[#004d61]/10 w-full"></div>
            </div>

            {/* Footer final */}
            <div className="flex flex-col text-center md:flex-row md:justify-between max-w-6xl mx-auto pt-4 md:px-4 text-xs opacity-60 text-[#004d61] gap-1">

                <p>{t("footer.rights")}</p>

                <p>
                    {t("footer.dev")}{" "}
                    <a
                        href="https://www.linkedin.com/in/elviopatrickdev"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                    >
                        Elvio Patrick
                    </a>
                </p>

            </div>
        </footer>
    );
}

export default Footer02;