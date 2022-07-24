function InvertirOrden(texto){
    let textoAInvertir = "";

    for(let letra of texto){
        textoAInvertir = letra + textoAInvertir;
    }
return textoAInvertir;
}

console.log("texto invertido", InvertirOrden("punkored"));