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
    const productsOfIntsBeforeIndex = []; // [1, 1, 7, 21]
    const productsOfIntsAfterIndex = [];  // [84, 12, 4, 1]
    const products = [];

    let productsSoFarForward = 1;
    let productsSoFarBackward = 1;
    for (let i = 0; i < ints.length; i++) {
        const intForward = ints[i];
        productsOfIntsBeforeIndex.push(productsSoFarForward);
        productsSoFarForward = productsSoFarForward * intForward;

        const intBackward = ints[ints.length - 1 - i];
        productsOfIntsAfterIndex.unshift(productsSoFarBackward);
        productsSoFarBackward = productsSoFarBackward * intBackward;
    }

    for (let i = 0; i < ints.length; i++) {
        const product = productsOfIntsBeforeIndex[i] * productsOfIntsAfterIndex[i];
        products.push(product);
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
