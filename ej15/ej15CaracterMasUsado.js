/*Dada una cadena de texto, devolver la letra mas usada */

function letraMasUsada (texto){
    let  mapeo_letras = {};
    let  maximo_repeticiones = 0;
    let letra_mas_repetida = ""
    for(let letra of texto ) {
        if(!mapeo_letras[letra]){
            mapeo_letras[letra] = 1;
        }else{
            mapeo_letras[letra]++;
        }
    }
    for(let letra in mapeo_letras){
        if(mapeo_letras[letra].toString().trim() === 1 && mapeo_letras > maximo_repeticiones){   //trim elimina los espacios de un cualquier string
            maximo_repeticiones = mapeo_letras[letra];
            letra_mas_repetida = letra;
        }
    }
    
    return letra_mas_repetida;
}
console.log("La letra mas repetida es: ", letraMasUsada("hola he subido un nuevo video a victorroblesweb.es"));