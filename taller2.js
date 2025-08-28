function findMax(list) {
    let max = -Infinity
    for (let i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i]
        }
    }
    return max
}


function includes(list, element) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === element) {
            return true
        }
    }
    return false
}

function sum(list) {
    let total = 0
    for (let i = 0; i < list.length; i++) {
        total += list[i]
    }
    return total
}

function missingNumbers(list) {
    if (list.length === 0) return [];
    let max = findMax(list)
    let min = list[0]
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


console.log(findMax([1, 2, 6, 4, 5, 2, 8, 1, 23, 10]))
console.log(findMax([-1, -2, -6, -4, -5, -2, -8, -1, -23, -10]))
console.log(includes([1, 2, 3, 4, 5], 3))
console.log(includes([1, 2, 3, 4, 5], 6))
console.log(sum([1, 2, 3, 4, 5]))
console.log(sum([-1, -2, -3, -4, -5]))
console.log(missingNumbers([1, 2, 4, 5, 7]))
console.log(missingNumbers([10, 11, 12, 15]))
console.log(missingNumbers([7, 1, 9, 4, 10]))


