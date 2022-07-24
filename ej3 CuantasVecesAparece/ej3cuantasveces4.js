function coincidencias(frase, palabraBuscada){
    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]gi/, '');
    let resultado = 0;

    if(texto_limpio.includes(palabraBuscada)){
        let palabras = texto_limpio.split(" ");
        let mapa = {};

        for( let palabra of palabras){
            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1;
            }
        }
        resultado = mapa[palabraBuscada];
    }else{
        return resultado;
    }
    return resultado;
}
console.log("Numero de coincidencias con la busqueda", coincidencias("Hola este es un buque buque buque insignia", "buque"));
