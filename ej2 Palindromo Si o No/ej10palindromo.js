function esPalindromo(palabra){
    let palabraInversa = palabra.split('')
                                .reverse()
                                .join('');
    
    return (palabraInversa === palabra);

}

console.log("la palabra que nos dio es palidroma? " + esPalindromo("ottobob"));