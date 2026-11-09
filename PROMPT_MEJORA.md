# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Boilerplate del stack que falta

Sin esto no compila ni arranca. Es andamiaje, no toca nada de lo pedagogico:

- **src/app.module.ts** — Sin el modulo raiz, Nest no tiene arbol de dependencias que resolver y el bootstrap falla.

### Referencias colgando en el codigo que si esta

Cada una rompe la compilacion:

- `src/services/productService.ts` — `CreateProductDTO.forEach`: Se invoca `forEach` sobre `CreateProductDTO`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/services/productService.ts` — `ProductDTO.set`: Se invoca `set` sobre `ProductDTO`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/services/productService.ts` — `ProductDTO.values`: Se invoca `values` sobre `ProductDTO`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/services/productService.ts` — `ProductDTO.get`: Se invoca `get` sobre `ProductDTO`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/services/productService.ts` — `ProductDTO.has`: Se invoca `has` sobre `ProductDTO`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/services/productService.ts` — `ProductDTO.delete`: Se invoca `delete` sobre `ProductDTO`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/services/productService.ts` — `ProductDTO.find`: Se invoca `find` sobre `ProductDTO`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2

### Brecha de conocimiento
Construir endpoints REST con validacion y manejo de errores (corrida e2e 20261109074436524), Expone endpoints REST con validacion de entrada y manejo centralizado de errores

### Misión / candidato
Exponer el catalogo de productos

### Reto
- Tema: Construccion de APIs REST con Express
- Seniority: advanced-l2
- Tipo: practical
- Título: Desarrollo de API REST para Catálogo de Productos
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Definición y Creación de Endpoints — objetivo: Crear los endpoints básicos para el catálogo de productos. — entregable (NO resolver): Endpoints básicos para el catálogo de productos.
- Fase 2: Validación de Entradas y Manejo de Errores — objetivo: Implementar validación de entradas y manejo centralizado de errores en los endpoints. — entregable (NO resolver): Endpoints con validación de entradas y manejo centralizado de errores.
- Fase 3: Optimización y Refactorización — objetivo: Optimizar y refactorizar la API para mejorar su rendimiento y mantenibilidad. — entregable (NO resolver): API optimizada y refactorizada.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: src/main.ts ===
import dotenv from 'dotenv';
import app from './app';

// Cargar variables de entorno desde .env
dotenv.config();

const PORT = process.env.PORT || 3000;

// Función para iniciar el servidor
const startServer = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
        process.exit(1);
    }
};

// Iniciar el servidor
startServer();

// Exportar la aplicación para testing
export default app;

// === ARCHIVO: src/app.ts ===
import express, { Express, Request, Response } from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import { ProductRoutes } from './routes/productRoutes';
import { ProductService } from './services/productService';
import { ProductValidator } from './validators/productValidator';
import { errorMiddleware } from './middlewares/errorMiddleware';

dotenv.config();

class App {
    public express: Express;
    private productService: ProductService;
    private productValidator: ProductValidator;
    private productRoutes: ProductRoutes;

    constructor() {
        this.express = express();
        this.productValidator = new ProductValidator();
        this.productService = new ProductService(this.productValidator);
        this.productRoutes = new ProductRoutes(this.productService);
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeErrorHandling();
    }

    private initializeMiddlewares(): void {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
    }

    private initializeRoutes(): void {
        this.express.use('/products', this.productRoutes.getRouter());
        this.express.get('/health', (req: Request, res: Response) => {
            res.status(200).json({ status: 'OK' });
        });
    }

    private initializeErrorHandling(): void {
        this.express.use(errorMiddleware);
    }
}

const app = new App().express;
export default app;

// === ARCHIVO: package.json ===
{
  "name": "product-catalog-api",
  "version": "1.0.0",
  "description": "API REST para catálogo de productos con Express y TypeScript",
  "main": "dist/main.js",
  "scripts": {
    "start": "ts-node src/main.ts",
    "build": "tsc",
    "test": "jest",
    "dev": "ts-node-dev src/main.ts"
  },
  "keywords": ["express", "typescript", "rest", "api", "products"],
  "author": "Pragma",
  "license": "MIT",
  "dependencies": {
    "express": "4.21.0",
    "dotenv": "16.4.5",
    "class-validator": "0.14.1"
  },
  "devDependencies": {
    "@types/express": "5.0.0",
    "@types/node": "22.5.4",
    "typescript": "^5.7.3",
    "ts-node": "10.9.2",
    "jest": "29.7.0",
    "@types/jest": "29.5.12",
    "supertest": "7.0.0",
    "@types/supertest": "6.0.2",
    "express-async-errors": "^3.1.1"
  },
  "engines": {
    "node": ">=22.0.0"
  }
}

// === ARCHIVO: src/models/productModel.ts ===
import { IsInt, IsNumber, IsPositive, IsString, MinLength } from 'class-validator';

export class ProductDTO {
    id: string;

    @IsString()
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    name: string;

    @IsNumber({}, { message: 'El precio debe ser un número válido' })
    @IsPositive({ message: 'El precio debe ser un número positivo' })
    price: number;

    @IsInt({ message: 'El stock debe ser un número entero' })
    @IsPositive({ message: 'El stock debe ser un número positivo' })
    stock: number;

    @IsString()
    @MinLength(3, { message: 'La categoría debe tener al menos 3 caracteres' })
    category: string;

    constructor(id: string, name: string, price: number, stock: number, category: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }
}

export class CreateProductDTO {
    @IsString()
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    name: string;

    @IsNumber({}, { message: 'El precio debe ser un número válido' })
    @IsPositive({ message: 'El precio debe ser un número positivo' })
    price: number;

    @IsInt({ message: 'El stock debe ser un número entero' })
    @IsPositive({ message: 'El stock debe ser un número positivo' })
    stock: number;

    @IsString()
    @MinLength(3, { message: 'La categoría debe tener al menos 3 caracteres' })
    category: string;

    constructor(name: string, price: number, stock: number, category: string) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }
}

export class UpdateProductDTO {
    @IsString()
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    name?: string;

    @IsNumber({}, { message: 'El precio debe ser un número válido' })
    @IsPositive({ message: 'El precio debe ser un número positivo' })
    price?: number;

    @IsInt({ message: 'El stock debe ser un número entero' })
    @IsPositive({ message: 'El stock debe ser un número positivo' })
    stock?: number;

    @IsString()
    @MinLength(3, { message: 'La categoría debe tener al menos 3 caracteres' })
    category?: string;

    constructor(name?: string, price?: number, stock?: number, category?: string) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "removeComments": true,
    "baseUrl": "./src",
    "paths": {
      "@/*": ["./*"],
      "@models/*": ["./models/*"],
      "@services/*": ["./services/*"],
      "@routes/*": ["./routes/*"],
      "@validators/*": ["./validators/*"],
      "@middlewares/*": ["./middlewares/*"],
      "@exceptions/*": ["./exceptions/*"],
      "@types/*": ["./types/*"]
    }
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "tests"
  ],
  "compileOnSave": true,
  "ts-node": {
    "compilerOptions": {
      "module": "commonjs"
    }
  }
}

// === ARCHIVO: .env.example ===
# Configuración del servidor
PORT=3000
NODE_ENV=development

# Configuración de la aplicación
APP_NAME=product-catalog-api
APP_VERSION=1.0.0

# Configuración de CORS
CORS_ORIGIN=http://localhost:5173
CORS_METHODS=GET,POST,PUT,DELETE,OPTIONS
CORS_CREDENTIALS=true

# Configuración de logging
LOG_LEVEL=debug
LOG_FORMAT=combined

# Configuración de rate limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Configuración de timeout
REQUEST_TIMEOUT_MS=30000

# Configuración de la API
API_PREFIX=/api
API_TITLE=Product Catalog API
API_DESCRIPTION=REST API para gestión de catálogo de productos
API_VERSION=v1

# Configuración de validación
VALIDATION_WHITELIST_ENABLED=true
VALIDATION_FORBID_NON_WHITELISTED=true

# Configuración de errores
ERROR_STACK_TRACE=true
ERROR_MESSAGE_INTERNAL=Error interno del servidor
ERROR_MESSAGE_NOT_FOUND=Recurso no encontrado
ERROR_MESSAGE_BAD_REQUEST=Solicitud inválida
ERROR_MESSAGE_UNAUTHORIZED=No autorizado
ERROR_MESSAGE_FORBIDDEN=Acceso denegado

# Configuración de productos (valores por defecto)
DEFAULT_PRODUCT_CATEGORY=Electronics
MIN_PRODUCT_PRICE=0
MAX_PRODUCT_PRICE=1000000
MAX_PRODUCT_NAME_LENGTH=200
MAX_STOCK_QUANTITY=99999

// === ARCHIVO: README.md ===
# Product Catalog API

API REST para gestión de catálogo de productos construida con Express y TypeScript.

## Requisitos Previos

- Node.js 22.x o superior
- npm 10.x o superior

## Instalación

```bash
npm install
```

## Configuración

1. Copiar el archivo de ejemplo de variables de entorno:

```bash
cp .env.example .env
```

2. Configurar las variables de entorno según sea necesario en el archivo `.env`.

## Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm start` | Inicia el servidor en modo producción |
| `npm run dev` | Inicia el servidor en modo desarrollo con hot-reload |
| `npm run build` | Compila el código TypeScript a JavaScript |
| `npm test` | Ejecuta las pruebas unitarias |

## Endpoints de la API

### Productos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/products` | Obtiene todos los productos |
| GET | `/products/:id` | Obtiene un producto por su ID |
| POST | `/products` | Crea un nuevo producto |
| PUT | `/products/:id` | Actualiza un producto existente |
| DELETE | `/products/:id` | Elimina un producto |

### Estructura de Datos

#### ProductDTO

```typescript
{
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}
```

#### CreateProductDTO

```typescript
{
  name: string;
  price: number;
  stock: number;
  category: string;
}
```

#### UpdateProductDTO

```typescript
{
  name?: string;
  price?: number;
  stock?: number;
  category?: string;
}
```

## Validaciones

La API aplica las siguientes validaciones:

- El nombre del producto es obligatorio y debe ser único
- El precio no puede ser negativo
- El stock debe ser un número no negativo
- La categoría es obligatoria

## Manejo de Errores

La API utiliza un sistema de manejo de errores centralizado que retorna códigos de estado HTTP apropiados:

- 200 OK - Solicitud exitosa
- 201 Created - Recurso creado exitosamente
- 400 Bad Request - Solicitud inválida
- 404 Not Found - Recurso no encontrado
- 409 Conflict - Conflicto de datos (ej. nombre duplicado)
- 500 Internal Server Error - Error interno del servidor

## Arquitectura

El proyecto sigue una arquitectura de tres capas:

- **Routes**: Definición de endpoints HTTP y manejo de solicitudes
- **Services**: Lógica de negocio y validación
- **Models**: Definición de tipos y DTOs

## Ejecución en Desarrollo

```bash
npm run dev
```

El servidor arrancará en `http://localhost:3000`.

## Ejecución de Pruebas

```bash
npm test
```

## Construcción para Producción

```bash
npm run build
```

Los archivos compilados se generarán en el directorio `dist/`.

## Contribución

Para contribuir al proyecto, asegúrate de:

1. Ejecutar las pruebas antes de enviar cambios
2. Mantener el código dentro de los límites de estilo establecidos
3. Agregar pruebas para nuevas funcionalidades

## Licencia

MIT

// === ARCHIVO: src/routes/productRoutes.ts ===
import { Router, Request, Response, NextFunction } from 'express';
import { ProductService } from '../services/productService';
import { CreateProductDTO, UpdateProductDTO } from '../models/productModel';

export class ProductRoutes {
    private router: Router;
    private productService: ProductService;

    constructor(productService: ProductService) {
        this.router = Router();
        this.productService = productService;
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get('/', this.getAllProducts.bind(this));
        this.router.get('/:id', this.getProductById.bind(this));
        this.router.post('/', this.createProduct.bind(this));
        this.router.put('/:id', this.updateProduct.bind(this));
        this.router.delete('/:id', this.deleteProduct.bind(this));
    }

    public getRouter(): Router {
        return this.router;
    }

    private async getAllProducts(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const products = await this.productService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            next(error);
        }
    }

    private async getProductById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const product = await this.productService.getProductById(id);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }

    private async createProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const createProductDTO: CreateProductDTO = req.body as CreateProductDTO;
            const product = await this.productService.createProduct(createProductDTO);
            res.status(201).json(product);
        } catch (error) {
            next(error);
        }
    }

    private async updateProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const updateProductDTO: UpdateProductDTO = req.body as UpdateProductDTO;
            const product = await this.productService.updateProduct(id, updateProductDTO);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }

    private async deleteProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            await this.productService.deleteProduct(id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

// === ARCHIVO: src/services/productService.ts ===
import { ProductDTO, CreateProductDTO, UpdateProductDTO } from '../models/productModel';
import { ProductValidator } from '../validators/productValidator';
import { DuplicateProductException } from '../exceptions/duplicateProductException';
import { HttpException } from '../exceptions/httpException';

export class ProductService {
    private products: Map<string, ProductDTO>;
    private productValidator: ProductValidator;

    constructor(productValidator: ProductValidator) {
        this.products = new Map<string, ProductDTO>();
        this.productValidator = productValidator;
        this.initializeSampleData();
    }

    private initializeSampleData(): void {
        const sampleProducts: CreateProductDTO[] = [
            { name: 'Laptop Pro 15', price: 1299.99, stock: 50, category: 'Electronics' },
            { name: 'Wireless Mouse', price: 29.99, stock: 200, category: 'Accessories' },
            { name: 'USB-C Hub', price: 49.99, stock: 150, category: 'Accessories' }
        ];

        sampleProducts.forEach((product, index) => {
            const id = `prod_${index + 1}`;
            const productDTO = new ProductDTO(
                id,
                product.name,
                product.price,
                product.stock,
                product.category
            );
            this.products.set(id, productDTO);
        });
    }

    public async getAllProducts(): Promise<ProductDTO[]> {
        return Array.from(this.products.values());
    }

    public async getProductById(id: string): Promise<ProductDTO | null> {
        const product = this.products.get(id);
        return product || null;
    }

    public async createProduct(createProductDTO: CreateProductDTO): Promise<ProductDTO> {
        this.productValidator.validateCreateProduct(createProductDTO, Array.from(this.products.values()));

        const existingProduct = this.findByName(createProductDTO.name, Array.from(this.products.values()));
        if (existingProduct) {
            throw new DuplicateProductException(`Product with name '${createProductDTO.name}' already exists`);
        }

        const id = `prod_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const productDTO = new ProductDTO(
            id,
            createProductDTO.name,
            createProductDTO.price,
            createProductDTO.stock,
            createProductDTO.category
        );

        this.products.set(id, productDTO);
        return productDTO;
    }

    public async updateProduct(id: string, updateProductDTO: UpdateProductDTO): Promise<ProductDTO | null> {
        const existingProduct = this.products.get(id);
        if (!existingProduct) {
            return null;
        }

        if (updateProductDTO.name && updateProductDTO.name !== existingProduct.name) {
            const nameConflict = this.findByName(updateProductDTO.name, Array.from(this.products.values()));
            if (nameConflict && nameConflict.id !== id) {
                throw new DuplicateProductException(`Product with name '${updateProductDTO.name}' already exists`);
            }
        }

        const updatedProduct = new ProductDTO(
            id,
            updateProductDTO.name ?? existingProduct.name,
            updateProductDTO.price ?? existingProduct.price,
            updateProductDTO.stock ?? existingProduct.stock,
            updateProductDTO.category ?? existingProduct.category
        );

        this.products.set(id, updatedProduct);
        return updatedProduct;
    }

    public async deleteProduct(id: string): Promise<boolean> {
        const exists = this.products.has(id);
        if (!exists) {
            throw new HttpException(404, `Product with id '${id}' not found`);
        }
        this.products.delete(id);
        return true;
    }

    private findByName(name: string, products: ProductDTO[]): ProductDTO | undefined {
        return products.find(p => p.name.toLowerCase() === name.toLowerCase());
    }
}

// === ARCHIVO: src/validators/productValidator.ts ===
import { CreateProductDTO, UpdateProductDTO, ProductDTO } from '../models/productModel';
import { NegativePriceException } from '../exceptions/negativePriceException';

export class ProductValidator {
    public validateCreateProduct(createProductDTO: CreateProductDTO, existingProducts: ProductDTO[]): void {
        this.validateName(createProductDTO.name);
        this.validatePrice(createProductDTO.price);
        this.validateStock(createProductDTO.stock);
        this.validateCategory(createProductDTO.category);
    }

    public validateUpdateProduct(updateProductDTO: UpdateProductDTO, existingProducts: ProductDTO[]): void {
        if (updateProductDTO.name !== undefined) {
            this.validateName(updateProductDTO.name);
        }
        if (updateProductDTO.price !== undefined) {
            this.validatePrice(updateProductDTO.price);
        }
        if (updateProductDTO.stock !== undefined) {
            this.validateStock(updateProductDTO.stock);
        }
        if (updateProductDTO.category !== undefined) {
            this.validateCategory(updateProductDTO.category);
        }
    }

    private validateName(name: string): void {
        if (!name || name.trim().length === 0) {
            throw new Error('Product name is required');
        }
        if (name.length < 3) {
            throw new Error('Product name must be at least 3 characters long');
        }
        if (name.length > 100) {
            throw new Error('Product name must not exceed 100 characters');
        }
    }

    private validatePrice(price: number): void {
        if (typeof price !== 'number') {
            throw new Error('Product price must be a number');
        }
        if (price < 0) {
            throw new NegativePriceException('Product price cannot be negative');
        }
        if (price > 1000000) {
            throw new Error('Product price exceeds maximum allowed value');
        }
    }

    private validateStock(stock: number): void {
        if (typeof stock !== 'number') {
            throw new Error('Product stock must be a number');
        }
        if (!Number.isInteger(stock)) {
            throw new Error('Product stock must be an integer');
        }
        if (stock < 0) {
            throw new Error('Product stock cannot be negative');
        }
        if (stock > 100000) {
            throw new Error('Product stock exceeds maximum allowed value');
        }
    }

    private validateCategory(category: string): void {
        if (!category || category.trim().length === 0) {
            throw new Error('Product category is required');
        }
        if (category.length > 50) {
            throw new Error('Product category must not exceed 50 characters');
        }
    }
}

// === ARCHIVO: src/exceptions/httpException.ts ===
export class HttpException extends Error {
  public readonly statusCode: number;
  public readonly errorCode?: string;
  public readonly timestamp: Date;
  public readonly isOperational: boolean;

  constructor(
    message: string,
    statusCode: number,
    errorCode?: string,
    isOperational: boolean = true
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.timestamp = new Date();
    this.isOperational = isOperational;

    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }

  public toJSON(): object {
    return {
      name: this.name,
      message: this.message,
      statusCode: this.statusCode,
      errorCode: this.errorCode,
      timestamp: this.timestamp.toISOString(),
      isOperational: this.isOperational,
    };
  }

  public static isHttpException(error: unknown): error is HttpException {
    return error instanceof HttpException;
  }

  public getHttpStatusText(): string {
    const statusTexts: Record<number, string> = {
      400: 'Bad Request',
      401: 'Unauthorized',
      403: 'Forbidden',
      404: 'Not Found',
      409: 'Conflict',
      422: 'Unprocessable Entity',
      500: 'Internal Server Error',
    };
    return statusTexts[this.statusCode] || 'Unknown Error';
  }

  public getFullMessage(): string {
    return `[${this.statusCode} ${this.getHttpStatusText()}]: ${this.message}`;
  }
}

// === ARCHIVO: src/exceptions/duplicateProductException.ts ===
import { HttpException } from './httpException';

export class DuplicateProductException extends HttpException {
  public readonly productName: string;
  public readonly existingProductId?: string;
  public readonly suggestedAlternatives?: string[];

  constructor(
    productName: string,
    existingProductId?: string,
    message?: string
  ) {
    const defaultMessage = message || `El producto con nombre '${productName}' ya existe en el catálogo`;
    super(defaultMessage, 409, 'DUPLICATE_PRODUCT', true);
    
    this.productName = productName;
    this.existingProductId = existingProductId;
    this.suggestedAlternatives = this.generateAlternatives(productName);
  }

  private generateAlternatives(name: string): string[] {
    const alternatives: string[] = [];
    const baseName = name.trim();
    
    alternatives.push(`${baseName} (Original)`);
    alternatives.push(`${baseName} - Versión Actualizada`);
    alternatives.push(`${baseName} (Nouvelle versión)`);
    
    return alternatives;
  }

  public toJSON(): object {
    return {
      ...super.toJSON(),
      productName: this.productName,
      existingProductId: this.existingProductId,
      suggestedAlternatives: this.suggestedAlternatives,
    };
  }

  public getDuplicateDetails(): string {
    let details = `Producto duplicado: '${this.productName}'`;
    if (this.existingProductId) {
      details += ` (ID existente: ${this.existingProductId})`;
    }
    return details;
  }

  public static isDuplicateProductException(error: unknown): error is DuplicateProductException {
    return error instanceof DuplicateProductException;
  }

  public getErrorContext(): Record<string, unknown> {
    return {
      errorType: 'DuplicateProduct',
      requestedName: this.productName,
      conflictWith: this.existingProductId,
      httpMethod: 'POST',
      endpoint: '/products',
      suggestion: 'Utilice un nombre diferente o verifique el producto existente',
    };
  }
}

// === ARCHIVO: src/exceptions/negativePriceException.ts ===
import { HttpException } from './httpException';

export class NegativePriceException extends HttpException {
  public readonly providedPrice: number;
  public readonly absoluteValue: number;
  public readonly productName?: string;
  public readonly minValidPrice: number;

  constructor(
    providedPrice: number,
    productName?: string,
    message?: string
  ) {
    const defaultMessage = message 
      || `El precio no puede ser negativo. Valor recibido: ${providedPrice}`;
    
    super(defaultMessage, 400, 'NEGATIVE_PRICE', true);
    
    this.providedPrice = providedPrice;
    this.absoluteValue = Math.abs(providedPrice);
    this.productName = productName;
    this.minValidPrice = 0;
  }

  public toJSON(): object {
    return {
      ...super.toJSON(),
      providedPrice: this.providedPrice,
      absoluteValue: this.absoluteValue,
      productName: this.productName,
      minValidPrice: this.minValidPrice,
    };
  }

  public getValidationError(): string {
    const productInfo = this.productName ? ` para el producto '${this.productName}'` : '';
    return `Validación fallida${productInfo}: el precio ${this.providedPrice} es menor que el mínimo permitido (${this.minValidPrice})`;
  }

  public static isNegativePriceException(error: unknown): error is NegativePriceException {
    return error instanceof NegativePriceException;
  }

  public getCorrectionSuggestion(): string {
    if (this.providedPrice < 0) {
      return `Utilice el valor absoluto (${this.absoluteValue}) o un precio válido mayor o igual a 0`;
    }
    return 'Proporcione un precio válido mayor o igual a 0';
  }

  public getErrorContext(): Record<string, unknown> {
    return {
      errorType: 'NegativePrice',
      providedValue: this.providedPrice,
      absoluteValue: this.absoluteValue,
      minAllowed: this.minValidPrice,
      productName: this.productName,
      httpMethod: 'POST',
      endpoint: '/products',
      suggestion: this.getCorrectionSuggestion(),
    };
  }

  public static validatePrice(price: number, productName?: string): void {
    if (typeof price !== 'number' || isNaN(price)) {
      throw new NegativePriceException(price, productName, 'El precio debe ser un número válido');
    }
    if (price < 0) {
      throw new NegativePriceException(price, productName);
    }
  }
}

// === ARCHIVO: src/middlewares/errorMiddleware.ts ===
import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../exceptions/httpException.js';

export interface ErrorResponse {
  error: string;
  details?: unknown;
  statusCode: number;
}

export const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  let statusCode = 500;
  let message = 'Internal Server Error';
  let details: unknown = undefined;

  if (err instanceof HttpException) {
    statusCode = err.statusCode;
    message = err.message;
    details = err.details;
  } else if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation failed';
    details = (err as any).errors || err.message;
  } else if (err.name === 'CastError') {
    statusCode = 400;
    message = 'Invalid ID format';
    details = err.message;
  } else if (err.name === 'MongoServerError' || err.name === 'MongoError') {
    statusCode = 500;
    message = 'Database operation failed';
    details = err.message;
  }

  const response: ErrorResponse = {
    error: message,
    statusCode,
  };

  if (details && process.env.NODE_ENV !== 'production') {
    response.details = details;
  }

  res.status(statusCode).json(response);
};

// === ARCHIVO: src/types/productTypes.ts ===
import { IsString, IsNumber, IsPositive, IsOptional, Min, MaxLength, MinLength } from 'class-validator';

export interface ProductEntity {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class ProductDTO implements ProductEntity {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(data: ProductEntity) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.stock = data.stock;
    this.category = data.category;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  toJSON(): Record<string, unknown> {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      stock: this.stock,
      category: this.category,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

export class CreateProductDTO {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @Min(0)
  @Max(999999)
  stock: number;

  @IsString()
  @MinLength(1)
  @MaxLength(50)
  category: string;

  constructor(data: Partial<CreateProductDTO>) {
    this.name = data.name || '';
    this.price = data.price || 0;
    this.stock = data.stock || 0;
    this.category = data.category || '';
  }

  static fromRequest(body: unknown): CreateProductDTO {
    return new CreateProductDTO(body as Partial<CreateProductDTO>);
  }
}

export class UpdateProductDTO {
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  price?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(999999)
  stock?: number;

  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  category?: string;

  constructor(data: Partial<UpdateProductDTO>) {
    this.name = data.name;
    this.price = data.price;
    this.stock = data.stock;
    this.category = data.category;
  }

  static fromRequest(body: unknown): UpdateProductDTO {
    return new UpdateProductDTO(body as Partial<UpdateProductDTO>);
  }

  hasAnyField(): boolean {
    return !!(
      this.name !== undefined ||
      this.price !== undefined ||
      this.stock !== undefined ||
      this.category !== undefined
    );
  }
}

export interface ProductQueryParams {
  page?: number;
  limit?: number;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: 'name' | 'price' | 'stock' | 'category';
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// === ARCHIVO: tests/productRoutes.spec.ts ===
import request from 'supertest';
import { Express } from 'express';
import { ProductDTO, CreateProductDTO } from '../src/types/productTypes.js';

const mockProducts: ProductDTO[] = [
  new ProductDTO({
    id: '1',
    name: 'Laptop Pro 15',
    price: 1299.99,
    stock: 50,
    category: 'electronics',
  }),
  new ProductDTO({
    id: '2',
    name: 'Wireless Mouse',
    price: 29.99,
    stock: 200,
    category: 'electronics',
  }),
];

let app: Express;

beforeAll(() => {
  const { App } = require('../src/app.js');
  const appInstance = new App();
  app = appInstance.express;
});

describe('GET /products', () => {
  it('should return all products', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should return empty array when no products exist', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });

  it('should support category filter query', async () => {
    const response = await request(app).get('/products?category=electronics');
    expect(response.status).toBe(200);
    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty('category');
    }
  });
});

describe('GET /products/:id', () => {
  it('should return a product by id', async () => {
    const response = await request(app).get('/products/1');
    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.status).toBeLessThan(500);
  });

  it('should return 404 for non-existent product', async () => {
    const response = await request(app).get('/products/non-existent-id');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error');
  });

  it('should return 400 for invalid id format', async () => {
    const response = await request(app).get('/products/invalid-id-format');
    expect(response.status).toBeGreaterThanOrEqual(400);
  });
});

describe('POST /products', () => {
  const validProduct: Partial<CreateProductDTO> = {
    name: 'Test Product',
    price: 99.99,
    stock: 100,
    category: 'test',
  };

  it('should create a new product with valid data', async () => {
    const response = await request(app).post('/products').send(validProduct);
    expect(response.status).toBeGreaterThanOrEqual(201);
    expect(response.status).toBeLessThan(500);
  });

  it('should return 400 when name is missing', async () => {
    const invalidProduct = { ...validProduct, name: undefined };
    const response = await request(app).post('/products').send(invalidProduct);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });

  it('should return 400 when price is negative', async () => {
    const invalidProduct = { ...validProduct, price: -10 };
    const response = await request(app).post('/products').send(invalidProduct);
    expect(response.status).toBe(400);
  });

  it('should return 400 when price is zero', async () => {
    const invalidProduct = { ...validProduct, price: 0 };
    const response = await request(app).post('/products').send(invalidProduct);
    expect(response.status).toBe(400);
  });

  it('should return 400 when stock is negative', async () => {
    const invalidProduct = { ...validProduct, stock: -5 };
    const response = await request(app).post('/products').send(invalidProduct);
    expect(response.status).toBe(400);
  });

  it('should return 400 when category is missing', async () => {
    const invalidProduct = { ...validProduct, category: '' };
    const response = await request(app).post('/products').send(invalidProduct);
    expect(response.status).toBe(400);
  });
});

describe('PUT /products/:id', () => {
  const updateData = {
    name: 'Updated Product Name',
    price: 149.99,
  };

  it('should update an existing product', async () => {
    const response = await request(app).put('/products/1').send(updateData);
    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.status).toBeLessThan(500);
  });

  it('should return 404 when updating non-existent product', async () => {
    const response = await request(app).put('/products/non-existent-id').send(updateData);
    expect(response.status).toBe(404);
  });

  it('should return 400 when price is negative', async () => {
    const invalidUpdate = { price: -50 };
    const response = await request(app).put('/products/1').send(invalidUpdate);
    expect(response.status).toBe(400);
  });

  it('should return 400 when stock is negative', async () => {
    const invalidUpdate = { stock: -10 };
    const response = await request(app).put('/products/1').send(invalidUpdate);
    expect(response.status).toBe(400);
  });
});

describe('DELETE /products/:id', () => {
  it('should delete an existing product', async () => {
    const response = await request(app).delete('/products/1');
    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.status).toBeLessThan(500);
  });

  it('should return 404 when deleting non-existent product', async () => {
    const response = await request(app).delete('/products/non-existent-id');
    expect(response.status).toBe(404);
  });

  it('should return 400 for invalid id format', async () => {
    const response = await request(app).delete('/products/');
    expect(response.status).toBeGreaterThanOrEqual(400);
  });
});
```
