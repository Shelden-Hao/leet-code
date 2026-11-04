/**
 * [200. 岛屿数量](https://leetcode.cn/problems/number-of-islands/)
 */
class Solution {
    int count;
    int n;
    int m;

    public int numIslands(char[][] grid) {
        n = grid.length;
        m = grid[0].length;
        count = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] == '1') {
                    // 每找到一个没被淹过的陆地，就是一个新岛屿，随即把整块淹掉
                    count++;
                    dfs(grid, i, j);
                }
            }
        }
        return count;
    }

    private void dfs(char[][] grid, int i, int j) {
        if (!valid(i, j) || grid[i][j] != '1') return;
        grid[i][j] = '2';
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    }

    private boolean valid(int i, int j) {
        return i >= 0 && j >= 0 && i < n && j < m;
    }
}
