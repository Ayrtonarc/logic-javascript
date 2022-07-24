function esPalindromo(palabra){
    let palabraInversa = palabra.split('')
                                .reverse()
                                .join('');
    
    return (palabraInversa === palabra);

}

console.log("La palabra es inversa? " + esPalindromo("esconar"));