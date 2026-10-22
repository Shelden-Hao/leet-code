/**
 * [287. 寻找重复数](https://leetcode.cn/problems/find-the-duplicate-number/)
 */
class Solution {
    public int findDuplicate(int[] nums) {
        // 把下标 -> nums[下标] 看成链表，重复数就是环的入口，用快慢指针找
        int slow = nums[0];
        int fast = nums[nums[0]];
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[nums[fast]];
        }
        fast = 0;
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }
        return slow;
    }
}
