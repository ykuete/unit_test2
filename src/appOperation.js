function multiply(a, b) {
    return a * b;
}

function add(a, b) {
    const integerA = parseInt(a, 10);
    const integerB = parseInt(b, 10);
    return integerA + integerB;
}  

function subtract(a, b) {
    const integerA = parseInt(a, 10);
    const integerB = parseInt(b, 10);
    return integerA - integerB;
}

function divide(a, b) {
    const integerA = parseInt(a, 10);
    const integerB = parseInt(b, 10);
    if (integerB === 0) {
        throw new Error('Cannot divide by zero');
    }
    return integerA / integerB;
}

module.exports = {
    multiply,
    add,
    subtract,
    divide
}