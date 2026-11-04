/**
 * [130. 被围绕的区域](https://leetcode.cn/problems/surrounded-regions/)
 * 从四条边界的 O 出发 BFS 标记为 A（与边界连通），剩余 O 才是被围绕的区域
 */
class Solution {
    public void solve(char[][] board) {
        int m = board.length, n = board[0].length;
        int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        ArrayDeque<int[]> q = new ArrayDeque<>();
        for (int i = 0; i < m; i++) {
            if (board[i][0] == 'O') { board[i][0] = 'A'; q.offer(new int[]{i, 0}); }
            if (board[i][n - 1] == 'O') { board[i][n - 1] = 'A'; q.offer(new int[]{i, n - 1}); }
        }
        for (int j = 0; j < n; j++) {
            if (board[0][j] == 'O') { board[0][j] = 'A'; q.offer(new int[]{0, j}); }
            if (board[m - 1][j] == 'O') { board[m - 1][j] = 'A'; q.offer(new int[]{m - 1, j}); }
        }
        while (!q.isEmpty()) {
            int[] p = q.poll();
            for (int[] d : dirs) {
                int x = p[0] + d[0], y = p[1] + d[1];
                if (x >= 0 && x < m && y >= 0 && y < n && board[x][y] == 'O') {
                    board[x][y] = 'A';
                    q.offer(new int[]{x, y});
                }
            }
        }
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                board[i][j] = board[i][j] == 'A' ? 'O' : 'X';
            }
        }
    }
}
