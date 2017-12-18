/*
 * Description: You have two numbers represented by a linked list, where each node contains a single
 * digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a
 * function that adds the two numbers and returns the sum as a linked list.
 *
 * Example:
 * Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295
 * Output: 2 -> 1 -> 9. That is, 912
 *
 * Follow Up: Suppose the digits are stored in forward order. Repeat the above problem.
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
    this.head = new Node(values[0]);
    let curr = this.head;
    for (let index = 1; index < values.length; index++) {
      curr.next = new Node(values[index]);
      curr = curr.next;
    }
  }

  append(value) {
    const last = this.getLastNode();
    last.next = new Node(value);
  }

  getLastNode() {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    return curr;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Test Cases
