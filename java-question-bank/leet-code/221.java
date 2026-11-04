/**
 * [221. 最大正方形](https://leetcode.cn/problems/maximal-square/)
 * DP：dp[j] 表示以当前格为右下角的最大正方形边长，用 prev 保存左上角旧值
 */
class Solution {
    public int maximalSquare(char[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        int[] dp = new int[n + 1];
        int max = 0;
        for (int i = 1; i <= m; i++) {
            int prev = 0;
            for (int j = 1; j <= n; j++) {
                int tmp = dp[j];
                if (matrix[i - 1][j - 1] == '1') {
                    dp[j] = Math.min(Math.min(dp[j], dp[j - 1]), prev) + 1;
                    max = Math.max(max, dp[j]);
                } else {
                    dp[j] = 0;
                }
                prev = tmp;
            }
        }
        return max * max;
    }
}
