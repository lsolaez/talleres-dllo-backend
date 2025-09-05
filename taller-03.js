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

function twoSum(nums, objetivo) {
  return nums.map((num, i) => {
    const complemento = objetivo - num;
    const j = nums.findIndex((n, k) => n === complemento && k !== i);
    if (j !== -1) return [i, j];
  }).find(par => par !== undefined);
}

function conversionRomana(cadenaRomana) {
  if (typeof cadenaRomana !== "string" || cadenaRomana.trim() === "") return NaN;

  const valoresRomanos = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
  const caracteres = cadenaRomana.toUpperCase().split("");

  if (!caracteres.every(simbolo => simbolo in valoresRomanos)) return NaN;

  return caracteres.reduce((total, simboloActual, indice, arreglo) => {
    const valorActual = valoresRomanos[simboloActual];
    const valorSiguiente = valoresRomanos[arreglo[indice + 1]] ?? 0;

    return total + (valorActual < valorSiguiente ? -valorActual : valorActual);
  }, 0);
}

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

console.log(desglosarString("Murcielagos 123!", "vocales")); 
console.log(desglosarString("Murcielagos", "consonantes")); 
console.log(twoSum([2, 7, 11, 15], 9));  
console.log(twoSum([3, 2, 4], 6));
console.log(conversionRomana("XIV"));
console.log(conversionRomana("MCMXCIV"));
console.log(conversionRomana("MMMCMXCIX"));
console.log(conversionRomana("ABCD"));
console.log(descomposicion("notebook, note, boo, pen, pe, n, book"));
console.log(descomposicion("baseball, base, ba, l, ball, bat, ll"));

