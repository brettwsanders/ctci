/*
 * Description: Given two (singly) linked lists, determine if the two lists intersect. Return the inter-
 * secting node. Note that the intersection is defined based on reference, not value. That is, if the kth
 * node of the first linked list is the exact same node (by reference) as the jth node of the second
 * linked list, then they are intersecting.
 *
 * Input: two singly linked lists (at least length of 1)
 * Output: bool
 * Constraints:
 * Edge cases:
 * Ideas: How to check if reference is the same?
 *
 * 1 -> 2 -> 3 ->
 *                7 -> 8 -> 9
 * 4 -> 5 -> 6 ->
 *
 */

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
    curr.next = new LinkedListNode(value);
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

const createLinkedList = values => {
  const list = new LinkedListNode(values[0]);
  for (let index = 1; index < values.length; index++) {
    list.append(values[index]);
  }
  return list;
}

/*
 * Test Cases
 *
 * Case 1
 */
let array = 'heysupdude'.split("");
let linkedList = createLinkedList(array);
console.log(linkedList.toArray(), 'should be', array);

// Case 2
array = '1234567'.split("");
linkedList = createLinkedList(array);
console.log(linkedList.toArray(), 'should be', array);

