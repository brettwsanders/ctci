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
};

// Test Cases
console.log(oneAway('pale', 'ple'), 'should be true');
console.log(oneAway('pales', 'pale'), 'should be true');
console.log(oneAway('pale', 'bale'), 'should be true');
console.log(oneAway('pale', 'pale'), 'should be true');
console.log(oneAway('', ' '), 'should be true');
console.log(oneAway(' ', ''), 'should be true');
console.log(oneAway(' ', ' '), 'should be true');
console.log(oneAway('', ''), 'should be true');

console.log(oneAway('pale', 'bake'), 'should be false');
console.log(oneAway('', '   '), 'should be false');
