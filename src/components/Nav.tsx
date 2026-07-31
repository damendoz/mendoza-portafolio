import { perfil } from "@/content/perfil";

const enlaces = [
  { href: "#proyectos", texto: "Proyectos" },
  { href: "#experiencia", texto: "Experiencia" },
  { href: "#stack", texto: "Stack" },
  { href: "#contacto", texto: "Contacto" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-borde/60 bg-fondo/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Principal"
      >
        <a href="#inicio" className="font-mono text-sm font-medium tracking-tight">
          {perfil.iniciales}
          <span className="text-acento">.</span>
        </a>
        <ul className="flex items-center gap-5 md:gap-8">
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <a
                href={enlace.href}
                className="text-sm text-tinta-suave transition-colors hover:text-tinta"
              >
                {enlace.texto}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
