/**
 * 礼物的最大价值
 * @param frame 二维矩阵
 */
function jewelleryValue(frame: number[][]): number {
    const m = frame.length
    const n = frame[0].length
    // 定义状态
    const dp: number[][] = Array.from({length: m}, () => {
        return Array(n).fill(0)
    })
    dp[0][0] = frame[0][0]
    // 初始化
    for (let i = 1; i < m; i++) {
        dp[i][0] = frame[i][0] + dp[i - 1][0]
    }
    for (let i = 1; i < n; i++) {
        dp[0][i] = frame[0][i] + dp[0][i - 1]
    }
    // 循环 状态方程
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + frame[i][j]
        }
    }
    return dp[m - 1][n - 1]
};