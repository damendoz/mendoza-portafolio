import { perfil } from "@/content/perfil";
import { Seccion } from "./Seccion";

export function Stack() {
  return (
    <Seccion id="stack" numero="03" titulo="Stack">
      <p className="mb-10 max-w-2xl text-tinta-suave">
        Solo lo que uso de verdad en proyectos reales — nada de barras de porcentaje.
      </p>
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {perfil.stack.map((grupo) => (
          <div key={grupo.titulo}>
            <h3 className="mb-4 font-mono text-xs tracking-wider text-acento uppercase">
              {grupo.titulo}
            </h3>
            <ul className="space-y-2">
              {grupo.items.map((item) => (
                <li key={item} className="text-sm text-tinta-suave">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Seccion>
  );
}
