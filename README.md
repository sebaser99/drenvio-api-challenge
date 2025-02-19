Proyecto API Node.js con TypeScript

Descripción

Este proyecto es una API desarrollada con Node.js y TypeScript, siguiendo buenas prácticas de desarrollo, arquitectura modular y tipado estático para mayor seguridad y mantenibilidad.

¿Por qué TypeScript?

TypeScript ofrece múltiples ventajas sobre JavaScript para el desarrollo de APIs, entre ellas:

Tipado estático: Reduce errores en tiempo de ejecución y facilita el mantenimiento.

Autocompletado y mejor experiencia de desarrollo: Gracias a su integración con editores como VSCode.

Mayor escalabilidad: Facilita la refactorización y modularización del código.

Compatibilidad con JavaScript: Se puede integrar en proyectos existentes sin problemas.

Tecnologías utilizadas

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

Uso de la API

Endpoints principales

1. Obtener todos los productos

GET /api/productos

2. Obtener un producto por ID

GET /api/productos/:id

3. Crear un nuevo producto

POST /api/productos
Content-Type: application/json
{
  "nombre": "Tractor John Deere",
  "precio": 15000,
  "stock": 10
}

Pruebas

Ejecutar pruebas unitarias:

npm run test

Despliegue con Docker

# Construir la imagen
docker build -t api-node-ts .

# Ejecutar el contenedor
docker run -p 3000:3000 api-node-ts

Contribuciones

Hacer un fork del repositorio.

Crear una rama con la nueva funcionalidad.

Hacer un pull request.

Licencia

Este proyecto está bajo la licencia MIT.