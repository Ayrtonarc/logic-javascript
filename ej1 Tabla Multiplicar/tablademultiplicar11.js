function tablaDel11(numero){
    let resultado = `esta es la tabla del ${numero} \n`;

    for(let i = 0; i <= 10; i++){
        multiplicacion = (i * numero);

        resultado += `${numero} x ${i} = ${multiplicacion} \n`;
    }
    return resultado;

}
console.log(tablaDel11(11));