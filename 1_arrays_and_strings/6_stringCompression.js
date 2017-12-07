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
  // handle case where string is 2 or less
  if (str.length <= 2) return str;
  // initialize compressed string variable to build
  let compressedStr = '';
  // initialize variable to store previous
  let previousChar = str[0];
  // initialize variable to count the current char repeations
  let countOfRepeatingPrevChar = 1;

  const updateCompressedStr = () => {
    compressedStr = compressedStr + String(countOfRepeatingPrevChar) + previousChar;
  }
  // loop thru each character in string starting at index 1
  for (let i = 1; i < str.length; i++) {
    // get the current character
    const currentChar = str[i];
    // if repeated (they are the same OR count is 0)
    if (currentChar === previousChar) {
      // add one to count of repeats
      countOfRepeatingPrevChar++;
    // else (if different)
    } else {
      // add to the compressed char (count + previousChar)
      updateCompressedStr();
      // update previous char
      previousChar = currentChar;
      // change count to 1
      countOfRepeatingPrevChar = 1;
    }
  }
  updateCompressedStr();

  if (compressedStr.length < str.length) {
    return compressedStr;
  } else {
    return str;
  }
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


