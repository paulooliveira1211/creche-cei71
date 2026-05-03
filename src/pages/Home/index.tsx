import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Diferenciais from "./components/Diferenciais";
import Estrutura from "./components/Estrutura";
import Galeria from "./components/Galeria";
import CTA from "./components/CTA";
import ContatoResumo from "./components/ContatoResumo";
import Footer from "./components/Footer";
import Confianca from "./components/Confiança";
import Depoimento from "./components/Depoimento";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Confianca />
      <Diferenciais />
      <Estrutura />
      <Galeria />
      <Depoimento />
      <CTA />
      <ContatoResumo />
      <Footer />
    </>
  );
}