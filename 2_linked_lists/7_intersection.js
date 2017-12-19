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

class LinkedList {
  constructor(values) {
    this.head = new Node(values[0]);
    this.tail = this.head;
    for (let index = 1; index < values.length; index++) {
      this.append(new Node(values[index]));
    }
  }

  append(value) {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
  }

  toArray() {
    const array = [];
    let curr = this.head;
    while (curr !== null) {
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

/*
 * Test Cases
 *
 * Case 1
 */


