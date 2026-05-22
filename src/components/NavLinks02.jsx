import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavLinks02({ className = "" }) {
  const { t } = useTranslation();

  const links = [
    { label: t("nav.Início"), path: "/", hash: "" },
    { label: t("nav.Sobre"), path: "/", hash: "#about" },
    { label: t("nav.Alojamentos"), path: "/", hash: "#house" },
    { label: t("nav.Restaurante"), path: "/", hash: "#restaurant" },
    { label: t("nav.Piscina"), path: "/", hash: "#pool" },
    { label: t("nav.Faqs"), path: "/", hash: "#reviews" },
    { label: t("nav.Galeria"), path: "/", hash: "#gallery" },
    { label: t("nav.Contacto"), path: "/", hash: "#contact" },
  ];

  const handleClick = (hash) => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setTimeout(() => {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.label}
          className={className}
          to={{ pathname: link.path, hash: link.hash }}
          onClick={() => handleClick(link.hash)}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}

export default NavLinks02;