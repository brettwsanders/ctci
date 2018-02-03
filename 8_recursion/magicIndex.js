/*
 * Magic Index: a magic index in an array A[0...n-1] is defined to be an index such that A[i] = i
 * Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in
 * array A.
 *
 * Follow up: What if the values are not distinct?
 */

const findMagicIndexBrute = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i) return arr[i];
    }
    return null;
};

// use binary search and recursion
const findMagicIndex = (arr, start, end) => {
    // if no array then return null
    if (arr.length === 0) return null;
    if (end <= start) return null;

    // set start and end if not defined
    if (start === undefined) start = 0;
    if (end === undefined) end = arr.length - 1;

    // get middle of array
    let index = start + Math.floor(((end + 1) - start) / 2);
    let middle = arr[index];
    // check if magic
    if (middle === index) {
        return middle;
    // else if less than i, take second half of array
    } else if (middle < index) {
        return findMagicIndex(arr, index + 1, end);
    // else if more than i, take first half of array
    } else {
        return findMagicIndex(arr, start, index - 1);
    }
}

//Test Cases
let a;
let result;

//Test Case 1
a = [0, 1, 2, 3];     // all magic indeces
result = findMagicIndex(a);
console.log(result, 'should be 0, 1, 2, or 3');

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
