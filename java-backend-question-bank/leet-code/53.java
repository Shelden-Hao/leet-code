/**
 * [53. 最大子数组和](https://leetcode.cn/problems/maximum-subarray/)
 */
class Solution {
    public int maxSubArray(int[] nums) {
        int n = nums.length;
        if (n == 1) return nums[0];
        int minPreSum = Math.min(nums[0], 0);
        int sum = nums[0];
        int ans = nums[0];
        for (int i = 1; i < n; i++) {
            sum += nums[i];
            ans = Math.max(ans, sum - minPreSum);
            minPreSum = Math.min(minPreSum, sum);
        }
        return ans;
    }
}