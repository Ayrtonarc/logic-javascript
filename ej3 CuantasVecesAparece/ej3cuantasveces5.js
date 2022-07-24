    function busqueda(frase, palabraBusqueda){
        let texto_limpio = frase.replace(/[!¡.,-]gi/, '');
        let resultado = 0;

        if(texto_limpio.includes(palabraBusqueda)){
            let palabras = texto_limpio.split(" ");
            let mapa = {};

            for(let palabra of palabras){
                if(mapa[palabra]){
                    mapa[palabra]++;
                }else{
                    mapa[palabra] = 1;
                }
            }
            resultado = mapa[palabraBusqueda];
        }else{
            return resultado;
        }
        return resultado;
    }

    console.log("Numero de coincidencias con la busqueda", busqueda("Hola este es un buque buque buque insignia", "buque"));

