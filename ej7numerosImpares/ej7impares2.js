/*
Dados numeros resolver cuantos numeros impares
hay entre ellos
ejemplo 
impares(1,100) //devuelve: 49
*/

function impares(number1, number2){
    let counter = 0;
        while(number1 < number2){
            if(number1%2 !== 0) counter++;
            number1++;
        }
        return counter;
    
    
}
console.log(impares(1,100));