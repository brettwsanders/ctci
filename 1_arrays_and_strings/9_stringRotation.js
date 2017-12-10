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
}

// Test Cases
let s1;
let s2;

// Case 1
s1 = 'waterbottle';
s2 = 'erbottlewat';
console.log(stringRotation(), 'should be', true);

// Case 2
s1 = 'waterbottle';
s2 = 'erbottlewa';
console.log(stringRotation(), 'should be', false);

// Case 3
s1 = 'waterbottle';
s2 = 'erbotltewat';
console.log(stringRotation(), 'should be', false);

// Case 4
s1 = '';
s2 = '';
console.log(stringRotation(), 'should be', true);

// Case 5
s1 = 'waterbottle';
s2 = 'waterbottle';
console.log(stringRotation(), 'should be', true);

// Case 6
s1 = 'waterbottle';
s2 = 'ewaterbottl';
console.log(stringRotation(), 'should be', true);

// Case 7
s1 = 'wwwwwwwwwwe';
s2 = 'wwwwwwwweww';
console.log(stringRotation(), 'should be', true);

// Case 8
s1 = 'wwwwwwwwwwe';
s2 = 'wwwwwwwwewe';
console.log(stringRotation(), 'should be', false);

// Case 9
s1 = 'wwwwwwwwwweee';
s2 = 'wwwwwwweeewww';
console.log(stringRotation(), 'should be', false);
