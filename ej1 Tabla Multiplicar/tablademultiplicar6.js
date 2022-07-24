function tabladel6(numero){
    let resultado = `# La tabla de multiplicar del ${numero}# \n`

    for(let i = 0; i <= 10; i++){
        let multiplicacion = (i * numero);

        resultado += `${numero} x ${i} = ${multiplicacion} \n`;

    }
    return resultado;
}

console.log(tabladel6(6));