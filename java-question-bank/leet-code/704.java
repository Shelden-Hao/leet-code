/**
 * [704. 二分查找](https://leetcode.cn/problems/binary-search/)
 * 标准左闭右闭二分，找到即返回下标，否则返回 -1
 */
class Solution {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
}
