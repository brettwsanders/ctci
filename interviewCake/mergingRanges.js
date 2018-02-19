/*
 * input: array of multiple meeting time ranges
 * output: array of condensed ranges
 * constraints: efficient even when can't put upper bound on nums
 * edge:
 *
 */

const mergeRanges = ranges => {
    const rangesHash = input.reduce((acc, range) => {
        const start = range.startTime;
        const end = range.endTime;
        acc[start] = 'start';
        if (acc[end] === undefined) {
            acc[end] = 'end';
        }
        return acc;
    }, {});

    const sortedRanges = Object.keys(rangesHash)
        .sort((a, b) => { return Number(a) - Number(b) })
        .map(val => ({ val, type: rangesHash[val]}));


    let result = [];

    let starting = false;
    for (let i = 0; i < sortedRanges.length; i++) {
        if (starting !== false) {
            if (sortedRanges[i].type === 'end') {
                if (i === sortedRanges.length - 1 || sortedRanges[i+1].type === 'start') {
                    result.push({ startTime: starting, endTime: sortedRanges[i].val });
                    starting = false;
                }
            }
        } else {
            if (sortedRanges[i].type === 'start') {
                starting = sortedRanges[i].val;
            }
        }
    }

    return result;
};


// Test cases
let input;
let output;
let expected;

// tc1
input = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
];

expected = [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
];

output = mergeRanges(input);

console.log(output, 'should be', expected);
