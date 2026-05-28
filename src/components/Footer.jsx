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

function Footer() {

    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <footer className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 rounded-xl bg-[#ffffff] text-white pb-4 font-sans">

            {/* Conteúdo Principal */}
            <div className="bg-[#004d61] p-8 mx-auto text-center md:text-start grid grid-cols-1 md:grid-cols-3 gap-10 rounded-xl">

                {/* Coluna 1: Contacto */}
                <div>
                    <div className="text-white text-lg font-semibold mb-6">
                        <h3>{t("footer.contact")}</h3>
                    </div>

                    <ul className="text-white space-y-4 text-sm opacity-80">
                        <li>{t("footer.location")}</li>
                        <li>+238 992 93 33</li>
                        <li>info@aquarioaparthouse.cv</li>
                    </ul>
                </div>

                {/* Coluna 2: Links */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-6">
                        {t("footer.links")}
                    </h3>

                    <ul className="space-y-4 text-sm opacity-80">
                        <li className="text-white hover:translate-x-1 transition-transform cursor-pointer">
                            <a href="#house" className="text-white cursor-pointer">
                                {t("nav.Alojamentos")}
                            </a>
                        </li>

                        <li className="text-white hover:translate-x-1 transition-transform cursor-pointer">
                            <a href="#restaurant" className="text-white cursor-pointer">
                                {t("nav.Restaurante")}
                            </a>
                        </li>

                        <li className="text-white hover:translate-x-1 transition-transform cursor-pointer">
                            <a href="#pool" className="text-white cursor-pointer">
                                {t("nav.Piscina")}
                            </a>
                        </li>

                        <li className="text-white hover:translate-x-1 transition-transform cursor-pointer">
                            <a href="#reviews" className="text-white cursor-pointer">
                                {t("nav.Faqs")}
                            </a>
                        </li>

                        <li className="text-white hover:translate-x-1 transition-transform cursor-pointer">
                            <a href="#gallery" className="text-white cursor-pointer">
                                {t("nav.Galeria")}
                            </a>
                        </li>

                        <li className="text-white hover:translate-x-1 transition-transform cursor-pointer">
                            <a href="#contact" className="text-white cursor-pointer">
                                {t("nav.Contacto")}
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Coluna 3: Galeria */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-6">
                        {t("footer.apartments")}
                    </h3>

                    <div className="grid grid-cols-3 gap-2" onClick={() => navigate("/Apartamentos")}>
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="aspect-square rounded-lg overflow-hidden group border-[#aaaaaa] border-2"
                            >
                                <img
                                    src={image}
                                    alt={`Apartamento ${index + 1}`}
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        transition-transform
                                        duration-300
                                        group-hover:scale-110
                                        cursor-pointer
                                    "
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Logo + Redes */}
            <div className="max-w-6xl px-4 mx-auto flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-start mt-10 gap-6">

                {/* Logo e Texto */}
                <div>
                    <a href="#">
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
                        href="#contact"
                        className="cursor-pointer hover:opacity-80 transition-all hover:scale-105 active:scale-95">
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                            style={{
                                color: "#004d61",
                                fontSize: "28px",
                            }}
                        />
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=100009400630194&locale=pt_BR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:opacity-80 transition-all hover:scale-105 active:scale-95">
                        <FontAwesomeIcon
                            icon={faFacebookF}
                            style={{
                                color: "#004d61",
                                fontSize: "28px",
                            }}
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/aquariohotelboavista?igsh=MWR2dGhlOG1lOGsydQ%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:opacity-80 transition-all hover:scale-105 active:scale-95">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            style={{
                                color: "#004d61",
                                fontSize: "28px",
                            }}
                        />
                    </a>

                    <a
                        href="https://www.booking.com/hotel/cv/aquario.pt-br.html?aid=2311236&label=en-pt-booking-desktop-LgkRzINVlwluLCo6wXwnzwS652796017581%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp1011720%3Ali%3Adec%3Adm&sid=dd8ce7929f8f81f465603799fe05e172&dist=0&group_adults=1&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=distance_from_search&srepoch=1778822426&srpvid=9fa7258a1a340aeb&type=total&ucfs=1&"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 font-bold text-xl cursor-pointer hover:opacity-80 transition-all text-[#004d61] hover:scale-105 active:scale-95">
                        Booking
                    </a>
                </div>
            </div>

            {/* Linha Horizontal */}
            <div className="max-w-6xl mx-auto mt-6 px-4">
                <div className="h-px bg-[#004d61]/10 w-full"></div>
            </div>

            {/* Rodapé Inferior */}
            <div className="flex flex-col text-center md:flex-row md:justify-between max-w-6xl mx-auto pt-4 md:px-4 text-xs opacity-60 text-[#004d61] gap-1">

                <p>
                    {t("footer.rights")}
                </p>

                <p>
                    {t("footer.dev")}{" "}
                    <a href="https://www.linkedin.com/in/elviopatrickdev" target="_blank" rel="noreferrer" className="underline cursor-pointer">
                        Elvio Patrick
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;