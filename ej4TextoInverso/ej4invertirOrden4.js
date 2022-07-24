function InvertirOrden(texto){
    let textoInvertido = "";

    for(let letra of texto){
        textoInvertido = letra + textoInvertido;
    }
    return textoInvertido;
}

console.log("Texto invertido", InvertirOrden("misael"));