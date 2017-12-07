/*
 * Description: Implement a method to perform basic string compression using the counts
 * of repeated characers. For example, the string aabcccccaaa would become a2b1c5a3. If the
 * "compressed" string would not become smaller than the original string, your method should return
 * the original string. You can assume the string has only uppercase and lowercase letters (a-z).
 *
 * Input: one string, assume correct type,
 * Output: string, either shortened or original
 * Complexity:
 * Edge Cases: does case matter? yes
 *
 * Ideas:
 * - convert all to compressed string and compare length (brute force)
 * - check if any character is repeated 3x in a row and if so return compressed version
 * ---> 3x in a row doesnt guarantee it should be compressed
 * */

// Solution
const stringComp = str => {
  // initialize compressed string variable to build
  let compressedStr = '';
  // initialize variable to store previous
  let previousChar = '';
  // initialize variable to count the current char repeations
  let countOfRepeatingPrevChar = 0;
  // loop thru each character in string
    // get the current character
    // get the previous character
    // if repeated (they are the same OR count is 0)
      // add one to count of repeats
    // else (if different)
      // add to the compressed char (count + previousChar)


  return shorterString(str, compressed);
};

// Test Cases
console.log(stringComp('aabcccccaaa'), 'should be a2b1c5a3');
console.log(stringComp('abcdefg'), 'should be abcdefg');
console.log(stringComp(''), 'should be ');
console.log(stringComp('a'), 'should be a');
console.log(stringComp('aa'), 'should be aa');
console.log(stringComp('aaa'), 'should be 3a');
console.log(stringComp('yys'), 'should be yys');
console.log(stringComp('yySss'), 'should be yySss');
console.log(stringComp('yyySss'), 'should be yyySss');
console.log(stringComp('yyySsss'), 'should be 3y1S3s');
console.log(stringComp('yyySsssy'), 'should be yyySsssy');
console.log(stringComp('yyySsssyy'), 'should be 3y1S3s2y');


