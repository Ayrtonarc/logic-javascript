/*Dado un numero mostrar todos los numeros desde 0 a 8 de 8 en 8
en una lista con guiones donde cada numero debe empezar con n0 */

function hastaCero(numero){
  let resultado = `--- Del ${numero} al 0 --- /n`;

  while(numero > 0){
    resultado += `- n${numero} \n`;
    numero -= 8;
  }
  resultado += "---FIN---";

  return resultado;
}

console.log(hastaCero(100));