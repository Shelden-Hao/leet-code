/**
 * 718. 最长重复子数组
 * https://leetcode.cn/problems/maximum-length-of-repeated-subarray/description/
 * @param nums1 第一个数组
 * @param nums2 第二个数组
 * @description 动态规划。
 * ```js
 * if nums1[i-1] === nums2[j-1]:
 *     dp[i][j] = dp[i-1][j-1] + 1
 * else:
 *     dp[i][j] = 0
 * ```
 */
function findLength(nums1: number[], nums2: number[]): number {
    const n = nums1.length, m = nums2.length
    const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0))
    let res = 0
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            // dp[i][j] = 以 nums1[i-1] 和 nums2[j-1] 结尾的最长公共子数组长度
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
                res = Math.max(res, dp[i][j])
            }
        }
    }
    return res
};

export {}
