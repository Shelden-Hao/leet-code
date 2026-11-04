/**
 * [45. 跳跃游戏 II](https://leetcode.cn/problems/jump-game-ii/)
 */
class Solution {
    public int jump(int[] nums) {
        int end = 0;
        int maxPosition = 0;
        int steps = 0;
        // 贪心按「层」推进：当前层能覆盖的最远位置 end，走到 end 就算跳动一次
        for (int i = 0; i < nums.length - 1; i++) {
            maxPosition = Math.max(maxPosition, i + nums[i]);
            if (i == end) {
                end = maxPosition;
                steps++;
            }
        }
        return steps;
    }
}
