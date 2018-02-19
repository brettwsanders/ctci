// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
//
//
// input: array of ints
// output: array of products
// constraints: 
// edge cases:

const getProductsOfAllIntsExceptAtIndex = ints => {
    return ints.map((int, index) => {
        return ints.reduce((product, innerInt, innerIndex) => {
            if (index !== innerIndex) {
                return product * innerInt;
            } else {
                return product;
            }
        }, 1);
    });
}

// test cases
let input;
let output;
let expected;

// tc1
input = [1, 7, 3, 4];
output = getProductsOfAllIntsExceptAtIndex(input);
expected = [84, 12, 28, 21];

console.log(output, 'should be', expected);
