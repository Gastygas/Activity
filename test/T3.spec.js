const oddNumbers = require('../practice/3')
describe("Test 2",() => {
    it("Debe retornar los numeros impares",() => {
        expect(oddNumbers([2,22,1,21,9,4,25], 3)).toEqual([3,25,21,9,1])
        expect(oddNumbers([1,2,3,4,5,6], 12)).toEqual([12,5,3,1])
    })
    it("Debe retornar el num en un array",() => {
        expect(oddNumbers([],2)).toEqual([2])
    })
})