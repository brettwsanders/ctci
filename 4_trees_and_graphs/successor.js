/*
 * Successor: Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a 
 * binary search tree. You may assume that each node has a link to its parent.
 */

class BinarySearchTreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addLeft(value) {
        const node = new BinarySearchTreeNode(value);
        this.children[0] = node;
    }

    addRight(value) {
        const node = new BinarySearchTreeNode(value);
        this.children[1] = node;
    }
}

// Test Cases
