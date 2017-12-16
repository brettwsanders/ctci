/*
 * Description: Write code to partition a linked list around a value x, such that all nodes less than x come
 * before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
 * to be after the elements less than x (see below). The partition element x can appear anywhere in the
 * "right partition"; it does not need to appear between the left and right partitions.
 *
 * Example:
 * Input: 3->5->8->5->10->2->1 [partition = 5]
 * Output: 3->1->2->10->5->5->8
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
    if (values.length < 1) {
      this.head = null;
      this.next = null;
    } else {
      this.head = new Node(values[0]);
      let currNode = this.head;
      for (let i = 1; i < values.length; i++) {
        const nextNode = new Node(values[i]);
        currNode.next = nextNode;
        currNode = nextNode;
      }
    }
  }

  toArray() {
    const array = [];
    let currNode = this.head;
    while(currNode !== null) {
      array.push(currNode.value);
      currNode = currNode.next;
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

const partition = (ll, value) => {
  // init left partition
  const left = [];
  // init right partition
  const right = [];
  // loop thru all values of ll
  let currNode = ll.head;
  while (currNode) {
    // if value is less than value, put in left partion
    if (currNode.value < value) {
      left.push(currNode.value);
    // if value is more or equal to value, put in right partition
    } else {
      right.push(currNode.value);
    }
    currNode = currNode.next;
  }
  // seam together left and right partition
  const partitioned = left.concat(right);
  // create new ll with left and right partitions
  ll = new LinkedList(partitioned);
  // change the head of ll to the head of leftPartition
  return ll;
}

// Test Cases
const values = [3, 5, 8, 5, 10, 2, 1];
const result = [3, 1, 2, 10, 5, 5, 8];
let linkedList = new LinkedList(values)
console.log(linkedList.toArray(), 'should be', values);
linkedList = partition(linkedList, 5);
console.log(linkedList.toArray(), 'should be', result);

