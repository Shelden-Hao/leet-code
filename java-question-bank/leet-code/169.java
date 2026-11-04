/**
 * [169. 多数元素](https://leetcode.cn/problems/majority-element/)
 */
class Solution {
    public int majorityElement(int[] nums) {
        // 摩尔投票：不同元素相互抵消，最后剩下的候选一定是多数元素
        int ans = nums[0];
        int count = 1;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == ans) {
                count++;
            } else {
                count--;
                if (count == -1) {
                    count = 1;
                    ans = nums[i];
                }
            }
        }
        return ans;
    }
}
