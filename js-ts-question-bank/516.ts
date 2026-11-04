/**
 * 516. 最长回文子序列 [https://leetcode.cn/problems/longest-palindromic-subsequence/]
 * @param s 原字符串
 * @description dp。
 * 注意：子串：必须连续；子序列：不要求连续(不能用中间扩展的方法)。
 * 定义 dp[i][j] 表示字符串 s[i..j] 的最长回文子序列长度。
 * 转移方程：
 * 如果 s[i] === s[j]，则 dp[i][j] = dp[i+1][j-1] + 2
 * 否则 dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
 * 边界条件：dp[i][i] = 1（单个字符本身就是回文）。
 * 最终答案是 dp[0][n-1]。
 */
function longestPalindromeSubseq(s: string): number {
    const n = s.length
    // dp[i][j] 表示 s[i..j] 的最长回文子序列长度
    const dp: number[][] = Array.from({length: n}, () => Array(n).fill(0))
    // 单个字符回文长度为 1
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1
    }
    // 由于 dp[i][j] 依赖于 dp[i+1][j-1]或dp[i+1][j], dp[i][j-1]
    // 所以 i 只能从右往左遍历，先求出 i+1，然后才能求 i
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[0][n - 1]
};

export {}
