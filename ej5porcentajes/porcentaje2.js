/**
 * Calcular el X porcentaje de un numero X
 */

function Porcentaje(porcentaje, numero){
    let calcular = (numero * (porcentaje/100));
    let resultado = `El ${porcentaje}% de ${numero} es ${calcular}`;

    return resultado;
}
console.log(Porcentaje(43, 897));