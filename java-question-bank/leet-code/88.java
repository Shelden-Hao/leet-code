/**
 * [88. 合并两个有序数组](https://leetcode.cn/problems/merge-sorted-array/)
 * 从尾部倒着归并，利用 nums1 后半段的空位，无需额外空间
 */
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1, j = n - 1, k = m + n - 1;
        while (j >= 0) {
            if (i >= 0 && nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
            else nums1[k--] = nums2[j--];
        }
    }
}
