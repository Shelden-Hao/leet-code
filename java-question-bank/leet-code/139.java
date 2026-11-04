/**
 * [139. 单词拆分](https://leetcode.cn/problems/word-break/)
 */
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        int n = s.length();
        boolean[] dp = new boolean[n + 1];
        dp[0] = true;
        int maxLen = 0;
        Set<String> set = new HashSet<>(wordDict);
        for (String w : wordDict) {
            maxLen = Math.max(maxLen, w.length());
        }
        // dp[i] 表示前 i 个字符能否被拆分，只需要往回看最长单词的长度
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= maxLen && j <= i; j++) {
                if (dp[i - j] && set.contains(s.substring(i - j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[n];
    }
}
