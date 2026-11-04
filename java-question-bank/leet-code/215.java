/**
 * [215. 数组中的第K个最大元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/)
 */
class Solution {
    public int findKthLargest(int[] nums, int k) {
        int n = nums.length;
        int target = n - k; // 第 k 大 = 升序排列后的第 n-k 个下标
        int left = 0;
        int right = n - 1;
        Random rnd = new Random();
        while (true) {
            // 随机选枢轴并换到最左，避免有序数组退化成 O(n^2)
            int p = left + rnd.nextInt(right - left + 1);
            int t = nums[p];
            nums[p] = nums[left];
            nums[left] = t;
            int pivot = nums[left];
            int i = left;
            int j = right;
            while (i < j) {
                while (i < j && nums[j] >= pivot) j--;
                nums[i] = nums[j];
                while (i < j && nums[i] <= pivot) i++;
                nums[j] = nums[i];
            }
            nums[i] = pivot;
            if (i == target) return pivot;
            if (i < target) left = i + 1;
            else right = i - 1;
        }
    }
}
