import { perfil } from "@/content/perfil";
import { IconoCorreo, IconoGitHub, IconoLinkedIn } from "./Iconos";
import { Seccion } from "./Seccion";

export function Contacto() {
  const { enlaces } = perfil;
  return (
    <Seccion id="contacto" numero="04" titulo="Contacto">
      <div className="rounded-2xl border border-borde bg-panel p-8 md:p-12">
        <p className="max-w-2xl text-lg leading-relaxed text-tinta-suave">
          Si quieres hablar de producto con IA, de agentes en producción o de una
          oportunidad concreta, escríbeme. Respondo.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${enlaces.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-acento px-5 py-2.5 text-sm font-medium text-fondo transition-opacity hover:opacity-90"
          >
            <IconoCorreo className="h-4 w-4" />
            {enlaces.email}
          </a>
          <a
            href={enlaces.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Daniel Mendoza"
            className="inline-flex items-center gap-2 rounded-full border border-borde px-5 py-2.5 text-sm text-tinta-suave transition-colors hover:border-tinta-tenue hover:text-tinta"
          >
            <IconoGitHub className="h-4 w-4" />
            damendoz
          </a>
          {enlaces.linkedin && (
            <a
              href={enlaces.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Daniel Mendoza"
              className="inline-flex items-center gap-2 rounded-full border border-borde px-5 py-2.5 text-sm text-tinta-suave transition-colors hover:border-tinta-tenue hover:text-tinta"
            >
              <IconoLinkedIn className="h-4 w-4" />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </Seccion>
  );
}
