/*
 * Description: (Three In One) Describe how you could use a single array to implement three stacks
 *
 * array1 = [a, b]
 * array2 = [h, i, j, k]
 * array3 = [x, y, z]
 * * Solution:
 * - single array is made up of three arrays
 *   [ [a, b], [h, i, j, k], [x, y, z]]
 *
 * - single array with leader value to indicate the beginning of a new stack
 *   [ 'start', a, b, 'start', h, i, j, k, 'start', x, y, z ]
 *
 * - single array and stacks are added in at beginning for array1, middle for array 2, end for array 3
 *
 */

class multipleStacks {
  constructor(stacks) {
    this.stacks = stacks;
    this.array = [];
    for (let i = 1; i <= stacks; i++) {
      this.array.push('start' + i)
    }
  }

  push(value, array) {
    if (this.isOutOfBounds(array)) return 'out of bounds';
    this.prepArrayForManipulation(array);
    this.array.push(value);
  }

  pop(array) {
    if (this.isOutOfBounds(array)) return 'out of bounds';
    this.prepArrayForManipulation(array);
    return this.array.pop();
  }

  peek(array) {
    if (this.isOutOfBounds(array)) return 'out of bounds';
    this.prepArrayForManipulation(array);
    return this.array[this.array.length - 1];
  }

  isEmpty(array) {
    if (this.isOutOfBounds(array)) return 'out of bounds';
    this.prepArrayForManipulation(array);
    if (this.array[this.array.length - 1] === String('start' + array)) return true;
    return false;
  }

  isOutOfBounds(array) {
    if (array < 1 || array > this.stacks) return true;
    return false;
  }

  prepArrayForManipulation(array) {
    let arrayToBeAtStart = array + 1;
    if (arrayToBeAtStart > 3) {
      arrayToBeAtStart = arrayToBeAtStart % this.stacks
    }
    this.loopUntilSetAtStart('start' + arrayToBeAtStart);
  }

  loopUntilSetAtStart(startValue) {
    let count = 0;
    while(this.array[0] !== startValue && count <= this.array.length) {
      const value = this.array.shift();
      this.array.push(value);
      count++;
    }
  }

  getArray() {
    return this.array;
  }
}

// array1 = [a, b]
// array2 = [h, i, j, k]
// array3 = [x, y, z]

// Test Cases
let threeStacks = multipleStacks();
threeStacks.push('h', 2);
console.log(threeStacks.peek(2), 'should be h');
console.log(threeStacks.isEmpty(2), 'should be false');
console.log(threeStacks.isEmpty(1), 'should be true');
console.log(threeStacks.isEmpty(3), 'should be true');
console.log(threeStacks.isEmpty(4), 'should be out of bounds');
threeStacks.pop(2);
threeStacks.pop(1);
threeStacks.push('h', 2);
threeStacks.push('i', 2);
threeStacks.push('a', 1);
threeStacks.push('x', 3);
console.log(threeStacks.peek(1), 'should be a');
console.log(threeStacks.peek(2), 'should be i');
console.log(threeStacks.peek(3), 'should be x');
threeStacks.pop(1);
threeStacks.push('a', 1);
threeStacks.push('b', 1);
console.log(threeStacks.peek(1), 'should be b');
threeStacks.push('j', 2);
threeStacks.push('k', 2);
threeStacks.push('y', 3);
threeStacks.push('z', 3);
console.log(threeStacks.getArray());











