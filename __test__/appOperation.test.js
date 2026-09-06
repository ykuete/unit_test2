const appOperation = require('../src/appOperation');

test('multiply 2 and 3 to equal 6', () => {
    expect(appOperation(2, 3)).toBe(6);
});