/**
 * [115. 不同的子序列](https://leetcode.cn/problems/distinct-subsequences/)
 * 动态规划：dp[j] 表示 t 的前 j 个字符在 s 中出现的个数，j 倒序滚更新
 */
class Solution {
    public int numDistinct(String s, String t) {
        int m = s.length(), n = t.length();
        long[] dp = new long[n + 1];
        dp[0] = 1;
        for (int i = 1; i <= m; i++) {
            for (int j = n; j >= 1; j--) {
                if (s.charAt(i - 1) == t.charAt(j - 1)) dp[j] += dp[j - 1];
            }
        }
        return (int) dp[n];
    }
}
