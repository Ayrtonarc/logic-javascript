/** Dada una cadena de texto, darle la vuelta e invertir el orden
 * de sus caracteres, sin usar metodos propios del lenguaje
 * solo estructuras de control.
 */
function invertirOrden(texto){
    let invertido = "";

    for(let letra of texto){
        invertido = letra + invertido;
    }
    return invertido;
}

console.log("Texto invertido", invertirOrden("punkored"));