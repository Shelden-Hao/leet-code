/**
 * [136. 只出现一次的数字](https://leetcode.cn/problems/single-number/)
 */
class Solution {
    public int singleNumber(int[] nums) {
        // 异或：任何数和自己异或为 0，最后剩下的就是只出现一次的数
        int ans = 0;
        for (int num : nums) {
            ans ^= num;
        }
        return ans;
    }
}
