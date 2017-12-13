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
 * - store a count of nodes on the linkedList class
 * - run through the entire linkedList twice
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

  kthToLast(k) {
    // if k is less then 1 throw error
    if (k < 1) throw error;
    // init count of linked list nodes
    let nodesCount = 0;
    // run through entire linked list
    let currNode = this.head;
    while (currNode !== null) {
      // for each node add one to count
      nodesCount++;
      currNode = currNode.next;
    }
    // if k is more than count then throw error
    if (k > nodesCount) throw error;
    // init target index as count - k
    const targetIndex = count - k;
    // init current index as 0
    const currIndex = 0;
    // init current node
    currNode = this.head;
    // run through linked list while current is less than target
    while (currIndex < targetIndex) {
      // current node is next node
      currNode = currNode.next;
      // current index ++
      currIndex++;
    }
    // return current node
    return currNode;
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
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.append('ok');
// linked list is now [8, 9, false, '', 3, 4, 5, 'ok']
// length of linked list is 8

console.log(linkedList.kthToLast(0), 'should be error');
console.log(linkedList.kthToLast(1), 'should be ok');
console.log(linkedList.kthToLast(2), 'should be 5');
console.log(linkedList.kthToLast(3), 'should be 4');
console.log(linkedList.kthToLast(4), 'should be 3');
console.log(linkedList.kthToLast(5), 'should be ""');
console.log(linkedList.kthToLast(6), 'should be false');
console.log(linkedList.kthToLast(7), 'should be 9');
console.log(linkedList.kthToLast(8), 'should be 8');
console.log(linkedList.kthToLast(9), 'should be error');
