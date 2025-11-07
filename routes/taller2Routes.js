const express = require('express');
const router = express.Router();
const {
    findMax,
    includes,
    sum,
    missingNumbers
} = require('../controllers/taller2Controller');

/**
 * @swagger
 * /api/taller2/find-max:
 *   post:
 *     summary: Encuentra el valor máximo en una lista
 *     tags: [Taller 2]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - list
 *             properties:
 *               list:
 *                 type: array
 *                 items:
 *                   type: number
 *                 description: Lista de números
 *                 example: [1, 2, 6, 4, 5, 2, 8, 1, 23, 10]
 *     responses:
 *       200:
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 lista:
 *                   type: array
 *                   items:
 *                     type: number
 *                 maximo:
 *                   type: number
 *                   example: 23
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.post('/find-max', (req, res) => {
    try {
        const { list } = req.body;
        
        if (!Array.isArray(list)) {
            return res.status(400).json({
                error: 'list debe ser un array'
            });
        }
        
        if (list.length === 0) {
            return res.status(400).json({
                error: 'La lista no puede estar vacía'
            });
        }
        
        if (!list.every(item => typeof item === 'number')) {
            return res.status(400).json({
                error: 'Todos los elementos de la lista deben ser números'
            });
        }
        
        const resultado = findMax(list);
        res.json({ 
            lista: list,
            maximo: resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/taller2/includes:
 *   post:
 *     summary: Verifica si un elemento existe en la lista
 *     tags: [Taller 2]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - list
 *               - element
 *             properties:
 *               list:
 *                 type: array
 *                 items: {}
 *                 description: Lista de elementos
 *                 example: [1, 2, 3, 4, 5]
 *               element:
 *                 type: number
 *                 description: Elemento a buscar
 *                 example: 3
 *     responses:
 *       200:
 *         description: Verificación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 lista:
 *                   type: array
 *                 elemento:
 *                   type: number
 *                 existe:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.post('/includes', (req, res) => {
    try {
        const { list, element } = req.body;
        
        if (!Array.isArray(list)) {
            return res.status(400).json({
                error: 'list debe ser un array'
            });
        }
        
        const resultado = includes(list, element);
        res.json({ 
            lista: list,
            elemento: element,
            existe: resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/taller2/sum:
 *   post:
 *     summary: Suma todos los elementos de una lista
 *     tags: [Taller 2]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - list
 *             properties:
 *               list:
 *                 type: array
 *                 items:
 *                   type: number
 *                 description: Lista de números
 *                 example: [1, 2, 3, 4, 5]
 *     responses:
 *       200:
 *         description: Suma exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 lista:
 *                   type: array
 *                   items:
 *                     type: number
 *                 suma:
 *                   type: number
 *                   example: 15
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.post('/sum', (req, res) => {
    try {
        const { list } = req.body;
        
        if (!Array.isArray(list)) {
            return res.status(400).json({
                error: 'list debe ser un array'
            });
        }
        
        if (!list.every(item => typeof item === 'number')) {
            return res.status(400).json({
                error: 'Todos los elementos de la lista deben ser números'
            });
        }
        
        const resultado = sum(list);
        res.json({ 
            lista: list,
            suma: resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/taller2/missing-numbers:
 *   post:
 *     summary: Encuentra los números faltantes en un rango
 *     tags: [Taller 2]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - list
 *             properties:
 *               list:
 *                 type: array
 *                 items:
 *                   type: number
 *                 description: Lista de números
 *                 example: [1, 2, 4, 5, 7]
 *     responses:
 *       200:
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 lista:
 *                   type: array
 *                   items:
 *                     type: number
 *                 numerosFaltantes:
 *                   type: array
 *                   items:
 *                     type: number
 *                   example: [3, 6]
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.post('/missing-numbers', (req, res) => {
    try {
        const { list } = req.body;
        
        if (!Array.isArray(list)) {
            return res.status(400).json({
                error: 'list debe ser un array'
            });
        }
        
        if (!list.every(item => typeof item === 'number')) {
            return res.status(400).json({
                error: 'Todos los elementos de la lista deben ser números'
            });
        }
        
        const resultado = missingNumbers(list);
        res.json({ 
            lista: list,
            numerosFaltantes: resultado 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
