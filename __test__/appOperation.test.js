const appOperation = require('../src/appOperation');


test('multiply 2 and 3 to equal 6', () => {
    expect(appOperation.multiply(2, 3)).toBe(6);
});

test('add 2 and 3 to equal 5', () => {
    expect(appOperation.add(2, 3)).toBe(5);
});

test('subtract 3 from 5 to equal 2', () => {
    expect(appOperation.subtract(5, 3)).toBe(2);
});