/*
dado un numero entero, inviertelo y devuelve de nuevo el entero
ejemplo InvertirNumero(67) // Devuelve 76
*/

function InvertirNumero(numero){

    let invertido = numero
                        .toString()
                        .split('')
                        .reverse()
                        .join('');

    console.log(invertido);
}

InvertirNumero(78);