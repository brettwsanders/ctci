
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

const checkPermutation = (str1, str2) => {
  sortedStr1 = str1.split("").sort().join("");
  sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
};

// Test Cases
console.log(checkPermutation('hello', 'llohe'), 'should be true')
console.log(checkPermutation('ab', 'ba'), 'should be true')
console.log(checkPermutation('', ''), 'should be true')
console.log(checkPermutation('hello', 'llohee'), 'should be false')
console.log(checkPermutation('', 'a'), 'should be false')
