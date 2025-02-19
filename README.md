#API Dr Envios

## 📌 Descripción

Este proyecto es una API desarrollada con Node.js y TypeScript, siguiendo buenas prácticas de desarrollo, arquitectura hexagonal y tipado estático para mayor seguridad y mantenibilidad. 

## 🚀¿Por qué TypeScript?

Escogí Typescript porque es javascript con super poderes debido a su tipado estricto, lo cual me permite mantener una estrcutura uniforme, escalar la aplicación a futuro y depurar errores en tiempo de ejecución. Como manejamos una arquitecutra hexagonal y nos enfocamos en la modularida, typescript es el lenguaje aporpiado para lograrlo.

## 🛠 Tecnologías utilizadas

Node.js - Entorno de ejecución para JavaScript en el servidor.

TypeScript - Superset tipado de JavaScript.

Express.js - Framework para crear APIs REST.

MongoDB / PostgreSQL - Base de datos (según configuración del proyecto).

Sequelize / Mongoose - ORM/ODM para manejar la base de datos.

Jest / Mocha - Pruebas unitarias.

Docker - Contenerización para despliegue eficiente.

Instalación

Requisitos previos

Node.js (versión 18 o superior)

npm o yarn

Base de datos configurada (MongoDB o PostgreSQL según el caso)

Pasos para la instalación

# Clonar el repositorio
git clone https://github.com/usuario/proyecto-api-node.git
cd proyecto-api-node

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Compilar TypeScript
tsc

# Iniciar el servidor en desarrollo
npm run dev

Scripts disponibles

"scripts": {
  "dev": "ts-node-dev --respawn src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js",
  "test": "jest"
}

---

## 📡 Uso de la API
### 🔗 Endpoints principales
#### 1️⃣ Obtener todos los productos
```http
GET /api/productos
```
#### 2️⃣ Obtener un producto por ID
```http
GET /api/productos/:id
```
#### 3️⃣ Crear un nuevo producto
```http
POST /api/productos
Content-Type: application/json
{
  "nombre": "Tractor John Deere",
  "precio": 15000,
  "stock": 10
}
```

##Licencia

Este proyecto está bajo la licencia MIT.
