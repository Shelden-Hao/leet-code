/**
 * [518. 零钱兑换 II](https://leetcode.cn/problems/coin-change-ii/)
 * 完全背包：外层枚举硬币、内层正序累加金额，保证组合不重复计数
 */
class Solution {
    public int change(int amount, int[] coins) {
        int[] dp = new int[amount + 1];
        dp[0] = 1;
        for (int coin : coins) {
            for (int j = coin; j <= amount; j++) {
                dp[j] += dp[j - coin];
            }
        }
        return dp[amount];
    }
}
