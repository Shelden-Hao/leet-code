/**
 * [934. 最短的桥](https://leetcode.cn/problems/shortest-bridge/)
 * 先用迭代 DFS 把第一座岛染色并入队，再按层 BFS 向外扩展，首次遇到另一座岛的层数即答案
 */
class Solution {
    public int shortestBridge(int[][] grid) {
        int n = grid.length;
        int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        ArrayDeque<int[]> q = new ArrayDeque<>();
        int si = -1, sj = -1;
        outer:
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    si = i;
                    sj = j;
                    break outer;
                }
            }
        }
        ArrayDeque<int[]> stack = new ArrayDeque<>();
        stack.push(new int[]{si, sj});
        grid[si][sj] = 2;
        while (!stack.isEmpty()) {
            int[] p = stack.pop();
            q.offer(p);
            for (int[] d : dirs) {
                int x = p[0] + d[0], y = p[1] + d[1];
                if (x >= 0 && x < n && y >= 0 && y < n && grid[x][y] == 1) {
                    grid[x][y] = 2;
                    stack.push(new int[]{x, y});
                }
            }
        }
        int step = 0;
        while (!q.isEmpty()) {
            int size = q.size();
            for (int s = 0; s < size; s++) {
                int[] p = q.poll();
                for (int[] d : dirs) {
                    int x = p[0] + d[0], y = p[1] + d[1];
                    if (x < 0 || x >= n || y < 0 || y >= n || grid[x][y] == 2) continue;
                    if (grid[x][y] == 1) return step;
                    grid[x][y] = 2;
                    q.offer(new int[]{x, y});
                }
            }
            step++;
        }
        return -1;
    }
}
