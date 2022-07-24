/* Dada una palabra, buscarla una frase y devolver cuantas veces aparece la frase
y la palabra debe ser un parametro*/

function busqueda(frase, palabraBuscada){
    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]gi/, ''); //pasar a minusculas, y quitar caracteres especiales
    let resultado = 0; // se declara la variable resultado

    if(texto_limpio.includes(palabraBuscada)){ //condicional, si texto limpio incluye la palabrabuscada
        let palabras = texto_limpio.split(" "); //separar el texto por palabras importamte Dejar espacio
        let mapa = {}; //objeto JSON para manipular, las palabras que se van a guardar

        for(let palabra of palabras){ // se va a recorrer el arreglo donde se guardan las palabras ya separadas en la linea 9
            if(mapa[palabra]){ //si el objeto json contiene la "palabra que buscamos"
                mapa[palabra]++; //se incremeta de 1 en 1
            }else{ //caso contrario
                mapa[palabra] = 1;
            }
        }
        resultado = mapa[palabraBuscada];
    }else{
        return resultado;
    }
    return resultado;

}
console.log("Numero de coincidencias con la busqueda", busqueda("Hola este es un buque buque buque insignia", "buque"));