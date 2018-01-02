/* 
 * Description: How would you design a stack which, in addition to push and pop, has a function min
 * which returns the minimum element> Push, pop and min should all operate in 0(1) time.
 *
 * Input: 
 * Output:
 * Constraints: Push, pop, min 0(1) time
 * Edge cases:
 */

class Stack {
    constructor(value) {
        const item = { value: value, min: value };
        this.values = [item];
        this._min = value;
    }

    pop() {
        // handle size of 0
        if (this.values.length === 0) return false;
        // remove last element
        this.values.splice(this.values.length - 1, 1);
        // set this._min to new last elements min
        if (this.values.length) {
            this._min = this.values[this.values.length - 1].min;
        } else {
            this._min = undefined;
        }
    }

    push(value) {
        if (value < this._min) {
            this._min = value;
        }
        const item = { value: value, min: this._min };
        this.values[this.values.length] = item;
    }

    min() {
        return this._min;
    }
}

// Test cases
//

let stack = new Stack(1); // 1
console.log(stack.min(), 'should be', 1);

stack.push(8);  // 1, 8
console.log(stack.min(), 'should be', 1);

stack.push(2); // 1, 8, 2
console.log(stack.min(), 'should be', 1);

stack.push(0); // 1, 8, 2, 0
console.log(stack.min(), 'should be', 0);

stack.push(-1); // 1, 8, 2, 0, -1
console.log(stack.min(), 'should be', -1);

stack.pop(); // 1, 8, 2, 0
console.log(stack.min(), 'should be', 0);

stack.push(2); // 1, 8, 2, 0, 2
console.log(stack.min(), 'should be', 0);

stack.pop(); // 1, 8, 2, 0
console.log(stack.min(), 'should be', 0);

stack.pop(); // 1, 8, 2
console.log(stack.min(), 'should be', 1);

stack.pop(); // 1, 8
console.log(stack.min(), 'should be', 1);

stack.pop(); // 1
console.log(stack.min(), 'should be', 1);

stack.pop(); // empty
console.log(stack.min(), 'should be', undefined);
