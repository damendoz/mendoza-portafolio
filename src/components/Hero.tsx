import { perfil } from "@/content/perfil";
import { IconoCorreo, IconoGitHub, IconoLinkedIn } from "./Iconos";

export function Hero() {
  const { enlaces } = perfil;
  return (
    <section id="inicio" className="mx-auto max-w-5xl px-6 pt-24 pb-16 md:pt-36 md:pb-24">
      <p className="mb-4 font-mono text-sm text-acento">Hola, soy</p>
      <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl">
        {perfil.nombre}
      </h1>
      <p className="mt-3 text-xl text-tinta-suave md:text-2xl">{perfil.titular}</p>

      <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-tinta-suave">
        {perfil.intro.map((parrafo) => (
          <p key={parrafo.slice(0, 32)}>{parrafo}</p>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${enlaces.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-acento px-5 py-2.5 text-sm font-medium text-fondo transition-opacity hover:opacity-90"
        >
          <IconoCorreo className="h-4 w-4" />
          Escríbeme
        </a>
        <a
          href={enlaces.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-borde px-5 py-2.5 text-sm text-tinta-suave transition-colors hover:border-tinta-tenue hover:text-tinta"
        >
          <IconoGitHub className="h-4 w-4" />
          GitHub
        </a>
        {enlaces.linkedin && (
          <a
            href={enlaces.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-borde px-5 py-2.5 text-sm text-tinta-suave transition-colors hover:border-tinta-tenue hover:text-tinta"
          >
            <IconoLinkedIn className="h-4 w-4" />
            LinkedIn
          </a>
        )}
        {perfil.ubicacion && (
          <span className="px-2 font-mono text-sm text-tinta-tenue">{perfil.ubicacion}</span>
        )}
      </div>
    </section>
  );
}
