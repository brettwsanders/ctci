/*
 * Description: Implement an algorithm to find the kth to last element of a singly linked list.
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
  constructor(value) {
    this.head = new Node(value);
  }

  append(value) {
    let curr = this.head;
    while(curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new Node(value);
  }

  toArray() {
    const array = [];
    let curr = this.head;
    while(curr !== null) {
      array.push(curr.value);
      curr = curr.next;
    }
    return array;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Test Cases
let linkedList = new LinkedList(7);
linkedList.append(8);
linkedList.append(9);
linkedList.append(false);
linkedList.append('');
console.log(linkedList.toArray());

