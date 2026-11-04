/**
 * 33. 搜索旋转排序数组
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/description/
 * @param nums 原数组
 * @param target 目标值
 * @description 二分查找的变式。只是比二分查找多了一步找满足二分的区间(已经排好序的区间)。
 * 时间复杂度：O(log n) 。
 */
function search(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) return mid
        // 判断有序区间
        if (nums[left] <= nums[mid]) {
            // 左边有序
            if (nums[left] <= target && target < nums[mid]) {
                // target 在左区间
                right = mid - 1
            } else {
                // target 在右区间
                left = mid + 1
            }
        } else {
            // 右边有序
            if (nums[right] >= target && target > nums[mid]) {
                // target 在右区间
                left = mid + 1
            } else {
                // target 在左区间
                right = mid - 1
            }
        }
    }

    return -1
};
