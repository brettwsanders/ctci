/*
 * Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
 * Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
 * threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be
 * composed of several staks and should create a new stack once the previous one exceeds capacity.
 * SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack
 * (that is, pop() should return the same values as it would if there were just a single stack).
 *
 * FOLLOW UP
 * Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.
 *
 */


class Stack {
    constructor(value) {
        this.data = [value];
    }

    push(value) {
        this.data[this.size()] = value;
    }

    pop() {
        return this.data.splice(this.size() - 1, 1)[0];
    }

    size() {
        return this.data.length;
    }
}


// Test Cases

let stack = new Stack(1); // [1]
console.log(stack.size(), 'should be 1');
stack.push(2); // [1, 2]
stack.push(3); /// [1, 2, 3]
stack.push(4); // [1, 2, 3, 4]
console.log(stack.pop(), 'should be 4');
console.log(stack.size(), 'should be 3');
