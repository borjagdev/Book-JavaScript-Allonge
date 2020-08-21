// Considering the JavaScript environment as a more simple abstraction: 
// We give the computer an **expression** -> It returns a **value**

describe('Values and Expressions', () => {

    test('Values are Expressions', () => {
        expect(42).toBe(42);
    });
    
    test('An Expression composed by Values returns a Value', () => {
        expect('JavaScript' + ' ' + 'Allonge').toBe('JavaScript Allonge');
    });

    test('Values and Identity, === Operator', () => {
        // If values have different types, they are different
        expect(2 === '2').toBe(false);
        expect(true !== 'true').toBe(true);

        // If values have the same type, === compares their "content"
        expect(true === false).toBe(false);
        expect(2 !== 5).toBe(true);
        expect('two' === 'five').toBe(false);

        // If the returning values of different expressions are the same, they are equal
        expect(2 + 2 === 4).toBe(true);
        expect((2 + 2 === 4) === (2 !== 5)).toBe(true);

        // Some expressions have their own unique "id", like Arrays
        // Even if the output value of its component expressions is the same, they are different
        expect([2-1, 2, 2+1] === [1,2,3]).toBe(false);
        expect([1,2,3] === [1, 2, 3]).toBe(false);
        expect([1, 2, 3] === [1, 2, 3]).toBe(false);
    });

});
