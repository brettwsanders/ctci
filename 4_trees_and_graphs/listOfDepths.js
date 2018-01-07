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

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    add(value) {
        let curr = this;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = new LinkedListNode(value);
    }
}

const listOfDepths = binaryTree => {
    // init object
    const results = {};
    // init currentDepth
    let currentDepth = 1;
    // init queue as empty array
    let queue = [binaryTree];
    // init nextQueue as empty array
    let nextQueue = [];
    // while (queue has length)
    while (queue.length) {
        // dequeue node
        const node = queue.shift();
        // add node to object at current depth (create if not created yet)
        if (results[currentDepth] === undefined) {
            results[currentDepth] = new LinkedListNode(node);
        } else {
            results[currentDepth].add(node)
        }
        // add nodes children to nextQueue
        nextQueue = nextQueue.concat(node.children);
        // if queue is empty then set queue to nextQueue and reset nextQueue and increment currentDepth
        if (queue.length === 0) {
            queue = nextQueue;
            nextQueue = [];
            currentDepth++;
        }
    }
    // return results
    return results;
};

// Test Cases

const btNode = new BinaryTreeNode(0);
for (let i = 1; i < 10; i++) {
    btNode.insert(i);
}
const result = listOfDepths(btNode)
console.log(JSON.stringify(result, null, 2));




