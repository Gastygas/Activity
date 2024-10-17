//Resolver los errores sin modificar el archivo 4.js

const suma = require("../practice/4")
describe('Test 4',() => {
    // it('Debe duplicar los numeros del array',() => {
    //     expect(double([1,2,3,4])).toEqual([2,4,6,8])
    //     expect(double([10,20,15])).toEqual([20, 40, 30])
        //crear una nueva funcion en el archivo 4.js y para luego crear 2 expects
        //Comenten la funcion que estaba creada anteriormente porfavor

        //sus expect aqui abajo

    it('Debe devolver la suma del array', () => {
        expect(suma([1,2,3])).toBe(6);
        expect(suma([10,2,8])).toBe(20);
        expect(suma([-1,4])).toBe(3);
    })

})