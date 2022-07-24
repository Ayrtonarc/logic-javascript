function tablaDelocho(numero){
    let resultado = `resultado de la tabla del ${numero} \n`;

    for(let i = 0; i <= 10; i++){
        let multiplicacion = (i * numero);

        resultado += `${numero} x ${i} = ${multiplicacion} \n`;
    }
    return resultado;
}
console.log(tablaDelocho(8));