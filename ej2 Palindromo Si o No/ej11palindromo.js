function esPalindromo(palabra){
    let palabraRepetida = palabra.split('')
                                 .reverse()
                                 .join();

    return (palabraRepetida === palabra);
}

console.log("La palabra proporcionada es palindroma? " + esPalindromo("ottobob"));