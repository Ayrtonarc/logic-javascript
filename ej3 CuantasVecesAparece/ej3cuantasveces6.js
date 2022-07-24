function busqueda(texto, palabraBusqueda){
    let texto_limpio = texto.toLowerCase().replace(/[!¡.,-]gi/, '');
    let resultado = 0;

    if(texto_limpio.includes(palabraBusqueda)){
        let palabras = texto_limpio.split(" ");
        let mapa = {};

        for(let palabra of palabras){
            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra] =1;
            }
            resultado = mapa[palabraBusqueda];
        }
    }else{
        return resultado;
    }
    return resultado;
}

console.log("El numero de coincidencias es:" + busqueda("Hola este es un buque buque buque insignia", "buque"));