/**
 * Calcular el X porcentaje de un numero X
 */

function CalcularPorcentaje(porcentaje, numero){
    let operacion = (numero * (porcentaje/100));
    let resultado = `${porcentaje}% de ${numero} es ${operacion}`;

    return resultado;
}

console.log(CalcularPorcentaje(43, 897));