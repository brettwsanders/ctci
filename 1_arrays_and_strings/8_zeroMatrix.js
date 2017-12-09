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
 * -
 * */

// Solution
const zeroMatrix = matrix => {
  let resultMatrix = matrix;
  return resultMatrix;
}

// Test Cases
// Case 1
let input = [[]];
let output = [[]];
console.log(zeroMatrix(input), 'should be', output);

// Case 2
let input = [[1, 0], [1, 1]];
let output = [[0, 0], [1, 0]];
console.log(zeroMatrix(input), 'should be', output);
