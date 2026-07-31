// Tipos del contenido del portafolio.
// El contenido real vive en perfil.ts y proyectos.ts — edita allí, no en los componentes.

export type EstadoProyecto = "produccion" | "piloto" | "interno" | "desarrollo";

export interface EnlaceProyecto {
  url: string;
  etiqueta: string;
}

export interface Proyecto {
  id: string;
  nombre: string;
  /** Una línea que resume el proyecto (aparece bajo el nombre). */
  claim: string;
  /** Ej. "2025 — 2026". Sale del historial real de git. */
  periodo: string;
  estado: EstadoProyecto;
  /** Los destacados se muestran en grande, el resto en la parrilla. */
  destacado: boolean;
  /** Qué es y qué problema resuelve. Sin humo: solo lo que hace de verdad. */
  contexto: string;
  /** Tu trabajo concreto en el proyecto. Verificable con el historial. */
  aporte: string[];
  stack: string[];
  enlaces?: EnlaceProyecto[];
  /** Ej. "Código privado (proyecto de empresa)". Se muestra si no hay enlaces. */
  notaAcceso?: string;
}

export interface Experiencia {
  organizacion: string;
  rol: string;
  periodo: string;
  resumen: string;
}

export interface GrupoStack {
  titulo: string;
  items: string[];
}
