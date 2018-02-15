const makeChange = amount => {
    const coins = [25, 10, 5, 2];

    const _makeChange = (amount, coins, index) => {
        if (index >= coins.length - 1) return 1; //last coin
        const coinAmount = coins[index];
        let ways = 0;
        for (let i = 0; i * coinAmount <= amount; i++) {
            const amountRemaining = amount - (i * coinAmount);
            ways += _makeChange(amountRemaining, coins, index + 1);
        }
        return ways;
    };

    return _makeChange(amount, coins, 0)
}

console.log(makeChange(7));
