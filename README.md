# API Dr Envios

## 📌 Descripción

Este proyecto es una API desarrollada con Node.js, Express y TypeScript, siguiendo buenas prácticas de desarrollo, arquitectura hexagonal y tipado estático para mayor seguridad y mantenibilidad. La API trae los productos que serán renderizados en el fronted y también permite agregarlos a una colección de precios especiales y consultarlos para afectar el valor inicial de los productos.

## 🚀¿Por qué TypeScript?

Escogí Typescript porque es javascript con super poderes debido a su tipado estricto, lo cual me permite mantener una estrcutura uniforme, escalar la aplicación a futuro y depurar errores en tiempo de ejecución. Como manejamos una arquitecutra hexagonal y nos enfocamos en la modularida, typescript es el lenguaje aporpiado para lograrlo.

## 🛠 Tecnologías utilizadas

Node.js - Entorno de ejecución para JavaScript en el servidor.

TypeScript - Superset tipado de JavaScript.

Express.js - Framework para crear APIs REST.

MongoDB / Proporcionada por Dr Envíos.

Mongoose - ORM/ODM para manejar la base de datos.


Instalación

Requisitos previos

Node.js (versión 18 o superior)

npm o yarn

Base de datos configurada - MongoDB 

Pasos para la instalación

# Clonar el repositorio
git clone https://github.com/usuario/proyecto-api-node.git
cd proyecto-api-node

# Instalar dependencias
npm install

# Configurar variables de entorno
ver env.example

# Compilar TypeScript
npm run build

# Iniciar el servidor en desarrollo
npm run dev 

# Iniciar el servidor en producción
npm run start

Scripts disponibles

"scripts": {
  start:dev": "cross-env NODE_ENV=development npx nodemon",
  "build": "tsc",
  "start": "cross-env NODE_ENV=production node dist/index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}

---

## 📡 Uso de la API
### 🔗 Endpoints principales
#### 1️⃣ Obtener todos los productos
```http
GET /productos
```
#### 2️⃣ Obtener todos los precios especiales
```http
GET /specialPrices
```
#### 3️⃣ Crear un precio especial
```http
POST /specialPrices
Content-Type: application/json
{
  "document": "34569885",
  "name": "Gabriela Guzman" 
  "productId": "6750ef7cfce1f2f80959a98b",
}
```
#### 4️⃣ Obtener todos los precios especiales por documento 
```http
GET /specialPrices/user/:id
```


