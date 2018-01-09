/*
 * Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of
 * this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
 * node never differ by more than one.
 */

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this._children = [];
    }

    addLeft(value) {
        const node = new BinaryTreeNode(value);
        this._children[0] = node;
        return node;
    }

    addRight(value) {
        const node = new BinaryTreeNode(value);
        this._children[1] = node;
        return node;
    }
}

// Test Cases
// depth = 0
const unbalanced = new BinaryTreeNode(0);
// depth = 1
const b1 = unbalanced.addLeft(1);
const b2 = unbalanced.addRight(1);
// depth = 2
const b3 = b1.addLeft(2);
const b4 = b1.addReft(2);
// depth = 3
const b5 = b3.addLeft(3);
const b6 = b3.addRight(3);


