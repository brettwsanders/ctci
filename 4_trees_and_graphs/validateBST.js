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
        return this.left;
    }

    addRight(value) {
        this.children[1] = new BinaryTreeNode(value);
        return this.right;
    }

    get left() {
        return this.children[0];
    }

    get right() {
        return this.children[1];
    }

    get countChildren() {
        return this.children.reduce((acc, child) => {
            if (child !== undefined) return acc + 1;
        }, 0);
    }
}

// recursively look at each node and confirm that left is less, and right is more
const isBST = btn => {
    // base case
    // if leaf or undefined, return true
    if (btn === undefined || btn.countChildren === 0) return true;
    // if left child exists, and value is more than node, return false
    if (btn.left !== undefined && btn.left.value > btn.value) return false;
    // if right child exists, and value is less than or equal than node, return false
    if (btn.right !== undefined && btn.right.value <= btn.value) return false;
    // return isBST(left) && isBST(right)
    return isBST(btn.left) && isBST(btn.right);
};

// Test Cases
let bst = new BinaryTreeNode(4);
let left = bst.addLeft(2);
let right = bst.addRight(6);
left.addLeft(1);
left.addRight(3);
right.addLeft(5);
right.addRight(7);
console.log(isBST(bst), 'should be', true);

bst = new BinaryTreeNode(4);
left = bst.addLeft(2);
right = bst.addRight(6);
left.addLeft(1);
left.addRight(3);
right.addLeft(5);
right.addRight(4);
console.log(isBST(bst), 'should be', false);

