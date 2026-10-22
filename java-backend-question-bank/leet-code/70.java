/**
 * [70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)
 */
class Solution {
    public int climbStairs(int n) {
        // 到第 i 阶只能从 i-1 或 i-2 阶上来，就是斐波那契数列
        int[] dp = new int[n + 1];
        dp[0] = 1;
        dp[1] = 1;
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
}
