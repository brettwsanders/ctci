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

    // dfs
    getSize() {
        return this.children.reduce((size, child) => {
            if (child.visited) {
                return size;
            } else {
                child.visited = true;
                return size + child.getSize();
            }
        }, 1);
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

const doesRouteExist = (node1, node2) => {
};

// approach
// want to use breadth first search because finding a path
//

// Test Cases
const graph = new Graph(1);
graph.roots[0].addChild(2);
graph.roots[0].addChild(3);
graph.roots[0].children[1].addChild(4);
graph.roots[0].children[1].addChild(5);

console.log(graph.getSize(), 'should be', 5);





