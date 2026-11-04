/**
 * [322. 零钱兑换](https://leetcode.cn/problems/coin-change/)
 */
class Solution {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        int n = coins.length;
        for (int i = 1; i <= amount; i++) {
            dp[i] = amount + 1; // 用「不可能的大值」表示无解
            for (int j = 0; j < n; j++) {
                if (i >= coins[j]) {
                    dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
                }
            }
        }
        return dp[amount] == amount + 1 ? -1 : dp[amount];
    }
}
