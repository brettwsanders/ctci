/*
 * Description: Given a circular linked list, implement an algorithm hat returns the node at the beginning of the loop.
 *
 * DEFINITION
 * Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so
 * as to make a loop in the linked list.
 *
 * EXAMPLE
 * Input: A -> B -> C -> D -> E -> C [the same C as earlier]
 * Output: C
 *
 * Input: circular linked list (assume its always circular)
 * Output: the node at beginning of the loop
 * Contraints:
 * Edge Cases:
 */

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  appendToTail(value) {
    const tail = this.getTail();
    if (tail) {
      tail.next = new LinkedListNode(value);
      return tail.next;
    } else {
      return 'no tail';
    }
  }

  appendNodeToTail(node) {
    const tail = this.getTail();
    if (tail) {
      tail.next = node;
      return tail.next;
    } else {
      return 'no tail';
    }
  }

  getTail() {
    const head = this;
    const nodes = [];
    let currNode = this;
    while (currNode.next !== null) {
      for (let i = 0; i < nodes.length; i++) {
        if (currNode === nodes[i]) {
          return currNode;
        }
      }
      nodes.push(currNode);
      currNode = currNode.next;
    }
    return currNode;
  }
}

/* EXAMPLE
 * Input: A -> B -> C -> D -> E -> C [the same C as earlier]
 * Output: C
 */

// Test Cases
const linkedList = new LinkedListNode('A');
linkedList.appendToTail('B');
const nodeC = linkedList.appendToTail('C');
linkedList.appendToTail('D');
linkedList.appendToTail('E');
console.log(linkedList.getTail().value, 'should be', 'E');
linkedList.appendNodeToTail(nodeC);
console.log(linkedList.getTail().value, 'should be', 'C');


