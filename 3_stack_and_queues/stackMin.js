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
        this.min = value;
    }

    pop() {
        // handle size of 0
        if (this.values.length === 0) return;
        // remove last element
        this.values = this.values.splice(this.values.length - 1, 1);
        // set this.min to new last elements min
        this.min = this.values[this.values.length - 1].min;
    }

    push(value) {
        if (value < this.min) {
            this.min = value;
        }
        const item = { value: value, min: this.min };
        this.values[this.values.length] = item;
    }

    min() {
        return this.min;
    }
}
