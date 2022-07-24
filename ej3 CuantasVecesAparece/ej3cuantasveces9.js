/* Dada una palabra, buscarla una frase y devolver cuantas veces aparece la frase
y la palabra debe ser un parametro*/

function BusquedaPalabra(frase, palabraBuscada){
    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]gi/, ''); //limpiar el texto
    let resultado = 0;

    if(texto_limpio.includes(busqueda));
    let palabras = texto_limpio.split(""); //separar palabras
    let mapa = {}; //mapear estas palabras y convertir a un objeto json

    for(let palabra of palabras){
        if(mapa[palabra]){ //para ver si existe la palabra mapa
            mapa[palabra]++; //hay que irle sumando
        }else{
            mapa[palabra] = 1;
        }
    }
    resultado = mapa[busqueda];
else{
    return resultado;
}
return resultado;
}

console.log("Numero de coincidencias con la busqueda", BusquedaPalabra("Hola este es un buque buque buque insignia", "buque"));
