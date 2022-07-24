function tablaDel7(numero){
    let resultado = `# esta es la tabla del ${numero} # \n`;

    for(let i = 0; i <= 10; i++){
        let multiplicacion = (i * numero);

        resultado += `${numero} x ${i} = ${multiplicacion}\n`;
    }
    return resultado;
}

console.log(tablaDel7(7));