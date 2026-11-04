/**
 * [153. 寻找旋转排序数组中的最小值](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/)
 */
class Solution {
    public int findMin(int[] nums) {
        // 与右端点比较：mid 比右端大说明最小值在右半边，否则在左半边（含 mid）
        int left = 0;
        int right = nums.length - 1;
        while (left < right) {
            int mid = left + (right - left >> 1);
            if (nums[mid] > nums[right]) left = mid + 1;
            else right = mid;
        }
        return nums[left];
    }
}
