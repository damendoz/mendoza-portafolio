import { perfil } from "@/content/perfil";
import { Seccion } from "./Seccion";

export function Experiencia() {
  return (
    <Seccion id="experiencia" numero="02" titulo="Experiencia">
      <div className="space-y-8">
        {perfil.experiencia.map((puesto) => (
          <article
            key={`${puesto.organizacion}-${puesto.periodo}`}
            className="grid gap-2 md:grid-cols-[180px_1fr] md:gap-8"
          >
            <div className="font-mono text-sm text-tinta-tenue">
              <p>{puesto.periodo}</p>
              {puesto.lugar && <p className="mt-1 text-xs">{puesto.lugar}</p>}
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                {puesto.rol}
                <span className="text-tinta-suave"> · {puesto.organizacion}</span>
              </h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-tinta-suave">
                {puesto.resumen}
              </p>
            </div>
          </article>
        ))}
      </div>

      <h3 className="mt-16 mb-6 font-mono text-xs tracking-wider text-tinta-tenue uppercase">
        Cómo trabajo
      </h3>
      <div className="grid gap-6 md:grid-cols-3">
        {perfil.principios.map((principio) => (
          <div key={principio.titulo} className="rounded-2xl border border-borde bg-panel p-6">
            <h4 className="font-medium text-acento-suave">{principio.titulo}</h4>
            <p className="mt-2 text-sm leading-relaxed text-tinta-suave">{principio.texto}</p>
          </div>
        ))}
      </div>
    </Seccion>
  );
}
