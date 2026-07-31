import { perfil } from "@/content/perfil";

export function Footer() {
  return (
    <footer className="border-t border-borde/60">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-6 py-8">
        <p className="text-sm text-tinta-tenue">
          © {new Date().getFullYear()} {perfil.nombre}
        </p>
        <p className="font-mono text-xs text-tinta-tenue">
          Next.js · TypeScript · Tailwind —{" "}
          <a
            href={`${perfil.enlaces.github}/mendoza-portafolio`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tinta-suave transition-colors hover:text-tinta"
          >
            código fuente
          </a>
        </p>
      </div>
    </footer>
  );
}
