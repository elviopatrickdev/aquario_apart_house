import { useState } from "react";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import MapComponent from "./MapComponent";
import apartHouse from "../assets/fotos/04.jpg";

function Contact() {

    const { t } = useTranslation();

    const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, phone, message } = formData;

        // Número que vai receber a mensagem (SEU número com código do país)
        const whatsappNumber = "2389929333";

        // Monta a mensagem
        const text = `${t("contact.whatsappMessage")}
                    ${t("contact.name")}: ${name}
                    ${t("contact.phone")}: ${phone}
                    ${t("contact.message")}: ${message}`;

        // Codifica para URL
        const encodedText = encodeURIComponent(text);

        // Link do WhatsApp
        const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

        // Abre o WhatsApp
        window.open(url, "_blank");

        // Reset do formulário
        setFormData({
            name: "",
            phone: "",
            message: ""
        });
    };

    return (
        <section id="contact" className="bg-white p-6 md:pb-12 lg:pb-24 font-sans text-[#1a3a3a]">
            {/* Header */}
            <header className="max-w-6xl mx-auto text-center lg:text-start">
                <p className="subtitle gochi-hand-regular text-[#004d61] text-xs mb-1">
                    {t("contact.subtitle")}
                </p>
                <h1 className="title text-[#004d61] text-2xl md:text-4xl font-bold tracking-tight uppercase mb-8">
                    {t("contact.title")}
                </h1>
            </header>

            <div className="max-w-lg md:max-w-2xl lg:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Coluna da Esquerda: Formulário WhatsApp */}
                <div className="order-2 lg:order-1 mt-0 lg:mt-12">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <h2 className="text-2xl text-[#004d61] font-bold flex items-center">
                            <FontAwesomeIcon
                                icon={faWhatsapp}
                                style={{
                                    color: "#004d61",
                                    fontSize: "36px",
                                    marginTop: "2px",
                                }}
                            />
                            WhatsApp
                        </h2>
                    </div>
                    <p className="text-center font-semibold mb-6 text-sm">
                        {t("contact.subtitleForm")}
                    </p>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-xs font-bold mb-2">{t("contact.name")}</label>
                            <input
                                id="name"
                                autoComplete="name"
                                type="text"
                                name="name"
                                placeholder={t("contact.placeholders.name")}
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#1a3a3a] outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-xs font-bold mb-2">{t("contact.phone")}</label>
                            <input
                                id="phone"
                                autoComplete="tel"
                                type="tel"
                                name="phone"
                                placeholder={t("contact.placeholders.phone")}
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#1a3a3a] outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs font-bold mb-2">{t("contact.message")}</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder={t("contact.placeholders.message")}
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#1a3a3a] outline-none"
                                required
                            ></textarea>

                            <p className="text-xs text-gray-500 text-center leading-relaxed">
                                {t("contact.helperText")}
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <button
                                className="btn-dark text-sm lg:flex items-center px-8 py-3 border-2 rounded-full cursor-pointer transition-all duration-300 ease-out bg-[#0F4A5A] text-white hover:shadow-xl hover:bg-[#072730] hover:scale-105 active:scale-95"
                                type="submit"
                            >
                                <span className="text-sm md:text-base">
                                    {t("contact.send")}
                                    <FontAwesomeIcon
                                        icon={faPaperPlane}
                                        style={{
                                            color: "#ffffff",
                                            fontSize: "18px",
                                            transform: "rotate(45deg)",
                                            marginLeft: "5px"
                                        }}
                                    />
                                </span>
                            </button>
                        </div>
                    </form>
                </div>

                {/* Coluna da Direita: Imagens */}
                <section className="order-1 lg:order-2 space-y-4">
                    {/* Imagem do Prédio/Logo */}
                    <div className="rounded-[2rem] overflow-hidden shadow-lg aspect-video bg-gray-100">
                        <img
                            src={apartHouse}
                            alt="Aquário Aparthouse"
                            className="w-full h-full object-bottom object-cover"
                        />
                    </div>

                    {/* Imagem do Mapa */}
                    <div className="rounded-[2rem] overflow-hidden shadow-lg aspect-square lg:aspect-video bg-gray-100 border-4 border-white">
                        <div className="rounded-xl overflow-hidden w-full h-[60vh] md:h-[100vh] lg:h-[450px]">
                            <MapComponent
                                address="Ilha da Boavista, Cabo Verde"
                                height="100%"
                            />
                        </div>
                    </div>
                </section>

            </div>
        </section>
    );
};

export default Contact;