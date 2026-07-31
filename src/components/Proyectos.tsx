import { destacados, restantes } from "@/content/proyectos";
import type { EstadoProyecto, Proyecto } from "@/content/tipos";
import { Seccion } from "./Seccion";
import { IconoFlecha } from "./Iconos";

const ESTADOS: Record<EstadoProyecto, { texto: string; clase: string }> = {
  produccion: { texto: "En producción", clase: "text-emerald-300" },
  piloto: { texto: "Piloto", clase: "text-amber-300" },
  interno: { texto: "Uso interno", clase: "text-sky-300" },
  desarrollo: { texto: "En desarrollo", clase: "text-zinc-400" },
  legado: { texto: "Legado", clase: "text-violet-300" },
};

function Estado({ estado, etiqueta }: { estado: EstadoProyecto; etiqueta?: string }) {
  const { texto, clase } = ESTADOS[estado];
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-xs ${clase}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {etiqueta ?? texto}
    </span>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-borde px-2.5 py-1 font-mono text-xs text-tinta-suave"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Enlaces({ proyecto }: { proyecto: Proyecto }) {
  if (proyecto.enlaces?.length) {
    return (
      <div className="flex flex-wrap gap-4">
        {proyecto.enlaces.map((enlace) => (
          <a
            key={enlace.url}
            href={enlace.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-acento transition-colors hover:text-acento-suave"
          >
            {enlace.etiqueta}
            <IconoFlecha className="h-3.5 w-3.5" />
          </a>
        ))}
        {proyecto.notaAcceso && (
          <span className="text-sm text-tinta-tenue">{proyecto.notaAcceso}</span>
        )}
      </div>
    );
  }
  if (proyecto.notaAcceso) {
    return <p className="text-sm text-tinta-tenue">{proyecto.notaAcceso}</p>;
  }
  return null;
}

function ProyectoDestacado({ proyecto }: { proyecto: Proyecto }) {
  return (
    <article className="rounded-2xl border border-borde bg-panel p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Estado estado={proyecto.estado} etiqueta={proyecto.estadoEtiqueta} />
        <span className="font-mono text-xs text-tinta-tenue">{proyecto.periodo}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight md:text-2xl">
        {proyecto.nombre}
      </h3>
      <p className="mt-1 text-sm text-acento-suave">{proyecto.claim}</p>
      <p className="mt-4 max-w-3xl leading-relaxed text-tinta-suave">{proyecto.contexto}</p>

      <h4 className="mt-6 font-mono text-xs tracking-wider text-tinta-tenue uppercase">
        Mi trabajo
      </h4>
      <ul className="mt-3 max-w-3xl space-y-2">
        {proyecto.aporte.map((punto) => (
          <li key={punto.slice(0, 40)} className="flex gap-3 text-sm leading-relaxed">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-acento" aria-hidden="true" />
            <span className="text-tinta-suave">{punto}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-4">
        <Chips items={proyecto.stack} />
        <Enlaces proyecto={proyecto} />
      </div>
    </article>
  );
}

function ProyectoMenor({ proyecto }: { proyecto: Proyecto }) {
  return (
    <article className="flex flex-col rounded-2xl border border-borde bg-panel p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Estado estado={proyecto.estado} etiqueta={proyecto.estadoEtiqueta} />
        <span className="font-mono text-xs text-tinta-tenue">{proyecto.periodo}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold tracking-tight">{proyecto.nombre}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-tinta-suave">
        {proyecto.contexto}
      </p>
      <div className="mt-4 space-y-3">
        <Chips items={proyecto.stack.slice(0, 6)} />
        <Enlaces proyecto={proyecto} />
      </div>
    </article>
  );
}

export function Proyectos() {
  return (
    <Seccion id="proyectos" numero="01" titulo="Proyectos">
      <div className="space-y-6">
        {destacados.map((proyecto) => (
          <ProyectoDestacado key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {restantes.map((proyecto) => (
          <ProyectoMenor key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </Seccion>
  );
}
