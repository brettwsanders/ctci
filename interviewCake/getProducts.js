// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
//
//
// input: array of ints
// output: array of products
// constraints: 
// edge cases:

//const getProductsOfAllIntsExceptAtIndex = ints => {
//    return ints.map((int, index) => {
//        return ints.reduce((product, innerInt, innerIndex) => {
//            if (index !== innerIndex) {
//                return product * innerInt;
//            } else {
//                return product;
//            }
//        }, 1);
//    });
//}
// time complexity: o(n^2)

// const getProductsOfAllIntsExceptAtIndex = ints => {
//     // get product of all ints
//     const product = ints.reduce((acc, int) => {
//         return acc * int;
//     }, 1);
//     // map though ints and return product diveded by int
//     return ints.map(int => {
//         return product / int;
//     });
// }
// time complexity: O(n)
// space complexity: O(1)

//input = [1, 7, 3, 4];
const getProductsOfAllIntsExceptAtIndex = ints => {
    if (ints.length === 1) return [null];
    const products = []; // [1, 1, 7, 21]

    let productSoFar = 1;
    for (let i = 0; i < ints.length; i++) {
        products.push(productSoFar);
        productSoFar = productSoFar * ints[i];
    }

    productSoFar = 1;
    for (let i = ints.length - 1; i >= 0; i--) {
        products[i] = products[i] * productSoFar;
        productSoFar = productSoFar * ints[i];
    }

    return products;
};

//time complexity: O(n)
//space complexity: O(1)

// test cases
let input;
let output;
let expected;

// tc1
input = [1, 7, 3, 4];
output = getProductsOfAllIntsExceptAtIndex(input);
expected = [84, 12, 28, 21];

console.log(output, 'should be', expected);

// tc2
input = [0, 7, 3, 4];
output = getProductsOfAllIntsExceptAtIndex(input);
expected = [84, 0, 0, 0];

console.log(output, 'should be', expected);

// tc3
input = [1];
output = getProductsOfAllIntsExceptAtIndex(input);
expected = [null];

console.log(output, 'should be', expected);
