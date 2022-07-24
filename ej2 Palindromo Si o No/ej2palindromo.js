function esPalindromo(frase){
    let invertido = frase.split('')
                         .reverse()
                         .join('');
    
    return (invertido === frase);
}

console.log("Es un palindromo?  " + esPalindromo("alliesevilla"));