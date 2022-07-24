function tablaDeMultiplicar(numero){
 let resultado = `# la tabla de multiplicar del ${numero}# \n`
    for(let i = 1; i <= 10; i++){
        let multiplicacion = (i * numero);

        resultado += `${i} x ${numero} = ${multiplicacion} \n`
    }

    return resultado;
}

console.log(tablaDeMultiplicar(3));