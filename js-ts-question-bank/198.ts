/**
 * 198. 打家劫舍
 * https://leetcode.cn/problems/house-robber/description/
 * @param nums 原数组
 * @return 不相邻元素的最大和
 * @description 本质上是求 不相邻元素的最大和。
 * 状态转移方程：dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
 */
function rob(nums: number[]): number {
    const n = nums.length
    if (n === 0) return 0
    const dp: number[] = new Array(n)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }

    return dp[n - 1]
};

export {}
