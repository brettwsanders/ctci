/*
 * First Common Ancestor: Design an algorithm and write code to find the first common ancestor * of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not
 * necessarily a binary search tree.
 *
 * I: two nodes of binary tree
 * O: node or null
 * C: dont store additional nodes in ds
 * E: input node is the top level node of bt
 */

class binaryTreeNode {
    constructor(value, parent) {
        this.parent = parent;
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
        return this.left;
    }

    addRight(value) {
        this.addChildNode(value, 1);
        return this.right;
    }

    addChildNode(value, index) {
        if (this.children[index] === undefined) {
            const node = new binaryTreeNode(value, this);
            this.children[index] = node;
        }
    }
}

// keep searching up parents and checking if node has been reached by other node
// make sure to keep track of all nodes in each path
const firstCommonAncestor = (node1, node2) => {
    // if (invalidInput(node1, node2)) throw error
    const node1Path = [];
    const node2Path = [];
    let curr1 = node1.parent;
    let curr2 = node2.parent;
    // while curr1 and curr2 are defined
    while (curr1 !== undefined || curr2 !== undefined) {
        if (curr1 === curr2) return curr1;
        // if curr1, check if it exists anywhere in node2Path and return node if found
        if (curr1 !== undefined) {
            if (node2Path.includes(curr1)) {
                return curr1;
            }
        }
        // if curr2, check if it exists anywhere in node1Path and return node if found
        if (curr2 !== undefined) {
            if (node1Path.includes(curr2)) {
                return curr2;
            }
        }
        // add both to paths
        node1Path.push(curr1);
        node2Path.push(curr2);
        // update both currs to be parents
        if (curr1 !== undefined) curr1 = curr1.parent;
        if (curr2 !== undefined) curr2 = curr2.parent;
    }
    // return false if never found
    return false;
};

// Test Cases
let bt = new binaryTreeNode('x');
const y = bt.addLeft('y');
const p = bt.addRight('p');
const t = y.addLeft('t');
const z = y.addRight('z');
const m = z.addRight('m');
const j = p.addLeft('j');
const n = p.addRight('n');
const o = n.addRight('o');

console.log(firstCommonAncestor(j, o).value, 'should be p');
console.log(firstCommonAncestor(j, m).value, 'should be x');
console.log(firstCommonAncestor(bt, o).value, 'should be false');
console.log(firstCommonAncestor(t, y).value, 'should be x');









