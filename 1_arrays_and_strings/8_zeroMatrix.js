/*
 * Description: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
 * column are set to 0.
 *
 * Input: MxN matrix, does not need to be square
 * Output: MxN matrix, same size, but with rows and columns zero'd out where zeros exist
 * Complexity: ONM
 * Edge Cases:
 *
 * Ideas:
 * - loop through all values and find zeros. if zero is found then note the row and column. keep track of all rows and columns to be zero'd out
 * ---> then loop through again and build up new matrix
 *
 * How to optimize:
 * - dont need to do anything if no values in rowsToBeZero or columnsToBeZero
 * */

// Solution
const zeroMatrix = matrix => {
  // initialize result matrix
  let resultMatrix = matrix;
  // initialize objects to store the rows and columsn that will be zero'd out in result
  let rowsToBeZero = {};
  let columnsToBeZero = {};
  // loop through the matrix rows
  for (let row = 0; row < matrix.length; row++) {
    // loop through the matrix columns
    for (let column = 0; column < matrix[row].length; column++) {
      // add to resultMatrix
      const value = matrix[row][column];
      resultMatrix[row][column] = value; // TODO: copy value instead of reference
      // if zero is found
      if (value === 0) {
        // add column and row index to rowsToBeZero and columnsToBeZero
        rowsToBeZero[row] = true;
        columnsToBeZero[column] = true;
      }
    }
  }
  // if there are no rows to be zero'd then returnMatrix. Don't need to check columns
  // because if no rows, then there will be no columns
  if (Object.keys(rowsToBeZero) === 0) { return resultMatrix; }

  // loop through resultMatrix rows
  for (let row = 0; row < matrix.length; row++) {
    // loop through resultMatrix columns
    for (let column = 0; column < matrix[row].length; column++) {
      // if column or row to be zero'd
      if (rowsToBeZero[row] || columnsToBeZero[column]) {
        // replace value in resultMatrix with 0
        resultMatrix[row][column] = 0;
      }
    }
  }
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
