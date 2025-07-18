/**
 * 最大子数组和
 * @param nums 原数组
 */
// function maxSubArray(nums: number[]): number {
//     // 数组长度
//     const n = nums.length
//     // 定义状态
//     const dp: number[] = []
//     dp[0] = nums[0]
//     // 循环里面写状态转移方程
//     for (let i = 1; i < n; i++) {
//         dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
//     }
//     return Math.max(...dp)
// };

/**
 * 最大子数组和 - 状态压缩优化
 * @param nums 原数组
 */
function maxSubArray(nums: number[]): number {
    // 数组长度
    const n = nums.length
    // // 定义状态
    // const dp: number[] = []
    let preVal = nums[0]
    let max = preVal
    // 循环里面写状态转移方程
    for (let i = 1; i < n; i++) {
        preVal = Math.max(nums[i], preVal + nums[i])
        max = Math.max(max, preVal)
    }
    return max
};