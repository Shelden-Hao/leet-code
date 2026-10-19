/**
 * 1. 两数之和
 * https://leetcode.cn/problems/two-sum/description/
 * @param nums 原数组
 * @param target 目标和
 * @description 空间复杂度和时间复杂度都是 O(n) 。
 */
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>()
    const length = nums.length
    for (let i = 0; i < length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i])!, i]
        }
        map.set(nums[i], i)
    }
    return [-1, -1]
};

/**
 * 1. 两数之和 - 变式(数组有序)
 * @param nums
 * @param target
 * @description 使用双指针，时间复杂度还是 O(n)，但是空间复杂度变为 O(1) 。
 */
function twoSumSorted(nums: number[], target: number): number[] {
    let left = 0, right = nums.length - 1
    while (left < right) {
        const sum = nums[left] + nums[right]
        if (sum === target) return [left, right]
        if (sum < target) left++
        else right--
    }
    return []
}

export {}
