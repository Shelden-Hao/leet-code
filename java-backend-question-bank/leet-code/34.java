/**
 * [34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)
 */
class Solution {
    public int[] searchRange(int[] nums, int target) {
        // 第一次二分找「第一个 >= target」的下标
        int left = 0;
        int right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left >> 1);
            if (nums[mid] >= target) right = mid - 1;
            else left = mid + 1;
        }
        if (left >= nums.length || nums[left] != target) return new int[]{-1, -1};
        int first = left;
        // 第二次二分找「最后一个 <= target」的下标
        left = 0;
        right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left >> 1);
            if (nums[mid] > target) right = mid - 1;
            else left = mid + 1;
        }
        return new int[]{first, right};
    }
}
