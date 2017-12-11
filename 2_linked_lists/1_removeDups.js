/*
 * Description: Write code to remove duplicates from an unsorted linked list.
 *
 * FOLLOW UP
 *
 * How would you solve the problem if a temporary buffer is not allowed?
 *
 * Input:
 * Output:
 * Complexity:
 * Edge Cases:
 *
 * Ideas:
 * -
 * */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  getListAsArray() {
    const array = [];
    let node = this;
    while (node !== null) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }

  appendNode(value) {
    const node = new Node(value);
    let end = this;
    while(end.next !== null) {
      end = end.next;
    }
    end.next = node;
  }
}

// Solution
const removeDups = list => {
}

// Test Cases
const linkedList = new Node(7);
linkedList.appendNode(8);
linkedList.appendNode(1);
console.log(linkedList.getListAsArray());
