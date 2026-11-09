# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Desarrollo de API REST para Catálogo de Productos**.

| | |
|---|---|
| Tema | Construccion de APIs REST con Express |
| Nivel | advanced-l2 |
| Chapter | Backend |
| Especialidad | Node |
| Stack | TypeScript / Express 4.21 |
| Patron arquitectonico | capas estándar (3 capas: routes, services, models) |
| Tiempo estimado | 8 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json y tsconfig.json en la raiz`
- `src/main.ts como bootstrap`
- `src/domain con entidades y puertos`
- `src/application con casos de uso`
- `src/infrastructure con repositorios y controller`
- `Express como framework (vinculante: no mezcles otro framework del mismo ecosistema)`

Trampas conocidas:

- No inventes versiones de npm. Usa rango con caret (`^5.7.2`) sobre una version que exista, o deja que el paquete la resuelva. Una version inexistente (ej. `@types/react-router-dom@6.19.0`) hace fallar `npm install` con ETARGET y el proyecto no instala.
- Los paquetes `@types/*` solo hacen falta para librerias que no traen sus propios tipos. React Router, NestJS y Prisma ya los traen: agregar `@types/` de esos rompe o sobra.
- El `tsconfig.json` es obligatorio: sin el, `tsc` no sabe que compilar.

Dependencias:

- express 4.21.0
- @types/express 5.0.0
- typescript 5.7.0
- ts-node 10.9.2
- jest 29.7.0
- @types/jest 29.5.12
- supertest 7.0.0
- @types/supertest 6.0.2
- dotenv 16.4.5
- class-validator 0.14.1
- @types/node 22.5.4

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Definición y Creación de Endpoints**: Endpoints básicos para el catálogo de productos.
- **Fase 2 — Validación de Entradas y Manejo de Errores**: Endpoints con validación de entradas y manejo centralizado de errores.
- **Fase 3 — Optimización y Refactorización**: API optimizada y refactorizada.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

### 1. Boilerplate del stack (1)

Sin esto el proyecto no compila ni arranca. **Es tu trabajo crearlo**, y no toca nada de lo pedagogico: es andamiaje del stack.

- [ ] **src/app.module.ts** — Sin el modulo raiz, Nest no tiene arbol de dependencias que resolver y el bootstrap falla.

### 2. Referencias colgando (7)

Salieron de un analisis estatico del codigo que SI esta en el repo. Cada una rompe la compilacion:

- [ ] `src/services/productService.ts` — `CreateProductDTO.forEach`
      Se invoca `forEach` sobre `CreateProductDTO`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/services/productService.ts` — `ProductDTO.set`
      Se invoca `set` sobre `ProductDTO`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/services/productService.ts` — `ProductDTO.values`
      Se invoca `values` sobre `ProductDTO`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/services/productService.ts` — `ProductDTO.get`
      Se invoca `get` sobre `ProductDTO`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/services/productService.ts` — `ProductDTO.has`
      Se invoca `has` sobre `ProductDTO`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/services/productService.ts` — `ProductDTO.delete`
      Se invoca `delete` sobre `ProductDTO`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/services/productService.ts` — `ProductDTO.find`
      Se invoca `find` sobre `ProductDTO`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.

### Presentes (16)

- `src/main.ts`
- `src/app.ts`
- `package.json`
- `src/models/productModel.ts`
- `tsconfig.json`
- `.env.example`
- `README.md`
- `src/routes/productRoutes.ts`
- `src/services/productService.ts`
- `src/validators/productValidator.ts`
- `src/exceptions/httpException.ts`
- `src/exceptions/duplicateProductException.ts`
- `src/exceptions/negativePriceException.ts`
- `src/middlewares/errorMiddleware.ts`
- `src/types/productTypes.ts`
- `tests/productRoutes.spec.ts`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src/routes`
- `src/services`
- `src/models`
- `src/validators`
- `src/exceptions`
- `src/middlewares`
- `src/types`
- `tests`

## Verificacion

```bash
npm install && npm run build
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **capas estándar (3 capas: routes, services, models)**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2
- Brecha que el reto ataca: Construir endpoints REST con validacion y manejo de errores (corrida e2e 20261109074436524), Expone endpoints REST con validacion de entrada y manejo centralizado de errores
- Mision: Exponer el catalogo de productos

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
