import type { Experiencia, GrupoStack } from "./tipos";

// ============================================================
// CONTENIDO PERSONAL — edita este fichero, no los componentes.
// Los campos marcados con EDITAR son cosas que solo tú sabes.
// ============================================================

export const perfil = {
  nombre: "Daniel Mendoza Arreaza",
  iniciales: "dm",
  titular: "Desarrollador Full-Stack · Producto e IA aplicada",
  metaDescripcion:
    "Portafolio de Daniel Mendoza: desarrollo full-stack y producto con IA — plataformas SaaS, agentes en producción y APIs. TypeScript, Next.js, Python y Claude.",

  // EDITAR: ciudad/país si quieres mostrarla (null = no se muestra).
  ubicacion: null as string | null,

  intro: [
    "Construyo producto digital con IA en The Clueless, la agencia creadora de la modelo virtual Aitana López: plataformas SaaS de generación de contenido, agentes que operan en producción y APIs públicas de pago por uso.",
    "Trabajo con un flujo agent-first: especificación y reglas primero, agentes de código después, y revisión humana siempre. Mi sitio está en lo que no se puede delegar — arquitectura, billing, seguridad, cumplimiento y criterio de producto.",
  ],

  enlaces: {
    github: "https://github.com/damendoz",
    // EDITAR: pon la URL real de tu perfil (null = no se muestra el icono).
    linkedin: null as string | null,
    // EDITAR: confirma que este es el correo que quieres hacer público.
    email: "ddeunasolam@gmail.com",
  },

  // "Cómo trabajo" — sale de los principios reales de tus repos.
  principios: [
    {
      titulo: "Los límites van en código, no en el prompt",
      texto:
        "Cuando un agente actúa en el mundo real, las reglas duras viven en una capa de política delante de las herramientas: validación humana, denegación por defecto e invariantes con test propio.",
    },
    {
      titulo: "Desarrollo agent-first, con criterio humano",
      texto:
        "Dirijo agentes de código con especificaciones y documentación de gobernanza escritas antes de la primera línea. La ejecución se delega; la arquitectura, la revisión y el QA no.",
    },
    {
      titulo: "Conservador antes que conveniente",
      texto:
        "Cumplimiento desde el diseño (RGPD, AI Act), human-in-the-loop donde hay riesgo y fallar en voz alta antes que degradar en silencio.",
    },
  ],

  experiencia: [
    {
      organizacion: "The Clueless AI",
      // EDITAR: ajusta el título a tu cargo real.
      rol: "Desarrollador Full-Stack · Ingeniería de producto con IA",
      // EDITAR: la evidencia en los repos llega hasta noviembre de 2025;
      // pon tu fecha de inicio real si es anterior.
      periodo: "2025 — actualidad",
      resumen:
        "Desarrollo de la plataforma SaaS de la casa (theclueless.tech), del producto de upscaling Vellum, de agentes internos en producción y de herramientas para los talentos virtuales de la agencia.",
    },
  ] satisfies Experiencia[],

  stack: [
    {
      titulo: "Lenguajes",
      items: ["TypeScript", "JavaScript (Node)", "Python", "SQL"],
    },
    {
      titulo: "Frontend",
      items: [
        "React 19",
        "Next.js 15/16 (App Router)",
        "Tailwind CSS 4",
        "TanStack Query",
        "Zustand",
        "React Flow",
        "Vite",
      ],
    },
    {
      titulo: "Backend",
      items: [
        "Node.js / Express",
        "tRPC",
        "FastAPI",
        "PostgreSQL",
        "Prisma / Drizzle",
        "Redis / BullMQ",
        "Socket.IO",
        "Zod / Pydantic",
      ],
    },
    {
      titulo: "IA aplicada",
      items: [
        "Claude / Anthropic SDK",
        "Agentes con herramientas",
        "MCP",
        "Streaming SSE",
        "ComfyUI",
        "RunPod (GPU serverless)",
        "Playwright",
      ],
    },
    {
      titulo: "Plataforma",
      items: [
        "Stripe",
        "Clerk / JWT / OAuth",
        "AWS S3",
        "Vercel",
        "Railway",
        "Docker",
        "GitHub Actions",
      ],
    },
  ] satisfies GrupoStack[],
};
