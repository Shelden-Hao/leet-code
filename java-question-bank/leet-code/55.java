/**
 * [55. 跳跃游戏](https://leetcode.cn/problems/jump-game/)
 */
class Solution {
    public boolean canJump(int[] nums) {
        int can = 0;
        // can 记录当前能到达的最远下标
        for (int i = 0; i < nums.length; i++) {
            if (can < i) return false;
            can = Math.max(can, i + nums[i]);
        }
        return true;
    }
}
