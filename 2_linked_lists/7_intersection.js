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
    const tail = this.getTail()
    tail.next = new LinkedListNode(value);
  }

  getNodeAtIndex(target) {
    let node = this;
    let index = 0;
    while (index < target && node.next !== null) {
      node = node.next;
      index++;
    }
    return node;
  }

  getTail() {
    let curr = this;
    while (curr.next !== null) {
      curr = curr.next;
    }
    return curr;
  }

  appendNode(node) {
    const tail = this.getTail();
    tail.next = node;
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

const intersection = (linkedList1, linkedList2) => {
  // init head 1
  const head1 = linkedList1;
  let node1 = head1;
  // init head 2
  const head2 = linkedList2;
  let node2;
  // loop through linkedList1
  while (node1 !== null) {
    node2 = head2;
    // loop through linkedList2
    while (node2 !== null) {
      // if nodes of 1 equals node of 2
      if (node1 === node2) {
        // return true
        return true;
      }
      node2 = node2.next;
    }
    node1 = node1.next;
  }
  // return false
  return false;
}

/*
 * Test Cases
 *
 * Case 1
 */
let array0 = 'heysupdude'.split("");
let linkedList0 = createLinkedList(array0);
console.log(linkedList0.toArray(), 'should be', array0);

// Case 2
let array1 = '123'.split("");
let array2 = '456789'.split("");
let linkedList = createLinkedList(array1);
let linkedList2 = createLinkedList(array2);
console.log(linkedList.toArray(), 'should be', array1);
console.log(linkedList2.toArray(), 'should be', array2);
let node = linkedList2.getNodeAtIndex(3);
linkedList.appendNode(node);
console.log(linkedList.toArray(), 'should be', '123789'.split(""));
console.log(intersection(linkedList, linkedList2), 'should be', true);
console.log(intersection(linkedList0, linkedList2), 'should be', false);
