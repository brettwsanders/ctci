/*
 * Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
 * steps at a time. Implement a method to count how many possible ways the child can run up the stairs.
 *
 */

const tripleStep = steps => {
    if (steps < 0) return 0;
    if (steps === 0) return 1;
    return tripleStep(steps - 1) + tripleStep(steps - 2) + tripleStep(steps - 3);
};

// Test Cases
console.log(tripleStep(1), 'should be', 1);
console.log(tripleStep(2), 'should be', 2);
console.log(tripleStep(3), 'should be', 4);
console.log(tripleStep(4), 'should be', 7);
console.log(tripleStep(5), 'should be', 13);
