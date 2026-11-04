/**
 * [33. 搜索旋转排序数组](https://leetcode.cn/problems/search-in-rotated-sorted-array/)
 */
class Solution {
    public int search(int[] nums, int target) {
        int n = nums.length;
        int left = 0;
        int right = n - 1;
        while (left <= right) {
            int mid = left + (right - left >> 1);
            if (nums[mid] == target) return mid;
            if (nums[0] <= nums[mid]) {
                // 前半段有序，看目标是否落在前半段的范围内
                if (target >= nums[0] && target < nums[mid]) right = mid - 1;
                else left = mid + 1;
            } else {
                // 后半段有序
                if (target > nums[mid] && target <= nums[right]) left = mid + 1;
                else right = mid - 1;
            }
        }
        return -1;
    }
}
