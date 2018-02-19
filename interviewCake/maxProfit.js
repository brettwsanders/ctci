const maxProfit = prices => {
    // init min price
    let min = prices[0];
    let maxProfit;
    // loop through prices
    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        const profit = price - min;
        if (maxProfit === undefined || profit > maxProfit) {
            maxProfit = price - min;
        }
        if (price < min) min = price;
    }
    return maxProfit;
};

// Test Cases
let input;
let output;

// Test Case 1
input = [10, 7, 5, 8, 11, 9];
output = maxProfit(input);
console.log(output, 'should be', 6);

// Test Case 2
input = [10, 7, 5];
output = maxProfit(input);
console.log(output, 'should be', -2);

// Test Case 3
input = [10];
output = maxProfit(input);
console.log(output, 'should be', undefined);
