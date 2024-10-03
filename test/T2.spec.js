const evenNumbers = require('../practice/2')
describe("Test 2",() => {
    it("Debe retornar los numeros pares",() => {
        expect(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([2,4,6])
        expect(evenNumbers([99,13,4,10,65,23,77,56,13,9231,234,100,50], 5)).toEqual([4,10,56,234,100])
    })
})