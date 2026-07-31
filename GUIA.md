# Guía del portafolio

Este documento explica cómo está construido el contenido, qué te queda por decidir a ti,
y las reglas que conviene no romper al editarlo. Todo lo que hay en la web sale de una
revisión real de los 8 repositorios en los que has trabajado (julio de 2026).

---

## 1. Antes de publicar — checklist

Datos personales ya confirmados (jul 2026): correo público `ing.dan.mendoza@gmail.com`,
LinkedIn enlazado, ubicación "España · Remoto" y la experiencia completa 2021–actualidad
tomada de tu LinkedIn (ITBC → Pegaso → Saeplus → Coderland → freelance AI Infrastructure).

Lo que queda:

- [ ] **Permiso de The Clueless**: los proyectos descritos son suyos y tu relación es de
      freelance. Antes de publicar, confirma que puedes describirlos a este nivel (está
      redactado para ser seguro, pero la confirmación te protege a ti).
- [ ] **Resumen de Coderland**: he puesto una línea genérica basada en el título y las
      skills de tu LinkedIn; si puedes contar algo concreto (proyectos, stack), amplíala
      en `src/content/perfil.ts`.
- [ ] **Enlace destacado de tu LinkedIn**: la entrada de Pegaso enlaza tu portafolio
      antiguo. Cuando publiques este, actualiza ese enlace destacado (y la URL de la bio).

## 2. Reglas de confidencialidad que sigue el contenido

El texto está redactado para no filtrar nada sensible. Si editas, mantén estas líneas rojas:

- **El cliente de RRHH no se nombra** (va como "empresa española, cliente bajo NDA").
  No publiques su nombre, los códigos de sus agentes ni el estado de sus trámites legales
  sin permiso contractual por escrito.
- **La plataforma de comunidades no se nombra** ni la comunidad concreta, su tamaño o el
  handle de la cuenta. Describe la arquitectura, no la operación.
- **Nunca**: precios internos, márgenes, número de clientes, umbrales de rate-limit o
  scoring, IDs de endpoints/deployments, system prompts completos, JSON de workflows de
  ComfyUI, nombres de clientes de demos, ni detalle de vulnerabilidades con su ubicación
  (mencionarlas como "encontradas y cerradas" está bien; el dónde y el cómo, no).
- Capturas de pantalla para el portafolio: jamás de paneles de administración con datos
  reales (leads, conversaciones, correos).

## 3. El encuadre de autoría (importante para entrevistas)

Los commits de los repos de empresa van con la **cuenta de organización** y con agentes de
código como coautores; tu cuenta personal solo firma la base inicial de `ai-upscaler-api`
(nov 2025). Cualquiera puede comprobar eso en dos clics, así que el portafolio está
redactado con el encuadre que sí se sostiene:

- En Vellum: "base fundacional del backend (primeros commits del repo)" — eso es tuyo y
  es verificable.
- En el resto: descripción del sistema + "mi trabajo" en términos de arquitectura,
  decisiones y dirección del desarrollo, y una declaración explícita del flujo agent-first
  en la intro y en "Cómo trabajo".

En una entrevista, esa historia — "especifico, dirijo agentes de código, reviso, y me
quedo la arquitectura, el billing, la seguridad y el QA" — es defendible con los repos
delante y además es un diferenciador en 2026. Lo que no se sostiene es "escribí X líneas".
No cites números de commits propios; cita sistemas y decisiones.

## 4. Cómo añadir o editar proyectos

Cada proyecto es un objeto en `src/content/proyectos.ts` (tipo `Proyecto` en `tipos.ts`):

- `destacado: true` → tarjeta grande con lista "Mi trabajo"; `false` → tarjeta de parrilla.
- `estado`: `produccion` | `piloto` | `interno` | `desarrollo` (colorea el chip).
- `aporte`: bullets concretos y verificables. La prueba de fuego: ¿podrías defenderlo con
  el código delante? Si no, fuera.
- `enlaces` solo si hay algo público; si no, `notaAcceso` ("Código privado…").

Regla general: **problema → qué hace el sistema → qué hiciste tú → stack**. Sin métricas
inventadas; los únicos números que aparecen (páginas, endpoints, tests, líneas) están
contados sobre los repos.

## 5. Siguientes pasos recomendados (en orden)

1. **Publicar**: Vercel + push a `main` (ver README). Luego, dominio propio
   (p. ej. `danielmendoza.dev`) — sube la seriedad y te da correo aparte si quieres.
2. **Perfil de GitHub coherente**: fija (pin) `mendoza-portafolio`, añade un README de
   perfil corto con el mismo titular, y pon la URL del portafolio en la bio. El portafolio
   dice que diriges agentes de código; tu GitHub es la prueba — cuídalo.
3. **LinkedIn alineado**: mismo titular, misma experiencia, mismas fechas. Las
   incoherencias entre portafolio y LinkedIn son lo primero que resta credibilidad.
4. **Imagen OG** (`opengraph-image.png`, 1200×630): con nombre y titular sobre el mismo
   tema oscuro, para que compartir el enlace se vea bien. Añádela en `src/app/`.
5. **Versión en inglés** si buscas mercado internacional: duplicar `src/content/` en EN y
   una ruta `/en` es suficiente; no hace falta i18n completo.
6. **Un caso de estudio largo** (una página por proyecto destacado) cuando tengas tiempo:
   el formato corto actual abre la puerta; el largo cierra la entrevista.

## 6. Cómo se construyó este contenido

Fichas redactadas a partir de la exploración de los repos reales (estado, stack, historial
git, docs internas) con agentes de exploración, en julio de 2026. Si un proyecto cambia de
estado (p. ej. el widget pasa a producción), actualiza `estado` y `periodo` — es un dato,
no decoración.
