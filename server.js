const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');

// Importar rutas
const taller1Routes = require('./routes/taller1Routes');
const taller2Routes = require('./routes/taller2Routes');
const taller3Routes = require('./routes/taller3Routes');

const app = express();
const PORT = process.env.PORT || 5134;

// Middlewares
app.use(cors());
app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "Talleres API - Documentación"
}));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Página de bienvenida
 *     description: Información general de la API y endpoints disponibles
 *     tags: []
 *     responses:
 *       200:
 *         description: Mensaje de bienvenida
 */
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenido al API de Talleres de Desarrollo',
        version: '1.0.0',
        documentacion: `http://localhost:${PORT}/api-docs`,
        endpoints: {
            taller1: '/api/taller1',
            taller2: '/api/taller2',
            taller3: '/api/taller3'
        }
    });
});

// Rutas de API
app.use('/api/taller1', taller1Routes);
app.use('/api/taller2', taller2Routes);
app.use('/api/taller3', taller3Routes);

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).json({
        error: 'Ruta no encontrada',
        mensaje: 'La ruta solicitada no existe en este servidor'
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
    console.log(`📚 Documentación Swagger disponible en http://localhost:${PORT}/api-docs`);
});

module.exports = app;

