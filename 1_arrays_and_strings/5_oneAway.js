/*
 * Description: There are three types of edits that can be performed on strings: insert a character,
 * remove a character, or replace a character. Given two strings, write a function to check if they are
 * one edit (or zero edits) away.
 *
 * Input: two strings
 * Output: bool
 * Complexity:
 * Edge Cases:
 *
 * Ideas:
 * -
 * */

// Solution
const oneAway = (str1, str2) => {
  const lengthDiff = lengthDifference(str1, str2);

  // if difference in length is more than 1 then return false
  if (lengthDiff > 1) {
    return false;
  }

  // if difference in length is 1
  else if (lengthDiff === 1) {
    // if remove one from longer return true
    // if add one to shorter then return true
    const shorter = shorterString(str1, str2);
    const longer = longerString(str1, str2);
    for (let index = 0; index < longer.length; index++) {
      const candidate = longer.slice(0, index) + longer.slice(index + 1);
      if (candidate === shorter) {
        return true;
      }
    }
    // else return false
    return false;
  }

  // if difference in length is 0
  else if (lengthDiff === 0) {
    // if same then return true
    if (str1 === str2) return true;
    // if replace one char then return true
    for (let index = 0; index < str1.length; index++) {
      const str1Candidate = str1.slice(0, index) + str1.slice(index + 1);
      const str2Candidate = str2.slice(0, index) + str2.slice(index + 1);
      if (str1Candidate === str2Candidate) {
        return true;
      }
    }

    // else return false
    return false;
  }

  // should never get here
  else {
    return false;
  }
};

const lengthDifference = (str1, str2) => {
  return Math.abs(str1.length - str2.length)
};

const shorterString = (str1, str2) => {
  if (str1.length <= str2.length) {
    return str1;
  } else {
    return str2;
  }
}

const longerString = (str1, str2) => {
  if (str1.length >= str2.length) {
    return str1;
  } else {
    return str2;
  }
}

// Test Cases
console.log(oneAway('pale', 'ple'), 'should be true');
console.log(oneAway('pales', 'pale'), 'should be true');
console.log(oneAway('pale', 'bale'), 'should be true');
console.log(oneAway('pale', 'pale'), 'should be true');
console.log(oneAway('', ' '), 'should be true');
console.log(oneAway(' ', ''), 'should be true');
console.log(oneAway(' ', ' '), 'should be true');
console.log(oneAway('', ''), 'should be true');
console.log(oneAway('asdfasdfasdfqwerqwerqwerqwerqwerqwerqwer', 'asdfasdfasdfqwerqwerqwerqwerqwerqwerqwet'), 'should be true');

console.log(oneAway('pale', 'bake'), 'should be false');
console.log(oneAway('', '   '), 'should be false');
console.log(oneAway('ab', 'abcd'), 'should be false');
console.log(oneAway('asdfasdfasdfqwerqwerqwerqwerqwerqwerqwer', 'asdfasdfasdfqwerqwerqwerqwerqwerqwerqwetrr'), 'should be false');
