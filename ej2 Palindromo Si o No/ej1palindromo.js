function esPalindromo(texto){
    let inversion = texto.split('')
                         .reverse()
                         .join('');
    return (inversion === texto);

}

console.log("La palabra es palindromo? " + esPalindromo("otto"));