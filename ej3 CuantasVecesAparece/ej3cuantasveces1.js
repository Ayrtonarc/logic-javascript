/* Dada una palabra, buscarla una frase y devolver cuantas veces aparece la frase
y la palabra debe ser un parametro*/

function coincidencias(frase, busqueda){
    let  texto_limpio = frase.toLowerCase().replace(/[!¡.,-]gi/, '');
    let  resultado = 0;

    if(texto_limpio.includes(busqueda)){ // si el texto limpio inclyte
        let palabras = texto_limpio.split(" "); //separar palabra
        let mapa = {};  //mapear estas palanbras, y sera un objeto json

        for(let palabra of palabras){
            if(mapa[palabra]){ //para ver si existe la palabra mapa
                mapa[palabra]++; // si hay irle sumando 1
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

