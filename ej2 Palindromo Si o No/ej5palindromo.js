function esPalindromo(palabra){
    let palabraInvertida = palabra.split('')
                                  .reverse()
                                  .join('');
                                  
    return (palabraInvertida === palabra);

}

console.log("es palindromo? " + esPalindromo("Otto"));