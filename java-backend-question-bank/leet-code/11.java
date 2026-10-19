/**
 * [11. 盛最多水的容器](https://leetcode.cn/problems/container-with-most-water/)
 * 双指针，左指针向右检索，右指针向左检索，每次只移动高度较小的那个指针，遍历过程中记录最大面积
 */
class Solution {
    public int maxArea(int[] height) {
        int left = 0;            // 左指针
        int right = height.length - 1;  // 右指针
        int max = 0;             // 记录最大水量

        while (left < right) {
            // 当前容器宽度
            int width = right - left;
            // 当前水量 = 较矮的那条线 × 宽度
            int current = Math.min(height[left], height[right]) * width;
            // 更新最大值
            max = Math.max(max, current);

            // 关键：移动较矮的一侧指针
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return max;
    }
}
