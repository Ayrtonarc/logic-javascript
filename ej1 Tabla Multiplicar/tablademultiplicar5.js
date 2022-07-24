function tabladel5(numero){
    resultado = `#Tabla de multiplicar del ${numero}# \n`;

    for(let i = 0; i <= 10; i++){
        multiplicacion = (i * numero);
        resultado += `${numero} x ${i} = ${multiplicacion}\n`;
    }
    return resultado;
}
console.log(tabladel5(5));