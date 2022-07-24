function esPalindromo(palabra){
    let palabraInvertida = palabra.split('')
                                  .reverse()
                                  .join('');

    return (palabraInvertida === palabra );
}
console.log("La palabra es palindromo? " + esPalindromo("blackie"));