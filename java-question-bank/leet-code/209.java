/**
 * [209. 长度最小的子数组](https://leetcode.cn/problems/minimum-size-subarray-sum/)
 * 滑动窗口：右端点扩张累加，和达标后不断收缩左端点更新最短长度
 */
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int left = 0, sum = 0, ans = Integer.MAX_VALUE;
        for (int right = 0; right < nums.length; right++) {
            sum += nums[right];
            while (sum >= target) {
                ans = Math.min(ans, right - left + 1);
                sum -= nums[left++];
            }
        }
        return ans == Integer.MAX_VALUE ? 0 : ans;
    }
}
