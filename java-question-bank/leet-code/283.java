/**
 * [283. 移动零](https://leetcode.cn/problems/move-zeroes/)
 * 双指针，将非0的数移动到前指针位置，结束遍历后全部填充0
 */
class Solution {
    public void moveZeroes(int[] nums) {
        int i = 0; //下一个非0数存放的位置
        int j = 0; //当前检索的位置
        while (j < nums.length) {
            if (nums[j] != 0) {
                nums[i] = nums[j];
                i++;
            }
            j++;
        }
        while (i < nums.length) {
            nums[i] = 0;
            i++;
        }
    }
}