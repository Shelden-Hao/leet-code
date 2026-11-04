/**
 * [912. 排序数组](https://leetcode.cn/problems/sort-an-array/)
 */
class Solution {
    public int[] sortArray(int[] nums) {
        sort(nums, 0, nums.length - 1);
        return nums;
    }

    private void sort(int[] nums, int left, int right) {
        // 归并排序：O(n log n) 稳定，最坏也是 O(n log n)
        if (left >= right) return;
        int mid = left + (right - left) / 2;
        sort(nums, left, mid);
        sort(nums, mid + 1, right);
        merge(nums, left, mid, mid + 1, right);
    }

    private void merge(int[] nums, int s1, int e1, int s2, int e2) {
        int[] t = new int[e2 - s1 + 1];
        int i = s1;
        int j = s2;
        int cur = 0;
        while (i <= e1 && j <= e2) {
            if (nums[i] <= nums[j]) t[cur++] = nums[i++];
            else t[cur++] = nums[j++];
        }
        while (i <= e1) t[cur++] = nums[i++];
        while (j <= e2) t[cur++] = nums[j++];
        for (int k = s1; k <= e2; k++) nums[k] = t[k - s1];
    }
}
