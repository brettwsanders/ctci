/*
 * Description: Given an image represented by an NxN matrix, where each pixel in the image is 4
 * bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
 *
 * Input: an array of array(s), with NxN size (i.e. 1x1, 2x2, 3x3, 4x4)
 * Output: an array of array(s), but rotated 90 degrees
 * Complexity:
 * Edge Cases:
 *
 * Ideas:
 * -
 * */

// Solution
const rotateMatrix = matrix => {
  // init rotatedMatrix
  let rotatedMatrix = [];
  // loop through the columns of the matrix (left to right)
  for (let column = 0; column < matrix.length; column++) {
    // init a new array to be inserted as row into rotated matrix
    let rowOfRotatedMatrix = [];
    // loop through the rows of the matrix (bottom to up)
    for (let row = matrix.length - 1; row >= 0; row--) {
       // push the current byte into the new array
      const byte = matrix[row][column];
      if (byte) rowOfRotatedMatrix.push(byte);
    };
    // push the array into rotatedMatrix
    rotatedMatrix.push(rowOfRotatedMatrix);
  };

  return rotatedMatrix;
};

// Test Cases
let startingMatrix;
let expectedRotatedMatrix;

// case 1
startingMatrix = [['a']];
expectedRotatedMatrix = [['a']];
console.log(rotateMatrix(startingMatrix), 'should equal', expectedRotatedMatrix);

// case 2
startingMatrix = [['a', 'b'], ['c', 'd']];
expectedRotatedMatrix = [['c', 'a'], ['d', 'b']];
console.log(rotateMatrix(startingMatrix), 'should equal', expectedRotatedMatrix);

// case 3
startingMatrix = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
expectedRotatedMatrix = [['g', 'd', 'a'], ['h', 'e', 'b'], ['i', 'f', 'c']];
console.log(rotateMatrix(startingMatrix), 'should equal', expectedRotatedMatrix);

// case 4
startingMatrix = [[]];
expectedRotatedMatrix = [[]];
console.log(rotateMatrix(startingMatrix), 'should equal', expectedRotatedMatrix);
