/*
Ejercicio 6 Dibujar un cuadrado hueco con asteriscos

Ejemplos:

cuadrado(4)

devuelve
****
*  *
*  *
****
*/

function lado(numero){ // funcion que construye el lado
    let lado = "";

    for (let i = 0; i< numero; i++){
        lado += "*";
    }
    return lado;
}

function cuadrado(numero){
    let dibujo = lado(numero) + "\n";
    let contenido = "";

    for(let i = 0; i < (numero - 2); i++){
        contenido = "*";

        for(let x=0; x<(numero -2); x++){
            contenido += " ";
        }

        contenido += "*";

        dibujo += contenido + "\n";
    }

    dibujo += lado(numero);

    return dibujo;
}

//console.log(cuadrado(3));

console.log(lado(4));