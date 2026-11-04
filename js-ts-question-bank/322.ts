/**
 * 322. 零钱兑换
 * https://leetcode.cn/problems/coin-change/description/
 * @param coins 硬币数组
 * @param amount 总金额
 * @description 本质上是一个完全背包问题/动态规划。
 * dp[i] = min(dp[i], dp[i - coin] + 1) dp[i] 表示 凑成金额 i 所需的最少硬币数
 * 意思是：如果我想凑出金额 i，先拿出一个 coin，再看凑 i - coin 需要多少硬币（dp[i - coin]），加上刚刚用的 1 个硬币，就是一种方案。
 * 对每个金额，尝试所有硬币，取最小值。
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

// console.log(coinChange([1,2,5], 11))

/**
 * 零钱兑换(变式) - 兑换方法数（组合数）
 * @param coins
 * @param amount
 * @description dp[i] 表示凑出金额 i 的方法数。
 * 保证每种硬币只被使用一次，避免重复计数。 dp[i] += dp[i - coin] 。
 */
function coinChangeAll(coins: number[], amount: number): number {
    const dp: number[] = new Array(amount + 1).fill(0);
    // 凑出金额 0 的方法数为 1，即不选任何硬币
    dp[0]= 1

    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }

    return dp[amount];
}

// const coins = [1, 2, 3];
// const amount = 20;
// console.log("动态规划法结果：", coinChangeAll(coins, amount)); // 输出：44

// 特性	组合数问题	LeetCode 322 零钱兑换
// 目标	求方法数	求最少硬币数
// 状态定义	dp[i] = 方法数	dp[i] = 最少硬币数
// 状态转移	dp[i] += dp[i - coin]	dp[i] = min(dp[i], dp[i - coin] + 1)
// 初始化	dp[0] = 1	dp[0] = 0，其余为 Infinity
// 循环顺序	外层硬币，内层金额	外层金额，内层硬币
// 典型应用	兑换方案数、组合问题	最优解问题、背包问题
