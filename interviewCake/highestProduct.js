// input: array of ints
// output: highest product
// constraint: n/a
// edge: less than 3 ints,
//

const highestProduct = (ints, start = 0, product = 1, used = 0) => {
    // base case => used up 3 values
    if (used === 3) {
        return product;
    }
    let maxProduct;
    const end = Math.min(ints.length, start + 3)
    for (let i = start; i < end; i++) {
        const newProduct = product * ints[i];
        const newUsed = used + 1;
        const newStart = i + 1;
        const productCandidate = highestProduct(ints, newStart, newProduct, newUsed);
        if (typeof productCandidate === 'number') {
            if (maxProduct === undefined) {
                maxProduct = productCandidate;
            } else {
                maxProduct = Math.max(productCandidate, maxProduct);
            }
        }
    }
    return maxProduct;
};


// Test cases
let input;
let output;
let expected;

// tc1
input = [1, 2, 0, 9, 4];
output = highestProduct(input);
expected = 72;

console.log(output, 'should be', expected);

// tc2
input = [1, 2, 3];
output = highestProduct(input);
expected = 6;

console.log(output, 'should be', expected);

// tc3
input = [1, 2, 3, 4, 0];
output = highestProduct(input);
expected = 24;

console.log(output, 'should be', expected);

// tc3
input = [-5, -2, 3, 4];
output = highestProduct(input);
expected = 40;

// tc4
input = [-1, 0, 3, 4];
output = highestProduct(input);
expected = 0;

console.log(output, 'should be', expected);
