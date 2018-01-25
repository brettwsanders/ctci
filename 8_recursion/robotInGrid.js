/*
 * Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
 * The robot can only move in two directions, right and down, but certain cells are "off limits" such that
 * the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to
 * the bottom right.
 *
 * I: matrix of RxC size
 * O: path of robot from top left to bottom right
 * E: no solutions, bad matrix input
 * C: only move right and down
 */


const findPath = (matrix, curr = [0, 0], path = []) => {
    // check if current is equal to bottom right most and return path if true
    if (curr[0] === matrix.length - 1 && curr[1] === matrix[0].length - 1) {
        return path;
    }
    // get the right and down locations
    const rightBy1 = [curr[0], curr[1] + 1];
    const downBy1 = [curr[0] + 1, curr[1]];
    // if the locations are free to move then move
    let possibles = 0;
    if (matrix[rightBy1[0]][rightBy1[1]]) {
        possibles++;
        return findPath(matrix, rightBy1, path.concat('right'));
    }
    if (matrix[downBy1[0]][downBy1[1]]) {
        possibles++;
        return findPath(matrix, downBy1, path.concat('down'));
    }
    if (possibles === 0) return false;
};

// Test Cases
let matrix;
let result;

// Test Case 1
matrix = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1]
];
result = ['down', 'down', 'right', 'right', 'right', 'right', 'down'];

console.log(findPath(matrix), 'should be', result);

// Test Case 2
matrix = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 1]
];
result = false;

console.log(findPath(matrix), 'should be', result);

// Test Case 3
matrix = [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 1]
];
result = ['right', 'right', 'right', 'right', 'down', 'down', 'down'];

console.log(findPath(matrix), 'should be', result);
