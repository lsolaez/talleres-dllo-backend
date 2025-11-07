/**
 * Convierte temperatura de Celsius a Fahrenheit
 * @param {number} celsius - Temperatura en Celsius
 * @returns {number} Temperatura en Fahrenheit
 */
function ConvertidorTemp(celsius) {
    return celsius * (9/5) + 32;
}

/**
 * Resuelve ecuaciones cuadráticas (ax^2 + bx + c = 0)
 * @param {number} a - Coeficiente de x^2
 * @param {number} b - Coeficiente de x
 * @param {number} c - Término independiente
 * @param {number} d - 0 para solución positiva, 1 para solución negativa
 * @returns {number|string} Solución de la ecuación o mensaje de error
 */
function Resolvedor(a, b, c, d) {
    const discriminante = b**2 - 4 * a * c;
    
    if (discriminante < 0) {
        return "No hay solución real (discriminante negativo)";
    }
    
    const solucion1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    const solucion2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    
    if (d === 0) {
        return solucion1;
    } else if (d === 1) {
        return solucion2;
    } else {
        return "Solo puede ingresar 0 para la solución positiva, 1 para la solución negativa";
    }
}

/**
 * Determina si un número es par o impar (implementación óptima)
 * @param {number} num - Número a evaluar
 * @returns {string} Resultado de la paridad
 */
function mejorParidad(num) {
    let paridad;
    if (num % 2 === 0) {
        paridad = "El número es par";
    } else {
        paridad = "El número es impar";
    }
    return "por mejor paridad " + paridad;
}

/**
 * Determina si un número es par o impar (implementación subóptima)
 * @param {number} nume - Número a evaluar
 * @returns {string} Resultado de la paridad
 */
function peorParidad(nume) {
    let paridad = "";
    
    if (nume === 0) {
        paridad = "numero es par";
    }
    if (nume === 1) {
        paridad = "numero es impar";
    }
    if (nume === 2) {
        paridad = "numero es par";
    }
    if (nume === 3) {
        paridad = "numero es impar";
    }
    if (nume === 4) {
        paridad = "numero es par";
    }
    if (nume === 5) {
        paridad = "numero es impar";
    }
    if (nume === 6) {
        paridad = "numero es par";
    }
    if (nume === 7) {
        paridad = "numero es impar";
    }
    if (nume === 8) {
        paridad = "numero es par";
    }
    if (nume === 9) {
        paridad = "numero es impar";
    }
    if (nume === 10) {
        paridad = "numero es par";
    }
    
    return paridad ? "Por peor paridad " + paridad : "Número fuera del rango (0-10)";
}

module.exports = {
    ConvertidorTemp,
    Resolvedor,
    mejorParidad,
    peorParidad
};

