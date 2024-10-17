// la funcion debe retornar un arreglo de numeros pares con la longitud pasada
// en el parametro 'number'

function evenNumbers(array, number) {
    const arrays = [];

    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            arrays.push(array[i]);
        }
    }

    const newArray = arrays.slice(0, number);
    console.log(newArray);
    return arrays.slice(0, number);
}



module.exports = evenNumbers