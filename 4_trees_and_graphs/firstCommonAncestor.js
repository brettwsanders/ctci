/*
 * First Common Ancestor: Design an algorithm and write code to find the first common ancestor
 * of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not
 * necessarily a binary search tree.
 *
 * I: two nodes of binary tree
 * O: node or null
 * C: dont store additional nodes in ds
 * E: input node is the top level node of bt
 */

class binaryTreeNode {
    constructor(value) {
        this.value = value;
        this.children = [undefined, undefined];
    }

    get left() {
        return this.children[0];
    }
    
    get right() {
        return this.children[1];
    }

    addLeft(value) {
        this.addChildNode(value, 0);
        return this.left();
    }

    addRight(value) {
        this.addChildNode(value, 1);
        return this.left();
    }

    addChildNode(value, index) {
        if (this.children[index] === undefined) {
            const node = new binaryTreeNode(value);
            this.children[index] = node;
        }
    }

}
 
