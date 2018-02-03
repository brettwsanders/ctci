/*
 * Magic Index: a magic index in an array A[0...n-1] is defined to be an index such that A[i] = i
 * Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in
 * array A.
 *
 * Follow up: What if the values are not distinct?
 */

const findMagicIndex = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i) return arr[i];
    }
    return null;
};

//Test Cases
let a;
let result;

// Test Case 1
a = [0, 1, 2, 3];     // all magic indeces
result = findMagicIndex(a);
console.log(result, 'should be', 0);

// Test Case 2
a = [-100, 1, 5, 10]; // 1 is a magic index
result = findMagicIndex(a);
console.log(result, 'should be', 1);

// Test Case 3
a = [-2, 0, 1, 2, 4]; // 4 is a magic index
result = findMagicIndex(a);
console.log(result, 'should be', 4);

// Test Case 4
a = [1, 2, 3];        // no magic indeces
result = findMagicIndex(a);
console.log(result, 'should be', null);
