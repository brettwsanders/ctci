/*
 * Description: Write a method to replace all spaces in a string with %20. You may assume that the string has sufficient
 * space at the end to hold the additional characters, and that you are given the "true"
 * length of the string. (Note: if implementing in Java, please use a character array so that you can perform this operation in place.)
 *
 * Input: string and "true" length
 * Output: string with spaces substituted
 * Complexity:
 * Edge Cases:
 *
 * Ideas:
 * -
 * */

// Solution
const URLify = (str, length) => {
  const encoded = str.slice(0, length);
  const space = / /gi;
  const spaceCode = '%20';
  return encoded.replace(space, spaceCode);
}

// Test Cases
console.log(URLify('Mr John Smith    ', 13), 'should be Mr%20John%20Smith')
console.log(URLify('He llll oooo', 2), 'should be He')
console.log(URLify('Sup dude sup dude?', 18), 'should be Sup%20dude%20sup%20dude?')
