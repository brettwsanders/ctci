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
    let nextNode = this.next;
    valuesStore[currNode.value] = true;

    while (nextNode !== null) {
      if (valuesStore[nextNode.value]) {
        // remove the duplicate by rewiring the list
        currNode.next = nextNode.next;
      } else {
        valuesStore[nextNode.value] = true;
        currNode = nextNode;
      }
      nextNode = currNode.next;
    }
  }

  removeDupsAlt() {
    let currNode = this;
    while (currNode !== null) {
      let followerNode = currNode;
      let leaderNode = currNode.next;
      while (leaderNode !== null) {
        if (currNode.value === leaderNode.value) {
          followerNode.next = leaderNode.next;
        } else {
          followerNode = leaderNode;
        }
        leaderNode = followerNode.next;
      }
      currNode = currNode.next;
    }
  }
}

// Test Cases

const case1 = alt => {
  let linkedList = new Node(7);
  linkedList.appendNode(8);
  linkedList.appendNode(1);
  linkedList.appendNode(8);
  linkedList.appendNode('hello');
  linkedList.appendNode('hello');
  linkedList.appendNode('hello');
  linkedList.appendNode(1);
  if (alt) {
    linkedList.removeDupsAlt();
  } else {
    linkedList.removeDups();
  }
  console.log(linkedList.getListAsArray(), 'should be', [7, 8, 1, 'hello']);
}

const case2 = alt => {
  linkedList = new Node(7);
  linkedList.appendNode(8);
  linkedList.appendNode(1);
  linkedList.appendNode(8);
  if (alt) {
    linkedList.removeDupsAlt();
  } else {
    linkedList.removeDups();
  }
  console.log(linkedList.getListAsArray(), 'should be', [7, 8, 1]);
}

const case3 = alt => {
  linkedList = new Node('_');
  linkedList.appendNode('_');
  linkedList.removeDups();
  if (alt) {
    linkedList.removeDupsAlt();
  } else {
    linkedList.removeDups();
  }
  console.log(linkedList.getListAsArray(), 'should be', ['_']);
}

// Case 1
case1();
case1('alt');

// Case 2
case2();
case2('alt');

// Case 3
case3();
case3('alt');
