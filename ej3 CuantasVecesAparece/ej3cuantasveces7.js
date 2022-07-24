/* Dada una palabra, buscarla una frase y devolver cuantas veces aparece la frase
y la palabra debe ser un parametro*/

function busqueda(texto, palabraBuscada){
    let texto_limpio = texto.toLowerCase().replace(/[!¡.,-]gi/, '');
    let resultado = 0;

    if(texto_limpio.includes(palabraBuscada)){
        let palabras = texto_limpio.split(" ");
        let mapa = {}

        for(let palabra of palabras){
            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1;
            }
            resultado = mapa[palabraBuscada];
        }
        return resultado
    }else{
        return resultado;
    }
}

console.log("la palabra buscada es  ", busqueda("buque insignia buque", "buque"));