import type { Proyecto } from "./tipos";

// ============================================================
// PROYECTOS — redactados a partir de lo que hay de verdad en
// los repos (estado a julio de 2026). Dos reglas al editar:
//
// 1. Nada que no puedas defender en una entrevista con el
//    código delante.
// 2. Nada confidencial: sin nombres de clientes bajo NDA, sin
//    precios/márgenes internos, sin detalles operativos de
//    seguridad. Por eso dos proyectos van anonimizados.
// ============================================================

export const proyectos: Proyecto[] = [
  {
    id: "theclueless-ai-suite",
    nombre: "The Clueless AI Suite",
    claim:
      "Plataforma SaaS de generación con IA: studio, canvas de nodos, agente embebido y API pública",
    periodo: "2026 — actualidad",
    estado: "produccion",
    destacado: true,
    contexto:
      "La plataforma multi-producto de The Clueless, nacida como evolución de Vellum (el upscaler) hacia una suite completa: un Studio de generación de imagen, vídeo, audio y texto, un Playground de nodos, el agente embebido Quill y una Developer API pública (REST + servidor MCP) con facturación por uso. Auth, suscripciones, créditos y biblioteca de resultados en un solo producto.",
    aporte: [
      "Arquitectura Next.js 15 + tRPC + Drizzle/Postgres: 27 páginas, 37 endpoints y 22 tablas en producción.",
      "Billing de doble plano: créditos de suscripción y monedero prepago en micro-USD enteros, con débito antes de crear, refund en fallo y liquidación idempotente.",
      "Developer API con claves hasheadas de un solo vistazo, cargo estimado tipo hold→capture y cron de reconciliación contra el coste real del proveedor.",
      "Servidor MCP con OAuth que expone los modelos de la suite como herramientas para clientes externos, reutilizando el auth y el billing del gateway.",
      "Agente Quill sobre Claude: streaming SSE, herramientas in-process que debitan al usuario logueado y facturación de tokens con el mismo motor de precios que el resto del producto.",
      "Auditoría de seguridad pre-producción propia, con cierre verificado de hallazgos (webhooks de Stripe idempotentes, protección SSRF, redirects seguros) antes del go-live.",
      "Relevo de Vellum sin dejar a nadie atrás: runbook de migración del dominio y de la base de suscriptores de pago al nuevo sistema de planes.",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "tRPC",
      "Drizzle ORM",
      "PostgreSQL",
      "Stripe",
      "Clerk",
      "Anthropic SDK",
      "MCP",
      "AWS S3",
      "Tailwind 4",
    ],
    enlaces: [{ url: "https://www.theclueless.tech", etiqueta: "Web pública" }],
    notaAcceso: "Código privado (The Clueless)",
  },
  {
    id: "vellum-upscaler",
    nombre: "Vellum — Upscaling con IA",
    claim:
      "El producto de upscaling que dio origen a la Suite: GPUs serverless, créditos y suscripciones",
    periodo: "2025 — 2026",
    estado: "legado",
    estadoEtiqueta: "Hoy parte de la Suite",
    destacado: true,
    contexto:
      "El producto de mejora de imagen de The Clueless y el punto de partida de lo que hoy es la AI Suite: un frontend Next.js y un API gateway en Node que orquesta workflows de ComfyUI en GPUs serverless (RunPod), con sistema de créditos, suscripciones Stripe, progreso en tiempo real y una API multi-tenant para integradores. Como web independiente ya no está disponible: el producto evolucionó y quedó integrado en la Suite, que heredó su dominio y sus suscriptores.",
    aporte: [
      "Base fundacional del backend (primeros commits del repo): autenticación JWT con refresh y OAuth de Google, sistema de créditos, suscripciones y webhooks de Stripe, historial y galería por usuario.",
      "Orquestación de trabajos GPU: colas BullMQ sobre Redis, webhook + polling de respaldo y un cron que rescata trabajos huérfanos.",
      "Enrutado por tiers de GPU según el modelo solicitado y normalización de imagen (sharp + S3 con URLs prefirmadas) antes de tocar la GPU.",
      "Progreso en tiempo real por WebSocket con degradación a polling en el cliente, y rate limiting de ventana deslizante en Redis para la API de terceros.",
      "Chat comercial con Claude en streaming integrado en el frontend, con tool-use para captura de leads y resumen de conversaciones.",
    ],
    stack: [
      "Node.js",
      "Express",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "Stripe",
      "AWS S3",
      "RunPod",
      "ComfyUI",
      "Next.js 15",
    ],
    notaAcceso: "Código privado (The Clueless)",
  },
  {
    id: "agentes-rrhh",
    nombre: "Agentes de IA para RRHH",
    claim:
      "Matriz de agentes con el gobierno en código: capa de política, semáforo y trazabilidad probatoria",
    periodo: "2026",
    estado: "piloto",
    destacado: true,
    contexto:
      "Plataforma de agentes para el departamento de RRHH de una empresa española (cliente bajo NDA). El diferencial no es el agente, es el gobierno: lo que cada agente puede hacer se decide en una capa de política en código — nunca en el prompt — en un dominio donde una salida errónea es un problema jurídico, no un bug.",
    aporte: [
      "Capa de política como gateway independiente: el agente propone y la política decide — verde ejecuta, ámbar espera validación humana, rojo bloquea y registra el intento. Denegación por defecto.",
      "Log append-only encadenado por hash SHA-256, diseñado como evidencia ante inspección; por diseño nunca registra contenido conversacional.",
      "Manifiesto YAML como fuente de verdad ejecutable: las herramientas se derivan de la especificación validada con Pydantic; si el manifiesto no valida, el servicio no arranca.",
      "Suite de invariantes legales con una tesis explícita: la prueba correcta no es que el modelo se niegue, es que la acción esté bloqueada aunque el modelo la intente.",
      "QA como infraestructura: job anti-trampas en CI (falla si un PR desactiva tests o baja umbrales) y testing de mutación nocturno que audita a los propios tests.",
      "Diseñado bajo RGPD, Estatuto de los Trabajadores y AI Act (sistema clasificable de alto riesgo), trabajando solo con dato sintético hasta tener autorización escrita.",
    ],
    stack: [
      "Python 3.11",
      "FastAPI",
      "Pydantic v2",
      "Anthropic SDK",
      "React 19",
      "Vite",
      "Docker",
      "pytest + mutmut",
    ],
    notaAcceso: "Cliente y detalles bajo NDA",
  },
  {
    id: "agente-comunidad",
    nombre: "Agente de comunidad + CRM",
    claim:
      "Agente human-in-the-loop que opera la cuenta de una comunidad online: propone, una persona aprueba",
    periodo: "2026",
    estado: "produccion",
    destacado: false,
    contexto:
      "Agente autónomo que mantiene presencia diaria en una comunidad online con la voz de la marca, con CRM propio, scoring de leads y flujo de conversión free→paid. Ninguna acción sale sin aprobación humana, y el motivo de cada rechazo se reinyecta en los prompts para corregir al agente.",
    aporte: [
      "Ritmo humano modelado como funciones puras y deterministas (ventanas horarias por zona, jitter, descansos) — testeable sin dormir procesos.",
      "Cumplimiento en tres capas independientes: opt-out (RGPD) y exclusión de clientes de pago aplicados en el segmentador, el dashboard y el ejecutor.",
      "Rate limiting persistente en disco con ramp-up por antigüedad de cuenta, y supervisor con backoff para operación 24/7.",
      "~10.000 líneas de Python y 216 tests; en producción supervisada.",
    ],
    stack: ["Python", "Playwright", "Anthropic SDK", "SQLite (WAL)", "Streamlit"],
    notaAcceso: "Proyecto interno (The Clueless)",
  },
  {
    id: "aitana-meet-agent",
    nombre: "Aitana Meet Agent",
    claim:
      "Aitana entra a la reunión: bot con avatar en vídeo, transcripción diarizada y acta bilingüe",
    periodo: "2026",
    estado: "interno",
    destacado: false,
    contexto:
      "Servicio que envía a Aitana López como participante a reuniones (Google Meet y otras plataformas): el bot entra con el avatar como cámara, graba y transcribe con diarización, resume con Claude y envía a los asistentes un PDF bilingüe con la identidad visual de la marca.",
    aporte: [
      "Orquestación asíncrona de webhooks en tres saltos (grabación → transcripción → resumen), respondiendo al webhook al instante y procesando en background.",
      "Resolución de destinatarios en cascada de cuatro niveles cuando la plataforma no expone los correos de forma fiable.",
      "Resumen estructurado bilingüe (ES/EN) en una sola llamada al modelo, con parseo defensivo y doble fallback.",
      "PDF de entrega con tipografías de marca embebidas y envío por proveedor HTTP con fallback SMTP.",
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Anthropic SDK",
      "Recall.ai",
      "PDFKit",
      "Railway",
    ],
    notaAcceso: "Proyecto interno (The Clueless)",
  },
  {
    id: "workflow-studio",
    nombre: "Workflow Studio (ComfyUI)",
    claim:
      "Estudio interno para ejecutar workflows generativos de moda sobre GPUs serverless",
    periodo: "2026",
    estado: "interno",
    destacado: false,
    contexto:
      "Herramienta interna que expone más de doce workflows de ComfyUI (retoque de piel, pelo y maquillaje, vistas orbitales, avatares, talking head y traducción de vídeo) como una web sencilla para el equipo, ejecutándolos en GPUs serverless.",
    aporte: [
      "Orquestador único para workflows heterogéneos, con un esquema declarativo de inputs del que la interfaz se genera dinámicamente.",
      "Imágenes Docker CUDA para los workers GPU: pineo fino de versiones, caché por capas y arreglos reales de compatibilidad (CUDA/PyTorch/custom nodes).",
      "Subida multipart a S3 desde el navegador (partes de 50 MB, concurrencia limitada y abort limpio) para vídeos de hasta ~10 GB.",
      "Webhooks con fallback a polling y errores de worker traducidos a mensajes accionables para el equipo.",
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "RunPod",
      "ComfyUI",
      "Docker / CUDA",
      "AWS S3",
      "PostgreSQL",
      "ElevenLabs",
    ],
    notaAcceso: "Proyecto interno (The Clueless)",
  },
  {
    id: "widget-aitana",
    nombre: "Widget conversacional de Aitana",
    claim:
      "Chat embebible con streaming token a token y avatar en vídeo por estados",
    periodo: "2026",
    estado: "desarrollo",
    destacado: false,
    contexto:
      "Widget web para conversar con Aitana López desde cualquier sitio: el avatar alterna entre escuchar, pensar y hablar con clips en cross-fade sincronizados con el streaming del modelo. La capa de personaje vive en markdown editable por gente no técnica.",
    aporte: [
      "Streaming de extremo a extremo: la route de Next reemite los deltas del modelo y el cliente los consume con ReadableStream sobre el último mensaje.",
      "Máquina de estados del avatar acoplada al stream, con un suelo de 400 ms para evitar parpadeo cuando el modelo responde rápido.",
      "Composición del system prompt en servidor desde ficheros de personaje modulares; la API key nunca toca el navegador.",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Anthropic SDK"],
    notaAcceso: "MVP interno (The Clueless)",
  },
];

export const destacados = proyectos.filter((p) => p.destacado);
export const restantes = proyectos.filter((p) => !p.destacado);
