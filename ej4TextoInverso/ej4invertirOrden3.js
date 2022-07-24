function invertision(texto){
let invertido = "";
    for(let letra of texto){
        invertido = letra + invertido;
    }
    return invertido
}

console.log("el texto invertido es: " + invertision("desktop"));