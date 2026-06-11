import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../assets/logo.png";
import NavLinks02 from "./NavLinks02";

function NavBar02() {
  const { i18n, t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const languageRef = useRef(null);

  const languages = [
    { code: "pt", label: "Português", flag: "fi fi-pt" },
    { code: "en", label: "English", flag: "fi fi-gb" },
    { code: "fr", label: "Français", flag: "fi fi-fr" },
    { code: "it", label: "Italiano", flag: "fi fi-it" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Fecha ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        languageRef.current &&
        !languageRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-5 left-0 right-0 px-4 sm:px-6 lg:px-10 mx-auto z-50">
      <div className="bg-white rounded-full backdrop-blur-md shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-2 py-2 flex items-center justify-between">

          {/* Logo */}
          <a href="/">
            <img src={logo} alt="Logo" className="h-12 sm:h-10 lg:ml-4" />
          </a>

          {/* Menu desktop */}
          <div className="hidden absolute left-1/2 transform -translate-x-1/2 lg:flex justify-between items-center gap-8">
            <NavLinks02
              className="link-nav text-sm whitespace-nowrap hover:text-[#0F4A5A] hover:scale-105 transform transition-transform duration-300 ease-out cursor-pointer"
            />
          </div>

          {/* Right side */}
          <div className="flex items-center">

            {/* Language Switcher Desktop */}
            <div ref={languageRef} className="relative hidden lg:flex items-center">
              <button
                onClick={() => setIsLanguageOpen((prev) => !prev)}
                className="flex items-center gap-1 px-4 py-3 hover:text-[#0F4A5A] transition-all duration-300 bg-white hover:scale-105 cursor-pointer"
              >
                <span
                  className={`${currentLanguage.flag}`}
                  style={{ width: "22px", height: "16px", display: "inline-block" }}
                />

                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isLanguageOpen ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isLanguageOpen && (
                <div className="absolute top-14 right-0 bg-white border border-gray-200 rounded-2xl shadow-xl p-2 min-w-[220px] z-50 animate-fade-in">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 ${i18n.language === lang.code ? "bg-gray-100" : ""
                        }`}
                    >
                      <span
                        className={lang.flag}
                        style={{ width: "22px", height: "16px", display: "inline-block" }}
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {lang.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* LINK RESERVA DESKTOP */}
            <a
              href="https://reservas.quartoverde.pt/aquario-hotel/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark hidden items-center rounded-full border-2 bg-[#0F4A5A] px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#072730] lg:flex"
              onClick={() => setIsOpen(false)}
            >
              {t("Fazer Reserva")}
            </a>

            {/* MOBILE RIGHT SIDE */}
            <div className="lg:hidden flex items-center gap-2">

              {/* Language Switcher Mobile */}
              <div ref={languageRef} className="relative flex items-center">
                <button
                  onClick={() => setIsLanguageOpen((prev) => !prev)}
                  className="flex items-center gap-1 px-3 py-2 bg-white hover:text-[#0F4A5A] transition-all duration-300 cursor-pointer"
                >
                  <span
                    className={currentLanguage.flag}
                    style={{ width: "22px", height: "16px", display: "inline-block" }}
                  />

                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isLanguageOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isLanguageOpen && (
                  <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-2xl shadow-xl p-2 min-w-[220px] z-50 animate-fade-in">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          i18n.changeLanguage(lang.code);
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 ${i18n.language === lang.code ? "bg-gray-100" : ""
                          }`}
                      >
                        <span
                          className={lang.flag}
                          style={{ width: "22px", height: "16px", display: "inline-block" }}
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {lang.label}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Hamburger */}
              <button
                ref={buttonRef}
                className="text-2xl w-8 flex justify-center focus:outline-none transition-all duration-300 hover:scale-105"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {isOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          ref={menuRef}
          className="lg:hidden absolute right-4 w-64 top-full mt-1 px-6 py-4 space-y-4 bg-white shadow-lg rounded-lg animate-fade-in z-50"
        >
          <NavLinks02
            className="block link-nav-mobile mb-3 border-b border-gray-200"
            onClick={handleLinkClick}
          />

          <Link
            className="text-sm flex items-center justify-center px-7 py-3 border-2 rounded-full bg-[#0F4A5A] text-white font-semibold hover:shadow-xl active:scale-95"
            to="/"
            onClick={() => {
              setIsOpen(false);
              setTimeout(() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }, 100);
            }}
          >
            {t("Fazer Reserva")}
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar02;