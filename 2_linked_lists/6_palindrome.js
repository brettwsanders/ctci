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
}

// Test Cases
const linkedList = new LinkedListNode(6);
linkedList.append(7);
linkedList.append(8);
linkedList.append(9);
linkedList.append(10);
console.log(linkedList.toArray(), 'should equal', [6, 7, 8, 9, 10]);
linkedList.remove();
console.log(linkedList.toArray(), 'should equal', [7, 8, 9, 10]);
