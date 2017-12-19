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
 * - function must iterate to end of linkedList (e.g. racecarw)
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
    const array = this.toArray();
    for (let index = 0; index < array.length / 2; index++) {
      if (array[index] !== array[array.length - 1 - index]) {
        return false;
      }
    }
    return true;
  }
}

const createLinkedListFromArray = array => {
  if (array.length < 1) throw new Error('array has no items');
  const list = new LinkedListNode(array[0])
  for (let index = 1; index < array.length; index++) {
    list.append(array[index]);
  }
  return list;
};

// Test Cases
// Case 1
let array = [6, 7, 8, 9, 10];
let afterRemoval = [7, 8, 9, 10]
let linkedList = createLinkedListFromArray(array)
console.log(linkedList.toArray(), 'should equal', array);
linkedList.remove();
console.log(linkedList.toArray(), 'should equal', afterRemoval);
console.log(linkedList.isPalindrome(), 'should be', false);

// Case 2
array = ['r', 'a', 'c', 'e', 'c', 'a', 'r'];
linkedList = createLinkedListFromArray(array);
console.log(linkedList.toArray(), 'should equal', array);
console.log(linkedList.isPalindrome(), 'should be', true);

// Case 3
array = ['r', 'a', 'c', 'e', 'c', 'a', 'r', 'e'];
linkedList = createLinkedListFromArray(array);
console.log(linkedList.toArray(), 'should equal', ['r', 'a', 'c', 'e', 'c', 'a', 'r', 'e']);
console.log(linkedList.isPalindrome(), 'should be', false);
