/**
 * [213. 打家劫舍 II](https://leetcode.cn/problems/house-robber-ii/)
 * 首尾不能同时偷，拆成 [0,n-2] 与 [1,n-1] 两段做普通打家劫舍取较大值
 */
class Solution {
    public int rob(int[] nums) {
        int n = nums.length;
        if (n == 1) return nums[0];
        return Math.max(robRange(nums, 0, n - 2), robRange(nums, 1, n - 1));
    }

    private int robRange(int[] nums, int l, int r) {
        int pre = 0, cur = 0;
        for (int i = l; i <= r; i++) {
            int next = Math.max(cur, pre + nums[i]);
            pre = cur;
            cur = next;
        }
        return cur;
    }
}
