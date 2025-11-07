// Controlador para taller2 - Operaciones con arreglos

/**
 * Encuentra el valor máximo en una lista
 * @param {number[]} list - Array de números
 * @returns {number} Valor máximo
 */
function findMax(list) {
    if (list.length === 0) {
        throw new Error("La lista no puede estar vacía");
    }
    
    let max = -Infinity;
    for (let i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}

/**
 * Verifica si un elemento existe en la lista
 * @param {any[]} list - Array de elementos
 * @param {any} element - Elemento a buscar
 * @returns {boolean} true si existe, false si no
 */
function includes(list, element) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === element) {
            return true;
        }
    }
    return false;
}

/**
 * Suma todos los elementos de una lista
 * @param {number[]} list - Array de números
 * @returns {number} Suma total
 */
function sum(list) {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i];
    }
    return total;
}

/**
 * Encuentra los números faltantes en un rango
 * @param {number[]} list - Array de números
 * @returns {number[]} Array de números faltantes
 */
function missingNumbers(list) {
    if (list.length === 0) return [];
    
    let max = findMax(list);
    let min = list[0];
    
    for (let i = 1; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
        }
    }

    let presentes = {};
    for (let j = 0; j < list.length; j++) {
        presentes[list[j]] = true;
    }

    let faltantes = [];
    for (let n = min + 1; n < max; n++) {
        if (!presentes[n]) {
            faltantes.push(n);
        }
    }

    return faltantes;
}

module.exports = {
    findMax,
    includes,
    sum,
    missingNumbers
};

