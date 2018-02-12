/*
 * Description: Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and
 * pennies (1 cent), write code to calculate the number of ways of representing n cents.
 *
 * i: number
 * o: array of coin combinations
 * c: n/a
 * e:
 */


const getCoinCombos = cents => {
    const coins = [1, 5, 10, 25].sort();
    const cache = {}; 
    
    const recurse = remaining => {
       if (cache[remaining]) return cache[remaining]; // solution cached
       if (remaining === 0) return true; // solution found
       if (n < 0) return false; // no solution
       const solutions = [];
       for (let i = 0; i < coins.length; i++) {
           const coin = coins[i];
           const newUsed = used.slice().push(coin);
           const newRemaining = remaining - coin;
           const subSolutions = recurse(newRemaining);
           solutions = solutions.concat(recurse(newRemaining));
       }
       if (solutions.length > 0) {
           cache[remaining] = solutions;
       }
       return cache[remaining];
    };

    return recurse(cents);
};

