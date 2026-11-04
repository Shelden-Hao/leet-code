/**
 * [695. 岛屿的最大面积](https://leetcode.cn/problems/max-area-of-island/)
 * 遍历网格，遇到陆地就 BFS 把连通块置 0 并计数，维护最大面积
 */
class Solution {
    public int maxAreaOfIsland(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        int ans = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] != 1) continue;
                grid[i][j] = 0;
                int area = 0;
                ArrayDeque<int[]> q = new ArrayDeque<>();
                q.offer(new int[]{i, j});
                while (!q.isEmpty()) {
                    int[] p = q.poll();
                    area++;
                    for (int[] d : dirs) {
                        int x = p[0] + d[0], y = p[1] + d[1];
                        if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] == 1) {
                            grid[x][y] = 0;
                            q.offer(new int[]{x, y});
                        }
                    }
                }
                ans = Math.max(ans, area);
            }
        }
        return ans;
    }
}
