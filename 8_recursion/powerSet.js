/*
 * Power Set: Write a method to return all subsets of a set
 */

const memo = {};

const getSubSets = set => {
    let subs = [];
    if (set.length <= 1) return subs;
    for (let i = 0; i < set.length; i++) {
        const sub = set.slice(0, i) + set.slice(i + 1);
        if (!memo[sub]) {
            subs.push(sub);
            memo[sub] = getSubSets(sub);
        }
        subs = subs.concat(memo[sub]);
    }
    return subs;
};

// Test Cases
let set;
let result;

// Case 1
set = 'ab';
result = getSubSets(set);
console.log(result, 'should be', ['a', 'b']);

// Case 2
set = 'abc';
result = getSubSets(set);
console.log(result, 'should be', ['a', 'b', 'c', 'ab', 'ac', 'bc']);
