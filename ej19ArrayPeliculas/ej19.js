/**Dado un array de objetos de peliculas(titulo director vista)
 * mostrar todas las peliculas indicando cuales has visto y cual no
 * 
 * Ejemplo
 * misPeliculas(peliculas);
 * 
 * devuelve ya has visto "El senor de los anillos"
 * te falta ver la liga de la justicia de zack snyder
 * 
 * 
 * Como hacerlo
 * -Crear un array de objetos
 * -Crear funcion para recorrer y mosstrar
 * 
 */

function misPeliculas(peliculas){
    for(pelicula of peliculas){
        
        let para_mostrar = `"${pelicula.titulo} de ${pelicula.director}"`;

        if(peliculas.vista){
            console.log("Ya has visto: ", para_mostrar);
        }else{
            console.log("Te falta ver: ", para_mostrar);
        }

    }
    return peliculas;
}

const coleccion_de_peliculas = [
    {
        titulo: "El senor de los anillos",
        director: "Peter Jackson",
        vista: true
    },
    {
        titulo: "La liga de la justicia",
        director: "Zack Snyder",
        vista: true
    },
    {
        titulo: "Los vengadores",
        director: "Ruso",
        vista: true
    },
    {
        titulo:" Batman v superman",
        director: "Zack Snyder",
        vista: true
    },
];

misPeliculas(coleccion_de_peliculas);