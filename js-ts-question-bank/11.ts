/**
 * 11. 盛最多水的容器
 * https://leetcode.cn/problems/container-with-most-water/description/
 * @param height
 * @description 双指针向中间移动，那么只有高度更高才能体积更大，但是高度取决于左右两边的最短高度。
 * 所以关键在于最短高度控制指针如何移动。
 */
function maxArea(height: number[]): number {
    let max = 0
    const length= height.length
    let left = 0, right = length - 1
    while (left < right) {
        let leftHeight = height[left]
        let rightHeight = height[right]
        const tempMax = (right - left) * Math.min(leftHeight, rightHeight)
        max = Math.max(max, tempMax)
        if (height[right] > height[left]) {
            left++
        } else {
            right--
        }
    }
    return max
};
