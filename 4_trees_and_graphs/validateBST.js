/*
 * Validate BST: Implement a function to check if a binary tree is a binary search tree.
 *
 * BST definition: every value to left is less than or equal to every value on right
 */

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addLeft(value) {
        this.children[0] = new BinaryTreeNode(value);
        return this.children[0];
    }

    addRight(value) {
        this.children[1] = new BinaryTreeNode(value);
        return this.children[1];
    }
}

// recursively look at each node and confirm that left is less, and right is more
const isBST = btn => {
    // base case
    // if leaf or undefined, return true
    // if left child exists, and value is more than node, return false
    // if right child exists, and value is less than or equal than node, return false
    // return isBST(left) && isBST(right)
};

// Test Cases
const bst = new BinaryTreeNode(4);
const left = bst.addLeft(2);
const right = bst.addRight(6);
left.addLeft(1);
left.addRight(3);
right.addLeft(5);
right.addRight(7);
console.log(isBST(bst), 'should be', true);
