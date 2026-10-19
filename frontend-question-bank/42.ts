/**
 * 42. 接雨水
 * https://leetcode.cn/problems/trapping-rain-water/description/
 * @param height 高度数组
 * @description 左右指针，依次计算每一个位置的面积，由于宽都是索引差为1，所以面积为高度差。
 * 重点：高度差为左右两边最大高度中的较小值减去当前位置的高度。
 * 笔记总结：https://blog.csdn.net/XiugongHao/article/details/142867880
 */
function trap(height: number[]): number {
    // 左右指针
    let left = 0
    let right = height.length - 1
    // 维护左右高度最大值，便于求两边最大高度中的较小值
    let left_max = 0
    let right_max = 0
    // 接水的总量
    let totalWater = 0

    while (left < right) {
        // 木桶效应，哪边短接水容量取决于哪边
        if (height[left] < height[right]) {
            // 看当前位置的高度
            // 如果比左边的最大值高(或相等)就更新最大值，否则就计算当前位置的容量
            // 取等的原因：height[left] == left_max 此时是无法接水的
            if (height[left] >= left_max) {
                left_max = height[left]
            } else {
                totalWater += (left_max - height[left]) * 1
            }
            left++
        } else {
            // 看当前位置的高度
            // 如果比右边大最大值高(或相等)就更新最大值，否则就计算当前位置的容量
            if (height[right] >= right_max) {
                right_max = height[right]
            } else {
                totalWater += (right_max - height[right]) * 1
            }
            right--
        }
    }
    return totalWater
};

export {}
