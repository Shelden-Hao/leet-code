/**
 * [238. 除自身以外数组的乘积](https://leetcode.cn/problems/product-of-array-except-self/)
 */
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] left = new int[n];
        left[0] = 1;
        for (int i = 1; i < n; i++) {
            left[i] = nums[i - 1] * left[i - 1];
        }
        int right = 1;
        int[] ans = new int[n];
        for (int i = n - 1; i >= 0; i--) {
            ans[i] = right * left[i];
            right *= nums[i];
        }
        return ans;
    }
}