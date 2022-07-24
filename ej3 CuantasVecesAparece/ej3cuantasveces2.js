/* Dada una palabra, buscarla una frase y devolver cuantas veces aparece la frase
y la palabra debe ser un parametro*/

function coincidencias(frase, busqueda){ 
    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]gi/, ''); //se limpia el texto, se pasa a minusculas y se eliminan caracteres especiales
    let resultado = 0;

    if(texto_limpio.includes(busqueda)){
        let palabras = texto_limpio.split("");
        let mapa = {};

        for(let palabra of palabras){
            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1;
            }
        }
        resultado = mapa[busqueda];
    }else{
        return resultado;
    }
    return resultado;
}
console.log("Numero de coincidencias con la busqueda", coincidencias("Hola este es un buque buque buque insignia", "buque"));
