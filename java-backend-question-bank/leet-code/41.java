/**
 * [41. 缺失的第一个正数](https://leetcode.cn/problems/first-missing-positive/)
 */
class Solution {
    public int firstMissingPositive(int[] nums) {
        int n = nums.length;
        // 先把 0 和负数替换成一定不在 [1,n] 范围内的数，避免打标记时干扰
        for (int i = 0; i < n; i++) {
            if (nums[i] <= 0) nums[i] = n + 2;
        }
        // 用正负号作为「该下标对应的数存在」的标记，注意取绝对值还原原值
        for (int i = 0; i < n; i++) {
            int index = Math.abs(nums[i]);
            if (index >= 1 && index <= n) {
                nums[index - 1] = -Math.abs(nums[index - 1]);
            }
        }
        for (int i = 0; i < n; i++) {
            if (nums[i] > 0) return i + 1;
        }
        return n + 1;
    }
}
