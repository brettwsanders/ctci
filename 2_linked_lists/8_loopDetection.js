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
    let node = this;
    let seenHead = 0;
    while (node.next !== null) {
      // return false if circular
      if (node === head) {
        seenHead++;
        if (seenHead > 1) return false;
      }
      node = node.next;
    }
    return node;
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
linkedList.appendNodeToTail(nodeC);



