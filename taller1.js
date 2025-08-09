function ConvertidorTemp(X) {
return X * (9/5) + 32
}

function Resolvedor (a,b,c,d) {
const solucion1 = (-b + Math.sqrt(b**2 - 4 * a * c))/(2*a)
const solucion2= (-b - Math.sqrt(b**2 - 4 * a * c))/(2*a)
if (d === 0 ){
    return solucion1
}else if (d === 1){
    return solucion2
} else {
    return "Solo puede ingresar 0 para la solucion positiva, 1 para la solución negativa"
}

}

function mejorParidad(num) {
    if (num % 2 === 0){
        paridad ="El número es par"
    }else{
       paridad = "El numero es impar"
    }
    return "por mejor paridad " + paridad
}

function peorParidad(nume) {
    if (nume === 0){
        paridad = "numero es par"
    }
    if (nume === 1){
        paridad = "numero es impar"
    }
    if (nume === 2){
        paridad = "numero es par"
    }
    if (nume === 3){
        paridad = "numero es impar"
    }
    if (nume === 4){
        paridad = "numero es par"
    }
    if (nume === 5){
        paridad = "numero es impar"
    }
    if (nume === 6){
        paridad = "numero es par"
    }
    if (nume === 7){
        paridad = "numero es impar"
    }
    if (nume === 8){
        paridad = "numero es par"
    }
    if (nume === 9){
        paridad = "numero es impar"
    }
    if (nume === 10){
        paridad = "numero es par"
    }
    return "Por peor paridad " + paridad
}


console.log(ConvertidorTemp(2))
//console.log(Resolvedor(1,5,4,0))
//console.log(mejorParidad(582))
//console.log(mejorParidad(583))
//console.log(peorParidad(8))
//console.log(peorParidad(5))