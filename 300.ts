/**
 * 最长递增子序列
 * @param nums 原数组
 * @description dp 初始化所有值为1，dp[i]表示为nums[i]结尾的最长递增子序列的长度。
 * 而dp[i]刚好等于他前面比nums[i]小的值中的最大的dp加上1 。
 * 时间复杂度为 O(n²) 空间复杂度为 O(n)
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
 * @description 时间复杂度为 O(nlogn) 。遍历元素为 O(n) 二分查找为 O(logn) 。
 * 用一个数组 tails 维护当前所有长度的递增子序列的最小结尾值（越小越好，方便后面接上）。
 * 遍历原数组，对每个元素 x，用二分查找在 tails 中找到第一个 ≥ x 的位置并替换（如果没找到就直接追加到末尾）。
 * tails 的长度就是 LIS 的长度，因为它始终保存了最优的“接龙基础”。
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
                // 当 num === tails[mid] 的时候，也要更新 right=mid-1，是因为需要找到第一个比num小的，所以还要继续向左收缩
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        // 是否找到可以存放的位置
        if (left === tails.length) {
            // 没有找到位置 eg: 假如添加一个很大的数(找不到位置)，那么最后 left>right，刚好 left 在 tails.length 的位置
            tails.push(num)
        } else {
            // 如果找到位置 eg: 假如添加一个很小的数，那么最后 right 指向 -1，left 指向 0 索引，所以直接给 num 赋值到 left 即可
            tails[left] = num
        }
    }
    return tails.length
};

/*
贪心+二分 思考过程：
    原数组： 10 9 2 4 3 7 101 18
    思路：  10 4 7 101           => 2 3 7 18 为最长递增子序列
           9  3   18
           2
* */
