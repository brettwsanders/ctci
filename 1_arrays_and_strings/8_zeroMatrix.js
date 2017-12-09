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
