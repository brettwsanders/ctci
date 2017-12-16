/*
 * Description: Implement an algorithm to delete a node in the middle (i.e. any node but
 * the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
 * that node.
 *
 * Example:
 * Input: the node c from the linked list a->b->c->d->e->f
 * Result: nothing is returned, but the new linked list looks like a->b->d->e->f
 *
 * Input:
 * Output:
 * Constraints:
 * Edge Cases:
 *
 * Time Complexity:
 * Space Complexity:
 *
 * Ideas:
 * */

// Solution
class LinkedList {
  constructor(values) {
    this.head = new LinkedListNode(values[0]);
    for (let index = 1; index < values.length; index++) {
      this.head.append(values[index]);
    }
  }
}

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  };

  append(value) {
    let curr = this;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new LinkedListNode(value);
  }

  toArray() {
    let arr = [];
    let curr = this;
    while (curr !== null) {
      arr.push(curr.value);
      curr = curr.next;
    }
    return arr;
  }

  getNodeByIndex(index) {
    let node = this;
    let count = 0;
    while (index > count) {
      node = node.next;
      count++;
    }
    return node;
  }

  deleteNode() {
    // init follower node as this node
    let followerNode = this;
    // init leader node as next node
    let leaderNode = this.next;
    // while (leader is not null)
    while (leaderNode.next !== null) {
      // change value of follower node to leader value
      followerNode.value = leaderNode.value;
      // change follow node to leader node
      followerNode = leaderNode;
      // change leader node to next node
      leaderNode = leaderNode.next;
    }
    // point follower node to null
    followerNode.value = leaderNode.value;
    followerNode.next = null;
  }
};


// Test Cases
// Case 1
let linkedList = new LinkedListNode(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
console.log(linkedList.toArray(), 'should be', [1, 2, 3, 4, 5]);
const node = linkedList.getNodeByIndex(2);
console.log(node.value, 'should be', 3);
node.deleteNode();
console.log(linkedList.toArray(), 'should be', [1, 2, 4, 5]);


let testList = new LinkedList([7, 6, 5, 4, 3, 2, 1]);
let testNode = testList.head.getNodeByIndex(1);
testNode.deleteNode();
console.log(testList.head.toArray(), 'should be', [7, 5, 4, 3, 2, 1]);
