/*
 * Successor: Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a 
 * binary search tree. You may assume that each node has a link to its parent.
 */

class BinarySearchTreeNode {
    constructor(value, parent) {
        this.value = value;
        this.parent = parent;
        this.children = [];
    }

    addLeft(value) {
        const node = new BinarySearchTreeNode(value, this);
        this.children[0] = node;
        return node;
    }

    addRight(value) {
        const node = new BinarySearchTreeNode(value, this);
        this.children[1] = node;
        return node;
    }
}

const successor = bst => {
    // check down to right and all the way left
    let curr = bst;
    if (curr.children[1] !== undefined) {
        curr = curr.children[1];
        // check down to right
        while (curr.children[0] !== undefined) {
            curr = curr.children[0];
        }
        return curr;
    }
    // check up
    let parent = curr.parent;
    while (parent !== undefined) {
        // if curr is less then parent, return parent
        if (curr.value <= parent.value) return parent;
        // check up and up again
        parent = parent.parent;
    }
    // return node
    return null;
};

// Test Cases
let bst = new BinarySearchTreeNode(4);
let middleLeft = bst.addLeft(2);
let middleRight = bst.addRight(6);
let bottomLeftLeft = middleLeft.addLeft(1);
let bottomLeftMid = middleLeft.addRight(3);
let bottomRightMid = middleRight.addLeft(5);
let bottomRightRight = middleRight.addRight(7);

console.log(successor(bst).value, 'should be', 5);
console.log(successor(middleLeft).value, 'should be', 3);
console.log(successor(middleRight).value, 'should be', 7);
console.log(successor(bottomLeftLeft).value, 'should be', 2);
console.log(successor(bottomLeftMid).value, 'should be', 4);
console.log(successor(bottomRightMid).value, 'should be', 6);
console.log(successor(bottomRightRight), 'should be', null);
