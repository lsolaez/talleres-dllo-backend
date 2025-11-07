const express = require('express');
const router = express.Router();
const {
    ConvertidorTemp,
    Resolvedor,
    mejorParidad,
    peorParidad
} = require('../controllers/taller1Controller');

/**
 * @swagger
 * /api/taller1/convertir-temp:
 *   post:
 *     summary: Convierte temperatura de Celsius a Fahrenheit
 *     tags: [Taller 1]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - celsius
 *             properties:
 *               celsius:
 *                 type: number
 *                 description: Temperatura en Celsius
 *                 example: 25
 *     responses:
 *       200:
 *         description: Conversión exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 celsius:
 *                   type: number
 *                   example: 25
 *                 fahrenheit:
 *                   type: number
 *                   example: 77
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.post('/convertir-temp', (req, res) => {
    try {
        const { celsius } = req.body;
        
        if (typeof celsius !== 'number') {
            return res.status(400).json({
                error: 'celsius debe ser un número'
            });
        }
        
        const resultado = ConvertidorTemp(celsius);
        res.json({ celsius, fahrenheit: resultado });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/taller1/resolver-ecuacion:
 *   post:
 *     summary: Resuelve ecuaciones cuadráticas (ax² + bx + c = 0)
 *     tags: [Taller 1]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - a
 *               - b
 *               - c
 *               - d
 *             properties:
 *               a:
 *                 type: number
 *                 description: Coeficiente de x²
 *                 example: 1
 *               b:
 *                 type: number
 *                 description: Coeficiente de x
 *                 example: 5
 *               c:
 *                 type: number
 *                 description: Término independiente
 *                 example: 4
 *               d:
 *                 type: number
 *                 description: 0 para solución positiva, 1 para solución negativa
 *                 example: 0
 *     responses:
 *       200:
 *         description: Solución exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ecuacion:
 *                   type: string
 *                   example: "1x² + 5x + 4 = 0"
 *                 solucion:
 *                   type: number
 *                   example: -1
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.post('/resolver-ecuacion', (req, res) => {
    try {
        const { a, b, c, d } = req.body;
        
        if (typeof a !== 'number' || typeof b !== 'number' || 
            typeof c !== 'number' || typeof d !== 'number') {
            return res.status(400).json({
                error: 'Todos los parámetros (a, b, c, d) deben ser números'
            });
        }
        
        if (a === 0) {
            return res.status(400).json({
                error: 'a no puede ser 0 (no es una ecuación cuadrática)'
            });
        }
        
        const resultado = Resolvedor(a, b, c, d);
        res.json({ 
            ecuacion: `${a}x² + ${b}x + ${c} = 0`,
            solucion: resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/taller1/paridad/{num}:
 *   get:
 *     summary: Determina si un número es par o impar (método óptimo)
 *     tags: [Taller 1]
 *     parameters:
 *       - in: path
 *         name: num
 *         required: true
 *         schema:
 *           type: number
 *         description: Número a evaluar
 *         example: 582
 *     responses:
 *       200:
 *         description: Verificación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 numero:
 *                   type: number
 *                   example: 582
 *                 resultado:
 *                   type: string
 *                   example: "por mejor paridad El número es par"
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.get('/paridad/:num', (req, res) => {
    try {
        const num = parseFloat(req.params.num);
        
        if (isNaN(num)) {
            return res.status(400).json({
                error: 'El parámetro debe ser un número'
            });
        }
        
        const resultado = mejorParidad(num);
        res.json({ 
            numero: num,
            resultado: resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/taller1/paridad-peor/{num}:
 *   get:
 *     summary: Determina si un número es par o impar (método subóptimo para números 0-10)
 *     tags: [Taller 1]
 *     parameters:
 *       - in: path
 *         name: num
 *         required: true
 *         schema:
 *           type: number
 *         description: Número a evaluar (0-10)
 *         example: 8
 *     responses:
 *       200:
 *         description: Verificación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 numero:
 *                   type: number
 *                   example: 8
 *                 resultado:
 *                   type: string
 *                   example: "Por peor paridad numero es par"
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.get('/paridad-peor/:num', (req, res) => {
    try {
        const num = parseInt(req.params.num);
        
        if (isNaN(num)) {
            return res.status(400).json({
                error: 'El parámetro debe ser un número entero'
            });
        }
        
        const resultado = peorParidad(num);
        res.json({ 
            numero: num,
            resultado: resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
