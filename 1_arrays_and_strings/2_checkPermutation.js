
/*
 * Given two strings, write a method to decide if one is a permutation of the other.
 *
 * Permutation: an "arrangement number" or "order," is a rearrangement of the elements of an ordered list into a one-to-one correspondence with itself
 *
 * Input: assume strings,
 * Output: true, false
 * Complexity:
 * Edge Cases:
 *
 * Ideas:
 * - sort and then compare string for equality
 * */

// solution 1
const checkPermutation1 = (str1, str2) => {
  sortedStr1 = str1.split("").sort().join("");
  sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
};

// solution 2
const checkPermutation2 = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let str2Remain = str2;
  for (let indexStr1 = 0; indexStr1 < str1.length; indexStr1++) {
    let characterMatchFound = false;
    for (let indexStr2Remain = 0; indexStr2Remain < str2Remain.length; indexStr2Remain++) {
      if (str1[indexStr1] === str2Remain[indexStr2Remain]) {
        characterMatchFound = true;
        str2Remain = str2Remain.slice(0, indexStr2Remain) + str2Remain.slice(indexStr2Remain + 1);
        break;
      }
    }
    if (!characterMatchFound) return false;
  }
  return true;
};

// Test Cases
console.log(checkPermutation1('hello', 'llohe'), 'should be true')
console.log(checkPermutation1('ab', 'ba'), 'should be true')
console.log(checkPermutation1('', ''), 'should be true')
console.log(checkPermutation1('hello', 'llohee'), 'should be false')
console.log(checkPermutation1('', 'a'), 'should be false')

console.log(checkPermutation2('hello', 'llohe'), 'should be true')
console.log(checkPermutation2('ab', 'ba'), 'should be true')
console.log(checkPermutation2('', ''), 'should be true')
console.log(checkPermutation2('hello', 'llohee'), 'should be false')
console.log(checkPermutation2('', 'a'), 'should be false')
