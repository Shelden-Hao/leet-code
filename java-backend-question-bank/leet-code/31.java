/**
 * [31. 下一个排列](https://leetcode.cn/problems/next-permutation/)
 */
class Solution {
    public void nextPermutation(int[] nums) {
        int n = nums.length;
        // 1. 从右往左找第一个升序的相邻对，i-1 就是需要变大的位置
        int i = n - 1;
        while (i > 0 && nums[i] <= nums[i - 1]) i--;
        if (i > 0) {
            // 2. 从右往左找第一个比 nums[i-1] 大的数与之交换
            int j = n - 1;
            while (nums[j] <= nums[i - 1]) j--;
            swap(nums, i - 1, j);
        }
        // 3. 把后面的降序段反转成升序，得到最小增幅
        reverse(nums, i, n - 1);
    }

    private void reverse(int[] nums, int s, int e) {
        int i = s, j = e;
        while (i < j) swap(nums, i++, j--);
    }

    private void swap(int[] nums, int i, int j) {
        int t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }
}
