const express = require('express');
const router = express.Router();
const {
    desglosarString,
    twoSum,
    conversionRomana,
    descomposicion
} = require('../controllers/taller3Controller');

/**
 * @swagger
 * /api/taller3/desglosar-string:
 *   post:
 *     summary: Cuenta vocales o consonantes en un texto
 *     tags: [Taller 3]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - texto
 *               - tipo
 *             properties:
 *               texto:
 *                 type: string
 *                 description: Texto a analizar
 *                 example: "Murcielagos 123!"
 *               tipo:
 *                 type: string
 *                 enum: [vocales, consonantes]
 *                 description: Tipo de caracteres a contar
 *                 example: vocales
 *     responses:
 *       200:
 *         description: Conteo exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 texto:
 *                   type: string
 *                 tipo:
 *                   type: string
 *                 cantidad:
 *                   type: number
 *                   example: 5
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.post('/desglosar-string', (req, res) => {
    try {
        const { texto, tipo } = req.body;
        
        if (typeof texto !== 'string') {
            return res.status(400).json({
                error: 'texto debe ser una cadena de texto'
            });
        }
        
        if (!['vocales', 'consonantes'].includes(tipo)) {
            return res.status(400).json({
                error: 'tipo debe ser "vocales" o "consonantes"'
            });
        }
        
        const resultado = desglosarString(texto, tipo);
        res.json({ 
            texto,
            tipo,
            cantidad: resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/taller3/two-sum:
 *   post:
 *     summary: Encuentra dos números que sumen el objetivo
 *     tags: [Taller 3]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nums
 *               - objetivo
 *             properties:
 *               nums:
 *                 type: array
 *                 items:
 *                   type: number
 *                 description: Array de números
 *                 example: [2, 7, 11, 15]
 *               objetivo:
 *                 type: number
 *                 description: Suma objetivo
 *                 example: 9
 *     responses:
 *       200:
 *         description: Búsqueda exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nums:
 *                   type: array
 *                   items:
 *                     type: number
 *                 objetivo:
 *                   type: number
 *                 indices:
 *                   type: array
 *                   items:
 *                     type: number
 *                   example: [0, 1]
 *                 mensaje:
 *                   type: string
 *                   example: "No se encontró ninguna combinación que sume el objetivo"
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.post('/two-sum', (req, res) => {
    try {
        const { nums, objetivo } = req.body;
        
        if (!Array.isArray(nums)) {
            return res.status(400).json({
                error: 'nums debe ser un array'
            });
        }
        
        if (!nums.every(item => typeof item === 'number')) {
            return res.status(400).json({
                error: 'Todos los elementos de nums deben ser números'
            });
        }
        
        if (typeof objetivo !== 'number') {
            return res.status(400).json({
                error: 'objetivo debe ser un número'
            });
        }
        
        const resultado = twoSum(nums, objetivo);
        
        if (resultado === null) {
            res.json({ 
                nums,
                objetivo,
                indices: null,
                mensaje: 'No se encontró ninguna combinación que sume el objetivo'
            });
        } else {
            res.json({ 
                nums,
                objetivo,
                indices: resultado 
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/taller3/conversion-romana:
 *   post:
 *     summary: Convierte un número romano a decimal
 *     tags: [Taller 3]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cadenaRomana
 *             properties:
 *               cadenaRomana:
 *                 type: string
 *                 description: Número en formato romano
 *                 example: XIV
 *     responses:
 *       200:
 *         description: Conversión exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 romano:
 *                   type: string
 *                 decimal:
 *                   type: number
 *                   example: 14
 *                 valido:
 *                   type: boolean
 *                 mensaje:
 *                   type: string
 *                   example: "Número romano inválido"
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.post('/conversion-romana', (req, res) => {
    try {
        const { cadenaRomana } = req.body;
        
        if (typeof cadenaRomana !== 'string') {
            return res.status(400).json({
                error: 'cadenaRomana debe ser una cadena de texto'
            });
        }
        
        const resultado = conversionRomana(cadenaRomana);
        
        if (isNaN(resultado)) {
            res.json({ 
                romano: cadenaRomana,
                decimal: null,
                valido: false,
                mensaje: 'Número romano inválido'
            });
        } else {
            res.json({ 
                romano: cadenaRomana,
                decimal: resultado,
                valido: true
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/taller3/descomposicion:
 *   post:
 *     summary: Descompone una palabra en dos palabras del diccionario
 *     tags: [Taller 3]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cadena
 *             properties:
 *               cadena:
 *                 type: string
 *                 description: Cadena con palabra objetivo y diccionario separados por coma
 *                 example: "notebook, note, boo, pen, pe, n, book"
 *     responses:
 *       200:
 *         description: Descomposición exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cadena:
 *                   type: string
 *                 palabras:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["note", "book"]
 *                 mensaje:
 *                   type: string
 *                   example: "No se encontró ninguna descomposición válida"
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.post('/descomposicion', (req, res) => {
    try {
        const { cadena } = req.body;
        
        if (typeof cadena !== 'string') {
            return res.status(400).json({
                error: 'cadena debe ser una cadena de texto'
            });
        }
        
        const resultado = descomposicion(cadena);
        
        if (resultado === null) {
            res.json({ 
                cadena,
                palabras: null,
                mensaje: 'No se encontró ninguna descomposición válida'
            });
        } else {
            res.json({ 
                cadena,
                palabras: resultado 
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
