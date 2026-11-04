/**
 * [210. 课程表 II](https://leetcode.cn/problems/course-schedule-ii/)
 * 拓扑排序：统计入度，BFS 逐层取出入度为 0 的课程，能取完说明无环
 */
class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        int[] indeg = new int[numCourses];
        List<List<Integer>> g = new ArrayList<>();
        for (int i = 0; i < numCourses; i++) g.add(new ArrayList<>());
        for (int[] p : prerequisites) {
            g.get(p[1]).add(p[0]);
            indeg[p[0]]++;
        }
        ArrayDeque<Integer> q = new ArrayDeque<>();
        for (int i = 0; i < numCourses; i++) {
            if (indeg[i] == 0) q.offer(i);
        }
        int[] ans = new int[numCourses];
        int k = 0;
        while (!q.isEmpty()) {
            int u = q.poll();
            ans[k++] = u;
            for (int v : g.get(u)) {
                if (--indeg[v] == 0) q.offer(v);
            }
        }
        return k == numCourses ? ans : new int[0];
    }
}
