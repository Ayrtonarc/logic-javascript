function palindromo(texto){
    let inversion = texto.split('')
                         .reverse()
                         .join('');
    return (inversion === texto);
}

console.log("Es un palindromo?" + palindromo("frase"));