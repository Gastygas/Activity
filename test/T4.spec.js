//Resolver los errores sin modificar el archivo 4.js

const double = require("../practice/4")
describe('Test 4',() => {
    it('Debe duplicar los numeros del array',() => {
        expect(double([1,2,3,4])).toBe([1,4,6,8])
        expect(double([10,20,15])).toBeNan()
        //crear una nueva funcion en el archivo 4.js y para luego crear 2 expects
        //Comenten la funcion que estaba creada anteriormente porfavor

        //sus expect aqui abajo
    })
})