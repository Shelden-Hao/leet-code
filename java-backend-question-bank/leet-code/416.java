/**
 * [416. 分割等和子集](https://leetcode.cn/problems/partition-equal-subset-sum/)
 */
class Solution {
    public boolean canPartition(int[] nums) {
        int n = nums.length;
        if (n == 1) return false;
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        if (sum % 2 != 0) return false;
        int target = sum / 2;
        // 01 背包：能否用部分元素恰好凑出 target
        boolean[][] dp = new boolean[n][target + 1];
        dp[0][0] = true;
        if (nums[0] <= target) dp[0][nums[0]] = true;
        for (int i = 1; i < n; i++) {
            for (int j = 0; j <= target; j++) {
                dp[i][j] = dp[i - 1][j];
                if (j >= nums[i]) {
                    dp[i][j] |= dp[i - 1][j - nums[i]];
                }
            }
        }
        return dp[n - 1][target];
    }
}
