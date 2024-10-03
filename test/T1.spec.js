const main = require('../practice/1')
describe("Test 1",() => {
    it("Debe arreglar la funcion",() =>{
        expect(main("jugar ","futbol")).toBe("jugar futbol")
        expect(main('1','2')).toBe('12')
    })
})
