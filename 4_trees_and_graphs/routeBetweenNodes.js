/*
 * Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
 */

// create graph class
class Graph {
    constructor(value) {
        const node = new Node(value);
        this.roots = [node];
    }

    // returns the number of nodes in graph, using dfs search
    getSize() {
        const size = this.roots.reduce((acc, root) => {
            return acc + root.getSize();
        }, 0);
        this.unvisitAll();
        return size;
    }

    unvisitAll() {
        this.roots.forEach(root => {
            root.unvisitAll();
        });
    }
}

// create node class
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
        this.visited = false;
    }

    addChild(value) {
        const node = new Node(value);
        this.children.push(node);
    }

    addChildNode(node) {
        this.children.push(node);
    }

    // dfs
    getSize() {
        return this.children.reduce((size, child) => {
            if (child.visited) {
                return size;
            } else {
                child.visited = true;
                return size + 1 + child.getSize();
            }
        }, 0);
    }

    unvisitAll() {
        if (this.visited) {
            this.visited = false;
            this.children.forEach(child => {
                child.unvisitAll();
            });
        }
    }
}

// question - we can still get stuck in infinite loop if not setting visited=true right?
const doesRouteExist = (node1, node2) => {
    // do breadth first search
    // create queue starting with all adjacents of node1
    const queue = [].concat(node1.children);
    // while queue has length
    while (queue.length) {
        // get node by dequeue queue
        const node = queue.shift();
        // if node is equal to node2 then return true
        if (node === node2) {
            return true;
        }
        // else enqueue all the nodes adjacents
        else {
        // enqueue all the nodes children
            node.children.forEach(node => {
                queue.push(node);
            });
        }
    }
    // return false if completing full search and never finding node2
    return false;
};

// approach
// want to use breadth first search because finding a path
//

// Test Cases
const graph = new Graph(1);
graph.roots[0].addChild(3);
graph.roots[0].addChild(2);
let node = graph.roots[0];
graph.roots[0].children[0].addChildNode(node);
graph.roots[0].children[0].addChild(5);
graph.roots[0].children[0].addChild(4);

console.log(graph.getSize(), 'should be', 5);

let node1 = graph.roots[0]; // 1
let node2 = graph.roots[0].children[0].children[1]; // 5
console.log(node1.value, 'should be', 1);
console.log(node2.value, 'should be', 5);
console.log(doesRouteExist(node1, node2), 'should be', true);

node1 = graph.roots[0].children[1]; // 2
node2 = graph.roots[0].children[0].children[2]; // 4
console.log(node1.value, 'should be', 2);
console.log(node2.value, 'should be', 4);
console.log(doesRouteExist(node1, node2), 'should be', false);

// lessons learned
// - best to call them adjacents than children (children is more appropriate in a tree structure)

// questions
// - is there a better way to get specific nodes (e.g. when setting up the problem and needing to get leaf at bottom of branch to input as param for doesRouteExist
