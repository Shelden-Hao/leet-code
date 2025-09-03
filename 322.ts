/**
 * 322. 零钱兑换
 * https://leetcode.cn/problems/coin-change/description/
 * @param coins 硬币数组
 * @param amount 总金额
 * @description 本质上是一个完全背包问题/动态规划。
 * dp[i] = min(dp[i], dp[i - coin] + 1) dp[i] 表示 凑成金额 i 所需的最少硬币数
 * 意思是：如果我想凑出金额 i，先拿出一个 coin，再看凑 i - coin 需要多少硬币（dp[i - coin]），加上刚刚用的 1 个硬币，就是一种方案。
 */
function coinChange(coins: number[], amount: number): number {
    // Infinity 无限大 这样才能使用 dp 最少硬币替换掉
    // dp 长度需要是amount+1，因为dp[0]不需要硬币也是一种情况
    const dp: number[] = new Array(amount + 1).fill(Infinity)
    dp[0] = 0

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
};

console.log(coinChange([1,2,5], 11))
