/**
 * [131. 分割回文串](https://leetcode.cn/problems/palindrome-partitioning/)
 */
class Solution {
    public List<List<String>> partition(String s) {
        int n = s.length();
        // 先 DP 预处理 dp[i][j]：s[i..j] 是否为回文串
        boolean[][] dp = new boolean[n][n];
        for (int i = 0; i < n; i++) {
            Arrays.fill(dp[i], true);
        }
        for (int i = n - 1; i >= 0; i--) {
            for (int j = i + 1; j < n; j++) {
                dp[i][j] = dp[i + 1][j - 1] && s.charAt(i) == s.charAt(j);
            }
        }
        List<List<String>> ans = new ArrayList<>();
        dfs(s, 0, new ArrayList<>(), ans, dp);
        return ans;
    }

    private void dfs(String s, int cur, List<String> list, List<List<String>> ans, boolean[][] dp) {
        if (cur >= s.length()) {
            ans.add(new ArrayList<>(list));
            return;
        }
        for (int i = cur; i < s.length(); i++) {
            if (dp[cur][i]) {
                list.add(s.substring(cur, i + 1));
                dfs(s, i + 1, list, ans, dp);
                list.remove(list.size() - 1);
            }
        }
    }
}
