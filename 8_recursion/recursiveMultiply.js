/*
 * Recursive Multiply: Write a recursive function to multiply two positive integers without using the
 * '*' operator. You can use addition, subtraction, and bit shifting, but you should minimize the number
 * of those operations.
 */

const multiply = (a, b) => {
    if (a === 0 || b === 0) return 0;
    if (a === 1) return b;
    if (b === 1) return a;
    return a + multiply(a, b - 1);
};

// Test Cases
console.log(multiply(3, 5), 'should be', 15);
console.log(multiply(1, 0), 'should be', 0);
console.log(multiply(2, 11), 'should be', 22);
