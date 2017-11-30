/*
 * Implement an algorithm to determine if a string has all unique characters.
 *
 * What if you cannot use additional data structures?
 *
 * Input:
 * Output:
 * Complexity:
 * Edge Cases:
 * */

const isUnique = () => {

};

// Test Cases
const unique1 = 'asdfhjk12347890 -+=/;';
const unique2 = '';
const unique3 = '1';
const notUnique1 = 'asljlk12346789 -+/a';
const notUnique2 = 'asljlk12346789 -+//';
const notUnique3 = '  4';

console.log(isUnique(unique1), 'should be true');
console.log(isUnique(unique2), 'should be true');
console.log(isUnique(unique3), 'should be true');
console.log(isUnique(notUnique1), 'should be false');
console.log(isUnique(notUnique2), 'should be false');
console.log(isUnique(notUnique3), 'should be false');
