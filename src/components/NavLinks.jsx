import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

function NavLinks({ className = "" }) {
  const { t } = useTranslation();

  return (
    <>
      <Link
        className={className}
        smooth
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {t("nav.Início")}
      </Link>

      <Link className={className} smooth to="/#about">
        {t("nav.Sobre")}
      </Link>

      <Link className={className} smooth to="/#house">
        {t("nav.Alojamentos")}
      </Link>

      <Link className={className} smooth to="/#restaurant">
        {t("nav.Restaurante")}
      </Link>

      <Link className={className} smooth to="/#pool">
        {t("nav.Piscina")}
      </Link>

      <Link className={className} smooth to="/#reviews">
        {t("nav.Faqs")}
      </Link>

      <Link className={className} smooth to="/#gallery">
        {t("nav.Galeria")}
      </Link>

      <Link className={className} smooth to="/#contact">
        {t("nav.Contacto")}
      </Link>
    </>
  );
}

export default NavLinks;