# Portafolio — Daniel Mendoza Arreaza

Portafolio profesional construido con **Next.js 15 (App Router) + TypeScript + Tailwind CSS 4**,
exportado como sitio estático (`output: "export"`): se puede servir desde Vercel, GitHub Pages,
Netlify o cualquier hosting de ficheros.

> **Antes de publicar, lee [`GUIA.md`](GUIA.md)**: contiene el checklist de datos personales
> pendientes de confirmar y las reglas de confidencialidad que sigue el contenido.

## Comandos

```bash
npm install      # dependencias
npm run dev      # desarrollo en http://localhost:3000
npm run build    # build de producción + export estático en out/
npm run lint     # ESLint
```

## Dónde se edita cada cosa

Todo el contenido vive separado del código de la web:

```
src/content/perfil.ts      nombre, titular, intro, enlaces, experiencia, stack
src/content/proyectos.ts   las fichas de proyectos (destacados y parrilla)
src/content/tipos.ts       tipos del contenido (añade campos aquí si los necesitas)
```

Para cambiar textos, añadir un proyecto o reordenar el stack **no hace falta tocar ningún
componente**: edita los ficheros de `src/content/` y ya. Los componentes de la web están en
`src/components/` y el tema (colores, tipografías) en `src/app/globals.css`.

## Despliegue

**Vercel (recomendado):** importa el repo en [vercel.com](https://vercel.com), framework
Next.js, sin configuración extra. Cada push a `main` despliega.

**GitHub Pages:** el build genera `out/` estático. Si lo sirves bajo
`usuario.github.io/mendoza-portafolio` (subruta), añade `basePath: "/mendoza-portafolio"`
en `next.config.ts`; con dominio propio no hace falta.
