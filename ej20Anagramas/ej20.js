/**Dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre si
 * 
 * una cadena es un anagrama de otra si usa los mimmos caracteres en la misma cantidad
 * no tener en cuenta espacios, simbolos raros, puntos, etc
 * 
 * Ejemplos
 * 
 * anagramas('Riesgo', 'Sergio') devuelve true
 * anagramas('victor','Robles') devuelve false
 */

function clearText(texto){
    return texto
        .replace(/[^\w]/gi, '')
        .toLowerCase()//a minusculas
        .split('') //guardar en un array de caracteres, caracter por caracter
        .sort() //ordenar alfabeticamente para hacer la comparacion despues
        .join(''); //unir todo
        
}

function anagramas(texto1, texto2){
    return clearText(texto1) === clearText(texto2);
}

console.log(anagramas("SerGio !!-.,","RiesGO!!!,,,'" ));