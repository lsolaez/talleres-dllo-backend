# Talleres de Desarrollo - Backend API

Backend RESTful API desarrollado con Node.js y Express para implementar las funciones de los talleres de desarrollo.

## 🚀 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar el servidor:
```bash
npm start
```

Para desarrollo con recarga automática:
```bash
npm run dev
```

El servidor estará disponible en: `http://localhost:5134`

## 📚 Documentación de API

### Base URL
```
http://localhost:5134/api
```

### 🎨 Documentación Interactiva (Swagger UI)

La documentación interactiva de la API está disponible en:
```
http://localhost:5134/api-docs
```

Esta interfaz te permite:
- Ver todos los endpoints disponibles
- Probar los endpoints directamente desde el navegador
- Ver ejemplos de requests y responses
- Visualizar esquemas de datos

---

## Taller 1 - Funciones Matemáticas Básicas

### 1. Convertir Temperatura
Convierte temperatura de Celsius a Fahrenheit.

**Endpoint:** `POST /api/taller1/convertir-temp`

**Body:**
```json
{
  "celsius": 25
}
```

**Respuesta:**
```json
{
  "celsius": 25,
  "fahrenheit": 77
}
```

### 2. Resolver Ecuación Cuadrática
Resuelve ecuaciones de la forma ax² + bx + c = 0.

**Endpoint:** `POST /api/taller1/resolver-ecuacion`

**Body:**
```json
{
  "a": 1,
  "b": 5,
  "c": 4,
  "d": 0
}
```

**Parámetros:**
- `a`, `b`, `c`: Coeficientes de la ecuación
- `d`: 0 para solución positiva, 1 para solución negativa

**Respuesta:**
```json
{
  "ecuacion": "1x² + 5x + 4 = 0",
  "solucion": -1
}
```

### 3. Verificar Paridad (Óptimo)
Determina si un número es par o impar usando operación módulo.

**Endpoint:** `GET /api/taller1/paridad/:num`

**Ejemplo:** `GET /api/taller1/paridad/582`

**Respuesta:**
```json
{
  "numero": 582,
  "resultado": "por mejor paridad El número es par"
}
```

### 4. Verificar Paridad (Subóptimo)
Determina si un número es par o impar (implementación básica para números 0-10).

**Endpoint:** `GET /api/taller1/paridad-peor/:num`

**Ejemplo:** `GET /api/taller1/paridad-peor/8`

**Respuesta:**
```json
{
  "numero": 8,
  "resultado": "Por peor paridad numero es par"
}
```

---

## Taller 2 - Operaciones con Arreglos

### 1. Encontrar Máximo
Encuentra el valor máximo en una lista.

**Endpoint:** `POST /api/taller2/find-max`

**Body:**
```json
{
  "list": [1, 2, 6, 4, 5, 2, 8, 1, 23, 10]
}
```

**Respuesta:**
```json
{
  "lista": [1, 2, 6, 4, 5, 2, 8, 1, 23, 10],
  "maximo": 23
}
```

### 2. Verificar Inclusión
Verifica si un elemento existe en la lista.

**Endpoint:** `POST /api/taller2/includes`

**Body:**
```json
{
  "list": [1, 2, 3, 4, 5],
  "element": 3
}
```

**Respuesta:**
```json
{
  "lista": [1, 2, 3, 4, 5],
  "elemento": 3,
  "existe": true
}
```

### 3. Sumar Elementos
Suma todos los elementos de una lista.

**Endpoint:** `POST /api/taller2/sum`

**Body:**
```json
{
  "list": [1, 2, 3, 4, 5]
}
```

**Respuesta:**
```json
{
  "lista": [1, 2, 3, 4, 5],
  "suma": 15
}
```

### 4. Números Faltantes
Encuentra los números faltantes en un rango.

**Endpoint:** `POST /api/taller2/missing-numbers`

**Body:**
```json
{
  "list": [1, 2, 4, 5, 7]
}
```

**Respuesta:**
```json
{
  "lista": [1, 2, 4, 5, 7],
  "numerosFaltantes": [3, 6]
}
```

---

## Taller 3 - Manipulación de Strings y Algoritmos

### 1. Desglosar String
Cuenta vocales o consonantes en un texto.

**Endpoint:** `POST /api/taller3/desglosar-string`

**Body:**
```json
{
  "texto": "Murcielagos 123!",
  "tipo": "vocales"
}
```

**Tipos:** `"vocales"` o `"consonantes"`

**Respuesta:**
```json
{
  "texto": "Murcielagos 123!",
  "tipo": "vocales",
  "cantidad": 5
}
```

### 2. Two Sum
Encuentra dos números que sumen el objetivo.

**Endpoint:** `POST /api/taller3/two-sum`

**Body:**
```json
{
  "nums": [2, 7, 11, 15],
  "objetivo": 9
}
```

**Respuesta:**
```json
{
  "nums": [2, 7, 11, 15],
  "objetivo": 9,
  "indices": [0, 1]
}
```

### 3. Conversión Romana
Convierte un número romano a decimal.

**Endpoint:** `POST /api/taller3/conversion-romana`

**Body:**
```json
{
  "cadenaRomana": "XIV"
}
```

**Respuesta:**
```json
{
  "romano": "XIV",
  "decimal": 14,
  "valido": true
}
```

### 4. Descomposición
Descompone una palabra en dos palabras del diccionario.

**Endpoint:** `POST /api/taller3/descomposicion`

**Body:**
```json
{
  "cadena": "notebook, note, boo, pen, pe, n, book"
}
```

**Respuesta:**
```json
{
  "cadena": "notebook, note, boo, pen, pe, n, book",
  "palabras": ["note", "book"]
}
```

---

## 🧪 Ejemplos de Uso

### Con cURL

```bash
# Convertir temperatura
curl -X POST http://localhost:5134/api/taller1/convertir-temp \
  -H "Content-Type: application/json" \
  -d '{"celsius": 25}'

# Encontrar máximo
curl -X POST http://localhost:5134/api/taller2/find-max \
  -H "Content-Type: application/json" \
  -d '{"list": [1, 2, 6, 4, 5, 2, 8, 1, 23, 10]}'

# Desglosar string
curl -X POST http://localhost:5134/api/taller3/desglosar-string \
  -H "Content-Type: application/json" \
  -d '{"texto": "Murcielagos", "tipo": "vocales"}'
```

### Con JavaScript (fetch)

```javascript
// Ejemplo de conversión de temperatura
async function convertirTemperatura() {
  const response = await fetch('http://localhost:5134/api/taller1/convertir-temp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ celsius: 25 })
  });
  
  const data = await response.json();
  console.log(data);
}

// Ejemplo de encontrar máximo
async function encontrarMaximo() {
  const response = await fetch('http://localhost:5134/api/taller2/find-max', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ list: [1, 2, 6, 4, 5, 2, 8, 1, 23, 10] })
  });
  
  const data = await response.json();
  console.log(data);
}
```

---

## 🏗️ Estructura del Proyecto

```
talleres-dllo-backend/
├── controllers/          # Lógica de negocio
│   ├── taller1Controller.js
│   ├── taller2Controller.js
│   └── taller3Controller.js
├── routes/               # Definición de rutas
│   ├── taller1Routes.js
│   ├── taller2Routes.js
│   └── taller3Routes.js
├── server.js             # Servidor principal
├── swagger.js            # Configuración de Swagger
├── package.json          # Dependencias
├── README.md             # Esta documentación
├── taller1.js            # Código original
├── taller2.js            # Código original
└── taller-03.js          # Código original
```

---

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución
- **Express**: Framework web
- **Swagger/OpenAPI**: Documentación interactiva de la API
- **CORS**: Manejo de políticas de origen cruzado
- **Nodemon**: Recarga automática en desarrollo

---

## 📝 Notas

- Todos los endpoints aceptan y devuelven JSON
- El servidor incluye validación de entrada para todos los parámetros
- Los errores se manejan con códigos HTTP apropiados (400, 500)
- El puerto por defecto es 5134, pero puede configurarse con la variable de entorno `PORT`

### 🔧 Solución de Problemas

**Error: "address already in use :::3000"**

Si el puerto 3000 ya está en uso, puedes:

1. **Detener el proceso existente** (Windows PowerShell):
```powershell
Get-NetTCPConnection -LocalPort 5134 | Select-Object -ExpandProperty OwningProcess | Stop-Process -Force
```

2. **O usar otro puerto**:
```bash
set PORT=3000 && npm start
```

---

## 🔒 Manejo de Errores

La API incluye manejo de errores robusto:

- **400 Bad Request**: Parámetros inválidos o faltantes
- **404 Not Found**: Ruta no encontrada
- **500 Internal Server Error**: Error del servidor

Ejemplo de respuesta de error:
```json
{
  "error": "list debe ser un array"
}
```
