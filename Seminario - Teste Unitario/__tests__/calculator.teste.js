const calculator = require('../calculator')

describe('Calculator tests - Happy way', () => {
    test('sum 1 + 2', () => {
        expect(calculator.sum(1,2)).toBe(3);
    })

    test('diff 3 - 1', () => {
        expect(calculator.diff(3,1)).toBe(2);
    })

    test('mult 4 * 5', () => {
        expect(calculator.mult(4,5)).toBe(20);
    })

    test('div 4 * 5', () => {
        expect(calculator.div(12,4)).toBe(3);
    })

})

// describe('Calculator tests - Sadness way', () => {
   
//     test('div 6 / 0', () => {
//         expect(calculator.div(6,0)).toThrow(Error);
//     })

// })