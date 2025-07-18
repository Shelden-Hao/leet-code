/**
 * 最长递增子序列
 * @param nums 原数组
 */
// function lengthOfLIS(nums: number[]): number {
//     const n = nums.length
//
//     // 定义状态 初始化值
//     const dp:number[] = new Array(n).fill(1)
//
//     // 循环 状态转移方程
//     for (let i = 1; i < n; i++) {
//         for (let j = 0; j < i; j++) {
//             if (nums[j] < nums[i]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1)
//             }
//         }
//     }
//
//     return Math.max(...dp)
// };

/**
 * 最长递增子序列 - 优化
 * @param nums 原数组
 */
// function lengthOfLIS(nums: number[]): number {
//     const n = nums.length
//
//     // 定义状态 初始化值
//     const dp:number[] = new Array(n).fill(1)
//     let max = dp[0]
//
//     // 循环 状态转移方程
//     for (let i = 1; i < n; i++) {
//         for (let j = 0; j < i; j++) {
//             if (nums[j] < nums[i]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1)
//             }
//         }
//         max = Math.max(dp[i], max)
//     }
//
//     return max
// };

/**
 * 最长递增子序列 - 二分查找+贪心
 * @param nums 原数组
 */
function lengthOfLIS(nums: number[]): number {
    const n = nums.length
    // 记录每个组中的最小值
    const tails: number[] = []

    // 遍历每一个元素
    for (let i = 0; i < n; i++) {
        const num = nums[i]
        let left = 0
        let right = tails.length - 1

        while (left <= right) {
            const mid = Math.floor((left+right) / 2)
            if (num <= tails[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        // 是否找到可以存放的位置
        if (left === tails.length) {
            // 没有找到位置
            tails.push(num)
        } else {
            tails[left] = num
        }
    }
    return tails.length
};