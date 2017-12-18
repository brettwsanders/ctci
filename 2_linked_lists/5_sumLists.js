/*
 * Description: You have two numbers represented by a linked list, where each node contains a single
 * digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a
 * function that adds the two numbers and returns the sum as a linked list.
 *
 * Follow Up: Suppose the digits are stored in forward order. Repeat the above problem.
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
    this.head = new Node(values[0]);
    let curr = this.head;
    for (let index = 1; index < values.length; index++) {
      curr.next = new Node(values[index]);
      curr = curr.next;
    }
  }

  append(value) {
    const last = this.getLastNode();
    last.next = new Node(value);
  }

  getLastNode() {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    return curr;
  }

  getAsArray() {
    const array = [];
    let curr = this.head;
    while(curr !== null) {
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

const sumLists = (firstList, secondList) => {
  // init both strings
  let firstString = '';
  let secondString = '';
  // loop thru first list and prepend to first string
  let currFirst = firstList.head;
  while (currFirst !== null) {
    firstString = String(currFirst.value) + firstString;
    currFirst = currFirst.next;
  }
  // loop thru second list and prepend to second string
  let currSecond = secondList.head;
  while (currSecond !== null) {
    secondString = String(currSecond.value) + secondString;
    currSecond = currSecond.next;
  }
  // convert both strings to numbers
  const firstNum = Number(firstString);
  const secondNum = Number(secondString);
  // add the numbers together
  const resultNum = firstNum + secondNum;
  // convert result number to string and reverse
  resultArray = String(resultNum).split("").reverse();
  resultArray = resultArray.map(i => Number(i));
  // init new list
  const resultList = new LinkedList(resultArray);
  return resultList;
}

// Test Cases
//
// Example:
// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295
// Output: 2 -> 1 -> 9. That is, 912
//
//
let first = [7, 1, 6];
let second = [5, 9, 2];
let result = [2, 1, 9];
let firstLinkedList = new LinkedList(first);
let secondLinkedList = new LinkedList(second);
console.log(firstLinkedList.getAsArray(), 'should be', first);
console.log(secondLinkedList.getAsArray(), 'should be', second);
let resultList = sumLists(firstLinkedList, secondLinkedList);
console.log(resultList.getAsArray(), 'should be', result);




