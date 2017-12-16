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

  deleteNode() {
    // init follower node as this node
    let followerNode = this;
    // init leader node as next node
    let leaderNode = this.next;
    // while (leader is not null)
    while (leaderNode !== null) {
      // change value of follower node to leader value
      followerNode.value = leaderNode.value;
      // change follow node to leader node
      followerNode = leaderNode;
      // change leader node to next node
      leaderNode = leaderNode.next;
    }
    // point follower node to null
    followerNode.next = null;
  }
};


// Test Cases
let linkedList = new LinkedListNode(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
console.log(linkedList.toArray(), 'should be', [1, 2, 3, 4, 5]);
const node = linkedList.getNodeByIndex(2);
node.deleteNode()
console.log(linkedList.toArray(), 'should be', [1, 2, 4, 5]);
