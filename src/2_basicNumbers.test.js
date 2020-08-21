// Internally, every literal expression (number) have the same representation: double-precision floating point numbers.
// It is important to understand that our perception of numbers is not exactly the same as the machine's, for example, 
// the largest integer JavaScript can safely handle is 9007199254740991 (2^53 - 1).

describe('Basic Numbers', () => {

    test('Floating Numbers', () => {
        // While working with integer values is safely intuitive...
        expect(1.0).toBe(1);
        expect(1.0 + 1.0).toBe(2);
        expect(1.0 + 1.0 + 1.0).toBe(3);

        // ... when working with fractionary numbers we have to watch out for the precision
        expect(0.1).toBe(0.1);
        expect(0.1 + 0.1).toBe(0.2);
        expect(0.1 + 0.1 + 0.1).toBe(0.30000000000000004);

        // Pro developers usually  divide monetary amounts on two integer numbers instead of using a floating:
        // 42.34$ -> 42 dollars & 34 cents
    });

    test('Operations on numbers', () => {
        // JavaScript has the same arithmetic precedence for operators we use on mathematical expressions.
        expect(2 * 5 + 1).toBe(11);
        expect(1 + 5 * 2).toBe(11);

        // There are a lot more of operators as % (modulus), - (unary negation), bitwise or logical operators, etc.
        expect(-(457 % 3)).toBe(-1);
    });

});
