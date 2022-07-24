function vocales(texto){
    let coincidencias = texto.match(/[aeiou]/gi);

   // console.log(coincidencias);

    return coincidencias.length;
}

console.log(vocales("victorroblesweb.es"));