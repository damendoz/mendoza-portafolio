import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Proyectos } from "@/components/Proyectos";
import { Experiencia } from "@/components/Experiencia";
import { Stack } from "@/components/Stack";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";

export default function Portafolio() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Proyectos />
        <Experiencia />
        <Stack />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
