/*
 * Description: Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards and backwards. A permutation
 * is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
 *
 * Input: assume string
 * Output: bool
 * Complexity:
 * Edge Cases: empty string, single character string,
 * Notes: case doesn't matter
 *
 * Ideas:
 * */

// Solution
const palindromePerm = string => {
  if (string.length <= 1) return true;
  //initialize object for counting chars
  const chars = {};
  //convert string to lowercase
  //iterate thru string and put each char on object with a count
  //iterate thru object
    //if more than 1 odd count then return false
  //return true
}

// Test Cases
console.log(palindromePerm('Tact Coa'), 'should be true')
console.log(palindromePerm(''), 'should be true')
console.log(palindromePerm('a'), 'should be true')
console.log(palindromePerm('rra'), 'should be true')
console.log(palindromePerm('racecar'), 'should be true')
console.log(palindromePerm('                              '), 'should be true')
console.log(palindromePerm('Something sOMETHING'), 'should be true')

console.log(palindromePerm('asdf'), 'should be false')
console.log(palindromePerm('as'), 'should be false')
console.log(palindromePerm('           asd'), 'should be false')
console.log(palindromePerm('Something gnihtemo'), 'should be false')
