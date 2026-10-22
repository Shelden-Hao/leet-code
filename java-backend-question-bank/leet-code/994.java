/**
 * [994. 腐烂的橘子](https://leetcode.cn/problems/rotting-oranges/)
 */
class Solution {
    int minute;
    int n;
    int m;
    Queue<int[]> queue = new LinkedList<>();
    int fresh = 0;
    boolean flag;

    public int orangesRotting(int[][] grid) {
        n = grid.length;
        m = grid[0].length;
        minute = 0;
        fresh = 0;
        queue.clear();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] == 2) {
                    queue.offer(new int[]{i, j});
                } else if (grid[i][j] == 1) {
                    fresh++;
                }
            }
        }
        // 多源 BFS 按层扩散，每有一层新感染的橘子，时间 +1
        while (!queue.isEmpty()) {
            int size = queue.size();
            flag = false;
            for (int i = 0; i < size; i++) {
                int[] pos = queue.poll();
                int r = pos[0];
                int c = pos[1];
                grid[r][c] = 2;
                bfs(grid, r + 1, c);
                bfs(grid, r, c + 1);
                bfs(grid, r - 1, c);
                bfs(grid, r, c - 1);
            }
            if (flag) minute++;
        }
        if (fresh > 0) return -1;
        return minute;
    }

    private void bfs(int[][] grid, int i, int j) {
        if (!valid(i, j) || grid[i][j] != 1) return;
        grid[i][j] = 2;
        fresh--;
        queue.offer(new int[]{i, j});
        flag = true;
    }

    private boolean valid(int i, int j) {
        return i >= 0 && j >= 0 && i < n && j < m;
    }
}
