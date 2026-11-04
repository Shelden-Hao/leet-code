/**
 * [75. 颜色分类](https://leetcode.cn/problems/sort-colors/)
 */
class Solution {
    public void sortColors(int[] nums) {
        // 计数排序：只有 0/1/2 三种值，统计后重写即可
        int n = nums.length;
        int n0 = 0;
        int n1 = 0;
        for (int num : nums) {
            if (num == 0) n0++;
            else if (num == 1) n1++;
        }
        int cur = 0;
        while (n0-- > 0) nums[cur++] = 0;
        while (n1-- > 0) nums[cur++] = 1;
        while (cur < n) nums[cur++] = 2;
    }
}
