const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Talleres de Desarrollo API',
      version: '1.0.0',
      description: 'Backend RESTful API desarrollado con Node.js y Express para implementar las funciones de los talleres de desarrollo',
      contact: {
        name: 'API Support'
      },
    },
    servers: [
      {
        url: 'http://localhost:5134',
        description: 'Servidor de desarrollo',
      },
    ],
    tags: [
      {
        name: 'Taller 1',
        description: 'Funciones Matemáticas Básicas'
      },
      {
        name: 'Taller 2',
        description: 'Operaciones con Arreglos'
      },
      {
        name: 'Taller 3',
        description: 'Manipulación de Strings y Algoritmos'
      }
    ],
  },
  apis: ['./routes/*.js', './server.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;

