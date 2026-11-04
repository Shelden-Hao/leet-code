/**
 * 628. 三个数的最大乘积 - 排序
 * @param nums 原数组
 * @description
 * 可能的情况有两种：
 * 三个最大的数相乘（最大正数的组合）。
 * 两个最小的数（可能是负数）和最大的数相乘（负负得正，可能更大）。
 * 时间复杂度 O(nlogn) 排序的复杂度。
 */
function maximumProduct(nums: number[]): number {
    const n = nums.length
    nums.sort((a, b) => a - b)
    // 情况1：最大的三个数
    const case1 = nums[n - 1] * nums[n - 2] * nums[n - 3]
    // 情况2：最小的两个数 × 最大的数
    const case2 = nums[0] * nums[n - 1] * nums[n - 2]
    return Math.max(case1, case2)
};

/**
 * 628. 三个数的最大乘积 - 非排序(优化)
 * @param nums
 * @description 不排序。遍历数组时，维护 最大三个数 和 最小两个数。
 */
// function maximumProduct(nums: number[]): number {
//     let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity
//     let min1 = Infinity, min2 = Infinity
//     for (let num of nums) {
//         // 更新最大值
//         if (num > max1) {
//             [max1, max2, max3] = [num, max1, max2]
//         } else if (num > max2) {
//             [max2, max3] = [num, max2]
//         } else if (num > max3) {
//             max3 = num
//         }
//         // 更新最小值
//         if (num < min1) {
//             [min1, min2] = [num, min1]
//         } else if (num < min2) {
//             min2 = num
//         }
//     }
//     return Math.max(max1 * max2 * max3, min1 * min2 * max1)
// }

export {}
