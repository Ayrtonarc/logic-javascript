function tablaDel3(numero){
    let resultado = `# Tabla de multiplicar del ${numero} # \n`;

    for(let i = 0; i <= 10; i++){
        let multiplicacion = (i * numero);

        resultado += `${numero} x ${i} = ${multiplicacion} \n`;
    }
    return resultado;
}

console.log(tablaDel3(3));