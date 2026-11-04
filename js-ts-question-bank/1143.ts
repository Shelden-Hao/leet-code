/**
 * 1143. 最长公共子序列
 * https://leetcode.cn/problems/longest-common-subsequence/description/
 * @param text1 第一个字符串
 * @param text2 第二个字符串
 * @description 最长公共子序列 LCS 是最长递增子序列的改版，同样适用动态规划，但是难的地方在于找到状态方程。
 * - 状态方程：dp[i][j] = text1 前 i 个字符 与 text2 前 j 个字符 的 最长公共子序列长度。
 * - 如果 text1[i-1] == text2[j-1] 说明当前两个字符可以加入公共子序列： dp[i][j] = dp[i-1][j-1] + 1 。
 * - 否则：当前字符不相等，只能从「去掉 text1 当前字符」或「去掉 text2 当前字符」两种情况取最大：dp[i][j] = max(dp[i-1][j], dp[i][j-1])。
 */
function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length, n = text2.length
    const dp: number[][] = Array.from({ length: m + 1 }, () => {
        return Array(n + 1).fill(0)
    })

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // 如果使用两个字符（相同的两个字符）：
            // dp[i-1][j] <= dp[i-1][j-1] + 1 并且 dp[i][j-1] <= dp[i-1][j-1] + 1
            // 所以综合来看取最大：
            // dp[i][j] 取值 dp[i - 1][j - 1] + 1
            if (text1[i - 1] === text2[j - 1]) {
                // 注意：这里对于 text 取值都是 -1 后的
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                // 如果只使用一个字符：
                // 长度 <= dp[i][j - 1] 而且 长度 <= dp[i - 1][j]
                // 或者一个都不使用：
                // 长度 ≤ dp[i-1][j-1]，而这又被 max(dp[i-1][j], dp[i][j-1]) 覆盖
                // 所以直接取最大
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[m][n]
};

export {}
