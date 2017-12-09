/*
 * Description: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
 * column are set to 0.
 *
 * Input: MxN matrix, does not need to be square
 * Output:
 * Complexity:
 * Edge Cases:
 *
 * Ideas:
 * - loop through all values and find zeros. if zero is found then note the row and column. keep track of all rows and columns to be zero'd out
 * ---> then loop through again and build up new matrix
 * */

// Solution
const zeroMatrix = matrix => {
  // initialize result matrix
  let resultMatrix = matrix;
  // initialize objects to store the rows and columsn that will be zero'd out in result
  let rowsToBeZero = {};
  let columnsToBeZero = {};
  // loop through the matrix rows
    // loop through the matrix columns
      // add to resultMatrix
      // if zero is found
        // add column and row index to rowsToBeZero and columnsToBeZero

  // loop through resultMatrix rows
    // loop through resultMatrix columns
      // if column or row to be zero'd
        // replace value in resultMatrix with 0
  // return result
  return resultMatrix;
}

// Test Cases
let input;
let output;

// Case 1
input = [[]];
output = [[]];
console.log(zeroMatrix(input), 'should be', output);

// Case 2
input = [[1, 0], [1, 1]];
output = [[0, 0], [1, 0]];
console.log(zeroMatrix(input), 'should be', output);

// Case 3
input = [[1, 2, 3, 0], [4, 5, 6, 7]];
output = [[0, 0, 0, 0], [4, 5, 6, 0]];
console.log(zeroMatrix(input), 'should be', output);

// Case 4
input = [['a', 0, 'b', 0], [0, 'c', 0, 'd']];
output = [[0, 0, 0, 0], [0, 0, 0, 0]];
console.log(zeroMatrix(input), 'should be', output);

// Case 5
input = [[0, 'a', 1, 'bumblebee'], [undefined, null, {}, 0]];
output = [[0, 0, 0, 0], [0, 0, 0, 0]];
console.log(zeroMatrix(input), 'should be', output);

// Case 6
input = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 0]];
output = [[1, 1, 1, 0], [1, 1, 1, 0], [1, 1, 1, 0], [0, 0, 0, 0]];
console.log(zeroMatrix(input), 'should be', output);
