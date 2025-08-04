/**
 * 121. 买卖股票的最佳时机
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
 * @param prices
 * @description
 * 思路：dp保存直到第i天获取到的最大收益，而不是第i天当天获取到的收益，
 * 不用最后一次遍历所有元素找最大值的操作。
 * 所以题干主要难在求状态转移方程，不断更新dp[i]和此前最小值。
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
