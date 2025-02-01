/**
 * 计算可以 trapping 的雨水总量
 * @param {number[]} height - 表示高度的数组
 * @return {number} - 可以 trapping 的雨水总量
 */
var trap = function (height) {
    // 初始化左右指针
    let left = 0;
    let right = height.length - 1;

    // 初始化左右最大高度
    let left_max = height[left];
    let right_max = height[right];

    // 初始化总水量
    let totalWater = 0;

    // 当左指针小于右指针时，继续循环
    while (left < right) {
        // 水会从较短的一侧溢出，所以需要优先处理较短的一侧 如果左边的高度小于等于右边的高度
        if (height[left] <= height[right]) {
            // 如果当前左边高度大于等于左边最大高度，则更新左边最大高度
            if (height[left] >= left_max) {
                left_max = height[left];
            } else {
                // 否则，计算当前柱子上方能存储的水量并累加到总水量中
                totalWater += left_max - height[left];
            }
            // 左指针右移
            left++;
        } else {
            // 如果当前右边高度大于等于右边最大高度，则更新右边最大高度
            if (height[right] >= right_max) {
                right_max = height[right];
            } else {
                // 否则，计算当前柱子上方能存储的水量并累加到总水量中
                totalWater += right_max - height[right];
            }
            // 右指针左移
            right--;
        }
    }

    // 返回总水量
    return totalWater;
};
