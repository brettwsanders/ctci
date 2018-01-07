/*
 * Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an
 * algorithm to create a binary search tree with minimal height.
 *
 * I: sorted(increasing order) array with unique integers
 * O: binary search tree
 * C: binary search tree must be minimal height
 * E: array size of 1, negative nums, invalid input
 */

class Node = {
    constructor(val) {
        this.val = val;
        this.children = [undefined, undefined];
    }

    addLeft(val) {
        const node = new Node(val);
        this.children[0] = node;
    }

    addRight() {
        const node = new Node(val);
        this.children[1] = node;
    }
};

// Approach: recursively split the array in half, middle integer is the node, 

const minimalTree = array => {
    // if length of array is 0, return
    if (array.length === 0) return;
    // if length of array is 1, return new node
    if (array.length === 1) return new Node(array[0]);
    // create a node from the middle node of the array 
    // the left branch is minimalArray(leftArray)
    // the right branch is minimalArray(rightArray)
    // return node
}


// Test Cases
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
