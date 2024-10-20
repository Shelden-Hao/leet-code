/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let result = 0;
    let minPrice = Infinity;
    for (let i = 0; i <= prices.length - 1; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else {
            result = Math.max(result, prices[i] - minPrice)
        }
    }
    return result;
};
