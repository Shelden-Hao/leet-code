/**
 * 704. 二分查找
 * https://leetcode.cn/problems/binary-search/description/
 * @param nums 原数组
 * @param target 目标值
 * @description 双指针，通过更新左右指针来计算中间索引，进而对比中间值和目标值的大小。
 * 时间复杂度为 O(log n) 。
 */
function search(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        // 注意：中间索引 = 左边索引 + 左右两边索引的差值
        const mid = Math.floor((right - left) / 2) + left
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1
};
