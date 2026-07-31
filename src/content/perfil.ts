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

  ubicacion: "España · Remoto" as string | null,

  intro: [
    "Construyo producto digital con IA para The Clueless, la agencia creadora de la modelo virtual Aitana López: plataformas SaaS de generación de contenido, agentes que operan en producción y APIs públicas de pago por uso.",
    "Trabajo con un flujo agent-first: especificación y reglas primero, agentes de código después, y revisión humana siempre. Mi sitio está en lo que no se puede delegar — arquitectura, billing, seguridad, cumplimiento y criterio de producto.",
  ],

  enlaces: {
    github: "https://github.com/damendoz",
    linkedin: "https://www.linkedin.com/in/daniel-mendoza-299a06167/" as string | null,
    email: "ing.dan.mendoza@gmail.com",
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
      organizacion: "Autónomo",
      rol: "Full Stack Engineer — AI Infrastructure",
      periodo: "feb 2026 — actualidad",
      lugar: "España · Remoto",
      resumen:
        "Diseño y construyo la infraestructura que conecta modelos generativos con producto facturable. Responsable técnico de la plataforma SaaS de generación con IA de The Clueless: arquitectura, catálogo de 24 modelos, sistema de créditos y monedero, API pública, servidor MCP y agente in-product — de cero a producción en 2 meses. Además: workers GPU serverless, integración de proveedores de inferencia (fal.ai, Replicate, RunPod, ElevenLabs, Recall.ai) y análisis de coste por inferencia.",
    },
    {
      organizacion: "Coderland",
      rol: "Full Stack AI Developer",
      periodo: "mar 2025 — ene 2026",
      lugar: "Madrid · Remoto",
      resumen:
        "Desarrollo full-stack con foco en IA aplicada y agentes.",
    },
    {
      organizacion: "Corporación Saeplus",
      rol: "Level 2 Developer (contrato)",
      periodo: "nov 2024 — abr 2025",
      lugar: "Colombia · Remoto",
      resumen: "Desarrollo y soporte de nivel 2 (PostgreSQL, PHP).",
    },
    {
      organizacion: "Pegaso Consulting",
      rol: "Full Stack Developer",
      periodo: "dic 2023 — nov 2024",
      lugar: "Caracas · Híbrido",
      resumen:
        "Aplicaciones web, bots de WhatsApp, análisis de errores en producción y optimización de código existente.",
    },
    {
      organizacion: "ITBC Group",
      rol: "Junior Developer Consultant",
      periodo: "jun 2021 — dic 2023",
      lugar: "Venezuela · Remoto",
      resumen: "Primera etapa profesional en consultoría: React y JavaScript.",
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
