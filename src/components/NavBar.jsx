import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

import logo from "../assets/logo.png";
import NavLinks from "./NavLinks";

function NavBar() {
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

  // ✅ FECHAR MENU (corrigido para iOS + Safari)
  const handleLinkClick = () => {
    setIsOpen(false);

    requestAnimationFrame(() => {
      document.body.style.overflow = "auto";
    });
  };

  // ✅ FECHA AO MUDAR HASH (FIX PRINCIPAL IPAD/MOBILE)
  useEffect(() => {
    const handleHashChange = () => {
      setIsOpen(false);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Fecha menus ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }

      if (
        languageRef.current &&
        !languageRef.current.contains(event.target)
      ) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleReservationClick = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-5 left-0 right-0 px-4 sm:px-6 lg:px-10 mx-auto z-50">
      <div className="bg-white rounded-full backdrop-blur-md shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-2 py-2 flex items-center justify-between">

          {/* Logo */}
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="h-12 sm:h-10 lg:ml-4"
            />
          </a>

          {/* Menu desktop */}
          <div className="hidden absolute left-1/2 transform -translate-x-1/2 lg:flex justify-between items-center gap-8">
            <NavLinks className="link-nav text-sm whitespace-nowrap hover:text-[#0F4A5A] hover:scale-105 transform transition-transform duration-300 ease-out cursor-pointer" />
          </div>

          {/* Right side desktop */}
          <div className="flex items-center gap-3">

            {/* Language Switcher Desktop */}
            <div
              ref={languageRef}
              className="relative hidden lg:flex items-center"
            >
              <button
                onClick={() => setIsLanguageOpen((prev) => !prev)}
                className="flex items-start gap-1 px-4 py-3 hover:border-[#0F4A5A] transition-all duration-300 bg-white hover:text-[#0F4A5A] hover:scale-105 transform transition-transform duration-300 ease-out cursor-pointer"
              >
                <span
                  className={`${currentLanguage.flag} text-lg`}
                  style={{ width: "22px", height: "16px", display: "inline-block" }}
                />

                <svg
                  className={`w-4 h-4 relative transition-transform duration-300 ${isLanguageOpen ? "rotate-180" : ""
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

              {/* Dropdown */}
              {isLanguageOpen && (
                <div className="absolute top-14 right-0 bg-white border border-gray-200 rounded-2xl shadow-xl p-2 min-w-[220px] z-50 animate-fade-in">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200  cursor-pointer hover:bg-gray-100 ${i18n.language === lang.code
                        ? "bg-gray-100"
                        : ""
                        }`}
                    >
                      <span
                        className={`${lang.flag}`}
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

            {/* Reservation button desktop */}
            <button
              className="btn-dark text-sm font-medium hidden lg:flex items-center px-8 py-3 border-2 rounded-full cursor-pointer transition-all duration-300 ease-out bg-[#0F4A5A] text-white hover:shadow-xl hover:bg-[#072730] hover:scale-105 active:scale-95"
              onClick={handleReservationClick}
            >
              {t("Fazer Reserva")}
            </button>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                ref={buttonRef}
                className="text-2xl ml-4 w-8 flex justify-center focus:outline-none transition-all duration-300 ease-out hover:shadow-xl active:scale-95"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {isOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="lg:hidden absolute right-4 w-64 top-full mt-2 px-6 py-4 bg-white shadow-lg rounded-3xl z-50"
          onClick={(e) => {
            // fecha quando clicar em qualquer link
            if (e.target.tagName === "A" || e.target.closest("a")) {
              setIsOpen(false);
              document.body.style.overflow = "auto";
            }
          }}
        >
          <NavLinks
            className="block link-nav-mobile mb-3 border-b border-gray-200"
            onClick={handleLinkClick}
          />

          {/* Language Switcher Mobile */}
          <div className="pb-3 border-b border-gray-200">
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border transition-all duration-300 ${i18n.language === lang.code
                    ? "bg-[#0F4A5A] text-white border-[#0F4A5A]"
                    : "border-gray-200 hover:border-[#0F4A5A]"
                    }`}
                >
                  <span
                    className={`${lang.flag}`}
                    style={{ width: "22px", height: "16px", display: "inline-block" }}
                  />

                  <span className="text-sm font-medium">
                    {lang.code.toUpperCase()}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Reservation button mobile */}
          <button
            className="reserva text-sm w-full flex items-center px-7 py-3 border-2 rounded-full cursor-pointer transition-all duration-300 ease-out bg-[#0F4A5A] text-white justify-center font-semibold hover:shadow-xl active:scale-95"
            onClick={handleReservationClick}
          >
            {t("Fazer Reserva")}
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;