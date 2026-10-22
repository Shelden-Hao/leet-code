/**
 * [5. 最长回文子串](https://leetcode.cn/problems/longest-palindromic-substring/)
 */
class Solution {
    public String longestPalindrome(String s) {
        int n = s.length();
        boolean[][] dp = new boolean[n][n];
        int bestLen = -1;
        String ans = "";
        // dp[i][j] 表示 s[i..j] 是否回文，从后往前推保证 dp[i+1][j-1] 已知
        for (int i = n - 1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                if (s.charAt(i) == s.charAt(j) && (j - i <= 1 || dp[i + 1][j - 1])) {
                    dp[i][j] = true;
                    if (j - i > bestLen) {
                        bestLen = j - i;
                        ans = s.substring(i, j + 1);
                    }
                }
            }
        }
        return ans;
    }
}
