// La funciona double debe multiplicar por 2 cada elemento del array que recibe por parametro y retornar el array nuevamente
//Ir al T4.spec.js
// function double(arr){
//     return arr.map((a) => a*2)
// }

function suma(arr){
    let num = 0; 
    arr.map((a) => num = num + a);
    return num;

}

module.exports = suma