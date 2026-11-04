/**
 * [79. 单词搜索](https://leetcode.cn/problems/word-search/)
 */
class Solution {
    public boolean exist(char[][] board, String word) {
        int n = board.length;
        int m = board[0].length;
        boolean[][] v = new boolean[n][m];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (dfs(board, word, 0, i, j, v)) {
                    return true;
                }
            }
        }
        return false;
    }

    private boolean dfs(char[][] board, String word, int index, int i, int j, boolean[][] v) {
        if (!valid(board.length, board[0].length, i, j) || v[i][j] || board[i][j] != word.charAt(index)) {
            return false;
        }
        if (index == word.length() - 1) return true;
        v[i][j] = true;
        boolean result = dfs(board, word, index + 1, i + 1, j, v) ||
                dfs(board, word, index + 1, i - 1, j, v) ||
                dfs(board, word, index + 1, i, j + 1, v) ||
                dfs(board, word, index + 1, i, j - 1, v);
        // 回溯：撤销访问标记，允许其它路径复用这个格子
        v[i][j] = false;
        return result;
    }

    private boolean valid(int n, int m, int i, int j) {
        return i >= 0 && j >= 0 && i < n && j < m;
    }
}
