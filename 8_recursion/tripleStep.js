/*
 * Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
 * steps at a time. Implement a method to count how many possible ways the child can run up the stairs.
 *
 */

// Memoized
const tripleStep = steps => {
    const store = {};
    const getCombosCount = steps => {
        if (store[steps] !== undefined) return store[steps]
        if (steps < 0) return 0;
        if (steps === 0) return 1;
        store[steps-1] = getCombosCount(steps - 1);
        store[steps-2] = getCombosCount(steps - 2);
        store[steps-3] = getCombosCount(steps - 3);
        return store[steps-1] + store[steps-2] + store[steps-3];
    }

    return getCombosCount(steps);
};

// Brute Force
const tripleStepBrute = steps => {
    if (steps < 0) return 0;
    if (steps === 0) return 1;
    return tripleStepBrute(steps-1) + tripleStepBrute(steps-2) + tripleStepBrute(steps-3)
}

// Test Cases
//console.log(tripleStep(1), 'should be', 1);
//console.log(tripleStep(2), 'should be', 2);
//console.log(tripleStep(3), 'should be', 4);
//console.log(tripleStep(4), 'should be', 7);
console.log(tripleStep(5), 'should be', 13);
