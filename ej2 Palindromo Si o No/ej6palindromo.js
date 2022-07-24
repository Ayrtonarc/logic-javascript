function esPalindromo(palabra){
    let textoInvertido = palabra.split('')
                                .reverse()
                                .join('');
    
    return (textoInvertido === palabra);
}

console.log("Es palindromo? " + esPalindromo("pablo"));