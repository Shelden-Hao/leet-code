/**
 * [152. 乘积最大子数组](https://leetcode.cn/problems/maximum-product-subarray/)
 */
class Solution {
    public int maxProduct(int[] nums) {
        int n = nums.length;
        // 同时维护以 i 结尾的最大、最小乘积，负数相乘会让最小变最大
        int[][] dp = new int[n + 1][2];
        dp[0][0] = 1;
        dp[0][1] = 1;
        int ans = Integer.MIN_VALUE;
        for (int i = 1; i <= n; i++) {
            int cur = nums[i - 1];
            dp[i][0] = Math.max(Math.max(cur, dp[i - 1][1] * cur), dp[i - 1][0] * cur);
            dp[i][1] = Math.min(Math.min(cur, dp[i - 1][1] * cur), dp[i - 1][0] * cur);
            ans = Math.max(ans, dp[i][0]);
        }
        return ans;
    }
}
