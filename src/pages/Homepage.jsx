import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import Sobre from "../components/Sobre"
import Alojamentos from "../components/Alojamentos"
import Restaurante from "../components/Restaurante"
import Piscina from "../components/Piscina"
import Testemunhos from "../components/Testemunhos"
import Galeria from "../components/Galeria"
import Contact from "../components/Contact"
import Preparado from "../components/Preparado"
import Footer from "../components/Footer"


function Homepage() {

  return (
    <div>
        <NavBar />
        <Hero />
        <Sobre />
        <Alojamentos />
        <Restaurante />
        <Piscina />
        <Testemunhos />
        <Galeria />
        <Contact />
        <Preparado />
        <Footer />
    </div>
  )

}

export default Homepage
