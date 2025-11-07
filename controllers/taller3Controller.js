// Controlador para taller3 - Manipulación de strings y algoritmos

/**
 * Cuenta vocales o consonantes en un texto
 * @param {string} texto - Texto a analizar
 * @param {string} tipo - "vocales" o "consonantes"
 * @returns {number} Cantidad de vocales o consonantes
 */
function desglosarString(texto, tipo) {
    const vocales = "aeiou";

    return texto
        .toLowerCase()
        .split("")
        .filter(char => tipo === "vocales" 
                        ? vocales.includes(char) 
                        : !vocales.includes(char) && char >= "a" && char <= "z")
        .length;
}

/**
 * Encuentra dos números que sumen el objetivo
 * @param {number[]} nums - Array de números
 * @param {number} objetivo - Suma objetivo
 * @returns {number[]|null} Índices de los dos números o null
 */
function twoSum(nums, objetivo) {
    const resultado = nums.map((num, i) => {
        const complemento = objetivo - num;
        const j = nums.findIndex((n, k) => n === complemento && k !== i);
        if (j !== -1) return [i, j];
    }).find(par => par !== undefined);
    
    return resultado ?? null;
}

/**
 * Convierte un número romano a decimal
 * @param {string} cadenaRomana - Número en formato romano
 * @returns {number|string} Número decimal o NaN si es inválido
 */
function conversionRomana(cadenaRomana) {
    if (typeof cadenaRomana !== "string" || cadenaRomana.trim() === "") {
        return NaN;
    }

    const valoresRomanos = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
    const caracteres = cadenaRomana.toUpperCase().split("");

    if (!caracteres.every(simbolo => simbolo in valoresRomanos)) {
        return NaN;
    }

    return caracteres.reduce((total, simboloActual, indice, arreglo) => {
        const valorActual = valoresRomanos[simboloActual];
        const valorSiguiente = valoresRomanos[arreglo[indice + 1]] ?? 0;

        return total + (valorActual < valorSiguiente ? -valorActual : valorActual);
    }, 0);
}

/**
 * Descompone una palabra en dos palabras del diccionario
 * @param {string} cadena - Cadena con palabra objetivo y diccionario separados por coma
 * @returns {string[]|null} Array con las dos palabras o null
 */
function descomposicion(cadena) {
    const palabras = cadena.split(",").map(p => p.trim());
    const palabraObjetivo = palabras[0];
    const diccionario = palabras.slice(1);
    
    const pares = diccionario.flatMap(p1 =>
        diccionario.filter(p2 => p2 !== p1).map(p2 => [p1, p2])
    );
    const resultado = pares.find(([p1, p2]) => p1 + p2 === palabraObjetivo);

    return resultado ?? null;
}

module.exports = {
    desglosarString,
    twoSum,
    conversionRomana,
    descomposicion
};

