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

    getLeft() {
        return this._children[0];
    }

    getRight() {
        return this._children[1];
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

const checkBalanced = bt => {
    if (!bt) return false;
    // function for get max depth (recursive)
    const maxDepth = node => {
        // if undefined input return 0;
        if (!node) return 0;
        // get max depth of left branch + 1
        const maxDepthLeft = 1 + maxDepth(node.getLeft());
        // get max depth of right branch + 1
        const maxDepthRight = 1 + maxDepth(node.getRight());
        // return the max
        return Math.max(maxDepthLeft, maxDepthRight);
    };
 
    // init left and right depth counts at 0
    // get depth of left
    // get depth of right
    // return depth more than 1
    const leftMaxDepth = maxDepth(bt.getLeft());
    const rightMaxDepth = maxDepth(bt.getRight());
    return Math.abs(leftMaxDepth - rightMaxDepth) < 2;
};

// Test Cases
// depth = 0
const unbalanced = new BinaryTreeNode(0);
// depth = 1
const b1 = unbalanced.addLeft(1);
const b2 = unbalanced.addRight(1);
// depth = 2
const b3 = b1.addLeft(2);
const b4 = b1.addRight(2);
// depth = 3
const b5 = b3.addLeft(3);
const b6 = b3.addRight(3);

console.log(checkBalanced(unbalanced), 'should be', false);
console.log(checkBalanced(b1), 'should be', true);
console.log(checkBalanced(b2), 'should be', true);
console.log(checkBalanced(b3), 'should be', true);
console.log(checkBalanced(b4), 'should be', true);
console.log(checkBalanced(b5), 'should be', true);
console.log(checkBalanced(b6), 'should be', true);




