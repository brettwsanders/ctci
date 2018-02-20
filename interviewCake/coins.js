/*
 * input: amount of money, array of coin denominations
 * output: number of ways to make amount with denoms
 * constraints:
 * edge:
 */

const getCoinCombos = (amount, denoms) => {
    if (amount <= 0) {
        throw new Error('Amount must be larger than 0!');
    };

    const sortedDenoms = denoms.sort((a, b) => b - a);
    let combos = 0;

    const recurse = (remaining, denomsRemaining, depth = 1) => {
        if (remaining === 0) {
            combos++;
            return;
        } else if (remaining < 0) {
            return;
        } else if (denomsRemaining.length === 0) {
            return;
        } else {
            for (let i = 0; i * denomsRemaining[0] <= remaining; i++) {
                const newRemaining = remaining - (denomsRemaining[0] * i);
                const newDenomsRemaining = denomsRemaining.slice(1);
                recurse(newRemaining, newDenomsRemaining, depth + 1);
            }
        }
    }

    recurse(amount, sortedDenoms);
    return combos;
};

// Test Cases

let amount;
let denoms;
let output;
let expected;

// tc1
amount = 4;
denoms = [1, 2, 3];
output = getCoinCombos(amount, denoms);
expected = 4;
console.log(output, 'should be', expected);

// tc2
amount = 13; denoms = [1, 5, 10, 25];
output = getCoinCombos(amount, denoms);
expected = 4;
console.log(output, 'should be', expected);

// tc3
amount = 7;
denoms = [1, 5, 10, 25];
output = getCoinCombos(amount, denoms);
expected = 2;
console.log(output, 'should be', expected);

