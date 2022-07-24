function esPalindromo(palabra){
  let palabraInvertida = palabra.split('')
                                .reverse()
                                .join('');
    
    return (palabraInvertida === palabra);
}

console.log("la palabra que nos dio es palindromo? " + esPalindromo("mybad"));