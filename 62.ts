/**
 * 62. 不同路径
 * https://leetcode.cn/problems/unique-paths/description/
 * @param m 第m行
 * @param n 第n列
 * @description 动态规划
 * 注意：初始化阶段，看清下标，保证第一行第一列初始化正确。
 */
function uniquePaths(m: number, n: number): number {
    // 定义状态
    // 直接定义 [] 会导致所有项都是undefined而报错
    const dp: number[][] = Array.from({ length: m }, () => {
        return Array(n).fill(0)
    })
    // 初始化
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = 1
    }
    for (let i = 0; i < dp[0].length; i++) {
        dp[0][i] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};

export {}
