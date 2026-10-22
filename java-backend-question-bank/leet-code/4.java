/**
 * [4. 寻找两个正序数组的中位数](https://leetcode.cn/problems/median-of-two-sorted-arrays/)
 */
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int n = nums1.length + nums2.length;
        if (n % 2 == 0) {
            return (kMin(nums1, 0, nums1.length - 1, nums2, 0, nums2.length - 1, n / 2)
                    + kMin(nums1, 0, nums1.length - 1, nums2, 0, nums2.length - 1, n / 2 + 1)) * 0.5;
        } else {
            return kMin(nums1, 0, nums1.length - 1, nums2, 0, nums2.length - 1, n / 2 + 1);
        }
    }

    private int kMin(int[] nums1, int s1, int e1, int[] nums2, int s2, int e2, int k) {
        // 每次各取 k/2 个元素比较，小的那批一定不在前 k 小里，直接排除
        int n1 = e1 - s1 + 1;
        int n2 = e2 - s2 + 1;
        if (n1 == 0) return nums2[s2 + k - 1];
        if (n2 == 0) return nums1[s1 + k - 1];
        if (k == 1) return Math.min(nums1[s1], nums2[s2]);
        int count = Math.min(k / 2, Math.min(n1, n2));
        if (nums1[s1 + count - 1] > nums2[s2 + count - 1]) {
            return kMin(nums1, s1, e1, nums2, s2 + count, e2, k - count);
        } else {
            return kMin(nums1, s1 + count, e1, nums2, s2, e2, k - count);
        }
    }
}
