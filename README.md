# Desarrollo de API REST para Catálogo de Productos

Debes construir una API REST que exponga un catálogo de productos, con validación de entradas y manejo centralizado de errores. La API debe manejar productos con atributos como nombre, precio, stock y categoría. Se espera que la API prohíba productos con precios negativos y nombres duplicados. El dominio es una tienda en línea de artículos electrónicos.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Construccion de APIs REST con Express |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y entregará cada archivo con su ruta.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y entregará cada archivo con su ruta. Guárdalos en la carpeta donde quieras trabajar, respetando las rutas.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no entrega todos los archivos al terminar el análisis, escríbele: "entrégame todos los archivos con su ruta".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición y Creación de Endpoints

**Objetivo:** Crear los endpoints básicos para el catálogo de productos.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Define los endpoints para listar, crear, actualizar y eliminar productos.
- Asegura que los endpoints manejen correctamente las solicitudes y respuestas.

**Entregable:** Endpoints básicos para el catálogo de productos.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la estructura de datos necesaria para representar un producto.
- Piensa en cómo manejarás las solicitudes y respuestas en cada endpoint.

</details>

### Fase 2: Validación de Entradas y Manejo de Errores

**Objetivo:** Implementar validación de entradas y manejo centralizado de errores en los endpoints.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Agrega validaciones para asegurar que los productos no tengan precios negativos ni nombres duplicados.
- Implementa un manejo centralizado de errores para gestionar diferentes tipos de errores.

**Entregable:** Endpoints con validación de entradas y manejo centralizado de errores.

<details>
<summary>Pistas de conocimiento</summary>

- Investiga patrones comunes para validar datos en APIs REST.
- Considera cómo centralizar el manejo de errores para mantener el código limpio y manejable.

</details>

### Fase 3: Optimización y Refactorización

**Objetivo:** Optimizar y refactorizar la API para mejorar su rendimiento y mantenibilidad.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Identifica áreas de la API que podrían optimizarse para mejorar el rendimiento.
- Refactoriza el código para mejorar su estructura y mantenibilidad.

**Entregable:** API optimizada y refactorizada.

<details>
<summary>Pistas de conocimiento</summary>

- Investiga técnicas de optimización comunes para APIs REST.
- Considera patrones de diseño que podrían mejorar la estructura del código.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un endpoint en una API REST y cuál es su propósito?
- **paraQueSirve**: ¿Para qué sirve la validación de entradas en una API REST?
- **comoSeUsa**: ¿Cómo se usa el manejo centralizado de errores en una API REST?
- **erroresComunes**: ¿Cuáles son los errores comunes al construir una API REST y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones implica la optimización y refactorización de una API REST?

## Criterios de Evaluacion

- Definición y creación de endpoints básicos para el catálogo de productos.
- Implementación de validación de entradas y manejo centralizado de errores.
- Optimización y refactorización de la API para mejorar su rendimiento y mantenibilidad.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
