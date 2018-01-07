/*
 * List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes
 * at each depth (e.g., if you have a tree with depth D, you'll have D linked lists)
 *
 * I: binary tree
 * O: object of linkedLists
 * C: 
 * E:
 */

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    insert(value) {
        // init queue with self
        let queue = [this];
        // while queue has length
        while (queue.length) {
            // check if left or right spot is open
            const node = queue.shift();
            if (node.children[0] === undefined) {
                // create node and insert and return
                node.children[0] = new BinaryTreeNode(value);
                return;
            } else if (node.children[1] === undefined) {
                // create node and insert and return
                node.children[1] = new BinaryTreeNode(value);
                return;
            } else {
            // enqueue children
                queue = queue.concat(node.children);
            }
        }
    }

}

const listOfDepths = binaryTree => {
    // init object
    // init currentDepth
    // init queue as empty array
    // init nextQueue as empty array
    // while (queue has length)
        // dequeue node
        // add node to object at current depth (create if not created yet)
        // add nodes children to nextQueue
        // if queue is empty then set queue to nextQueue and reset nextQueue and increment currentDepth
    // return results
};

// Test Cases

const btNode = new BinaryTreeNode(0);
for (let i = 1; i < 10; i++) {
    btNode.insert(i);
}

console.log(JSON.stringify(btNode, null, 2));




