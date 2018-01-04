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


class SetOfStacks {
    constructor(value, maxHeight) {
        const stack = new Stack(value);
        this.stacks = [stack];
        this.maxHeight = maxHeight;
    }

    push(value) {
        // get last stack in set of stacks
        const topStack = this.peek();
        // check the size of the stack
        // if size is equal to max height
        if (topStack.size() === this.maxHeight) {
            // create a new stack
            const newStack = new Stack(value);
            // push stack into set of stacks
            this.stacks.push(newStack);
        } else {
            // push value into stack
            topStack.push(value);
        }
    }

    pop() {
        if (this.stacks.length === 0) return false;
        // get top stack
        const topStack = this.peek();
        // pop value from stack
        const value = topStack.pop();
        // check if top stack has length more than 0
        // if length is 0
        if (topStack.size() === 0) {
            // delete the top stack from set of stacks
            this.stacks.splice(this.stacks.length - 1, 1);
        }
        return value;
    }

    // return the top stack in the set of stacks
    peek() {
        return this.stacks[this.stacks.length - 1]
    }
}


class Stack {
    constructor(value) {
        this.data = [value];
    }

    push(value) {
        this.data[this.size()] = value;
    }

    pop() {
        if (this.size() === 0) return false;
        return this.data.splice(this.size() - 1, 1)[0];
    }

    peek() {
        return this.data[this.size() - 1];
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

let setOfStacks = new SetOfStacks(1, 4);
setOfStacks.push(2);
setOfStacks.push(3);
setOfStacks.push(4);
setOfStacks.push(5);
setOfStacks.push(6);
setOfStacks.push(7);
setOfStacks.push(8);
setOfStacks.push(9);
setOfStacks.push(10);
console.log(setOfStacks);
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
console.log(setOfStacks);
