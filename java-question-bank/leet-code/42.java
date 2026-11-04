/**
 * [42. 接雨水](https://leetcode.cn/problems/trapping-rain-water/)
 * 先统计每一个柱子的左边和右边最高柱子的高度，用这两个高度中较低的那个减去当前柱子高度就是当前这个点能够存储的水
 */
class Solution {
    public int trap(int[] height) {
        int n = height.length;
        int[] left = new int[n];
        for (int i = 1; i < n; i++) {
            left[i] = Math.max(left[i - 1], height[i - 1]);
        }
        int right = height[n - 1];
        int sum = 0;
        for (int i = n - 2; i >= 0; i--) {
            right = Math.max(right, height[i + 1]);
            int low = Math.min(left[i], right);
            if (height[i] < low) {
                sum += low - height[i];
            }
        }
        return sum;
    }
}