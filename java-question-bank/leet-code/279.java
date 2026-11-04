/**
 * [279. 完全平方数](https://leetcode.cn/problems/perfect-squares/)
 */
class Solution {
    public int numSquares(int n) {
        // 完全背包：dp[i] = 凑出 i 所需的最少平方数个数
        int[] dp = new int[n + 1];
        dp[1] = 1;
        for (int i = 2; i <= n; i++) {
            dp[i] = i; // 最差情况：全用 1
            for (int j = 1; j * j <= i; j++) {
                dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
            }
        }
        return dp[n];
    }
}
