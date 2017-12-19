/*
 * Description: Implement a function to check if a linked list is a palindrome
 *
 * Input: linked list
 * Output: bool
 * Constraints: none
 * Edge Cases: linked list of size 1, values of non num or non string
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
    let curr = this;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new LinkedListNode(value)
  }

  remove() {
    let curr = this;
    if (curr.next.next !== null) {
      curr.value = curr.next.value;
      curr.next = curr.next.next;
    } else {
      curr.value = curr.next.value;
      curr.next = null;
    }
  }

  toArray() {
    const array = [];
    let curr = this;
    while (curr !== null) {
      array.push(curr.value);
      curr = curr.next;
    }
    return array;
  }

  isPalindrome() {
  }
}

// Test Cases
// Case 1
let linkedList = new LinkedListNode(6);
linkedList.append(7);
linkedList.append(8);
linkedList.append(9);
linkedList.append(10);
console.log(linkedList.toArray(), 'should equal', [6, 7, 8, 9, 10]);
linkedList.remove();
console.log(linkedList.toArray(), 'should equal', [7, 8, 9, 10]);
console.log(linkedList.isPalindrome(), 'should be', false);

// Case 2
linkedList = new LinkedListNode('r');
linkedList.append('a');
linkedList.append('c');
linkedList.append('e');
linkedList.append('c');
linkedList.append('a');
linkedList.append('r');
console.log(linkedList.toArray(), 'should equal', ['r', 'a', 'c', 'e', 'c', 'a', 'r']);
console.log(linkedList.isPalindrome(), 'should be', true);
