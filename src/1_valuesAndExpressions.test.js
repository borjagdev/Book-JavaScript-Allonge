// Considering the JavaScript environment as a more simple abstraction: 
//  We give the computer an **expression** -> It returns a **value**

describe('Values and Expressions', () => {
    test('Values are Expressions', () => {
        expect(42).toBe(42);
    });
    
    test('An Expression composed by Values returns a Value', () => {
        expect("JavaScript" + " " + "Allonge").toBe("JavaScript Allonge");
    });
});
