/**
 * 买卖股票的最佳时机
 * @param prices
 */
function maxProfit(prices: number[]): number {
    const n = prices.length
    if (n <= 1) return 0
    // 定义状态
    const dp: number[] = []
    // 定义初始值
    dp[0] = 0
    // 状态转移方程求dp[i]
    let minPrice = prices[0]
    for (let i = 1; i < n; i++) {
        // 从开始到当前元素的最大利润值
        dp[i] = Math.max(prices[i] - minPrice, dp[i - 1])
        // 从开始到当前元素的最小值
        minPrice = Math.min(minPrice, prices[i])
    }
    return dp[n - 1]
};