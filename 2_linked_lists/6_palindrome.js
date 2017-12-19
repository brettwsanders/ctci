/*
 * Description: Implement a function to check if a linked list is a palindrome
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
  }

  append(value) {
    this.next = new LinkedListNode(value)
  }

  remove() {
    let curr = this;
    while (curr.next.next !== null) {
      curr.value = curr.next.value;
      curr = curr.next;
    }
    curr.next = null;
  }

  toArray() {
    const array = [];
    let curr = this;
    while (curr !== null) {
      array.push(curr.value);
    }
    return array;
  }
}

// Test Cases

