/*
 * Description: Assume you have a method isSubstring which checks if one word is a substring
 * of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only
 * one call to isSubstring(e.g., "waterbottle" is a rotation of "erbottlewat").
 *
 * Input: two strings, s1 and s2
 * Output: bool
 * Complexity:
 * Edge Cases:
 *
 * Ideas:
 * - s1 and s2 must be same length, same characters, same order (but rotated)
 * - if you can find the starting char of s1 in s2 then you can rearrange s2 to see if its the same
 * */

// Solution
const stringRotation = (s1, s2) => {
  // if strings different length, return false
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;
  // loop through second string
  for (let index = 0; index < s2.length; index++) {
    // if char equals first character of first string
    if (s2[index] === s1[0]) {
      // create new string from second string, but rotated
      const rotated = s2.slice(index) + s2.slice(0, index);
      // if rotatedstring equals first string
      if (rotated === s1) {
        return true;
      }
    }
  }
  return false;
}

// Test Cases
let s1;
let s2;

// Case 1
s1 = 'waterbottle';
s2 = 'erbottlewat';
console.log('1. ', stringRotation(s1, s2), 'should be', true);

// Case 2
s1 = 'waterbottle';
s2 = 'erbottlewa';
console.log('2. ', stringRotation(s1, s2), 'should be', false);

// Case 3
s1 = 'waterbottle';
s2 = 'erbotltewat';
console.log('3. ', stringRotation(s1, s2), 'should be', false);

// Case 4
s1 = '';
s2 = '';
console.log('4. ', stringRotation(s1, s2), 'should be', true);

// Case 5
s1 = 'waterbottle';
s2 = 'waterbottle';
console.log('5. ', stringRotation(s1, s2), 'should be', true);

// Case 6
s1 = 'waterbottle';
s2 = 'ewaterbottl';
console.log('6. ', stringRotation(s1, s2), 'should be', true);

// Case 7
s1 = 'wwwwwwwwwwe';
s2 = 'wwwwwwwweww';
console.log('7. ', stringRotation(s1, s2), 'should be', true);

// Case 8
s1 = 'wwwwwwwwwwe';
s2 = 'wwwwwwwwewe';
console.log('8. ', stringRotation(s1, s2), 'should be', false);

// Case 9
s1 = 'wwwwwwwwwweee';
s2 = 'wwwwwwweeewww';
console.log('9. ', stringRotation(s1, s2), 'should be', true);
