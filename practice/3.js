// tendras que hacer que la funcion retorne un array de numeros impares ordenados de mayor a menor
// pero el segundo numero que se pasa por parametro tiene que ir en la posision 0
// si el parametro 'arr' esta vacio, debes retornar solamente el parametro num en un array

function oddNumbers (arr,num){
    const arrays = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            arrays.push(arr[i]);
        }
    }
    const newArray = arrays.sort((a, b) => b - a);
    newArray.unshift(num);
    console.log(newArray)
    return newArray;

}
oddNumbers([], 2)
module.exports = oddNumbers