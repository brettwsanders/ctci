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

  // Solution
  removeDups() {
    const valuesStore = {};
    let currNode = this;
    valuesStore[currNode.value] = true;

    while (currNode && currNode.next !== null) {
      if (valuesStore[currNode.next.value]) {
        currNode.next = currNode.next.next;
      } else {
        valuesStore[currNode.next.value] = true;
      }
      currNode = currNode.next;
    }
  }
}

// Test Cases

// Case 1
let linkedList = new Node(7);
linkedList.appendNode(8);
linkedList.appendNode(1);
linkedList.appendNode(8);
linkedList.appendNode('hello');
linkedList.appendNode('hello');
linkedList.appendNode('hello');
linkedList.appendNode(1);
linkedList.removeDups();
console.log(linkedList.getListAsArray(), 'should be', [7, 8, 1, 'hello']);





