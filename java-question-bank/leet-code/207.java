/**
 * [207. 课程表](https://leetcode.cn/problems/course-schedule/)
 */
class Solution {
    int[] v;

    public boolean canFinish(int numCourses, int[][] prerequisites) {
        v = new int[numCourses];
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < numCourses; i++) {
            graph.add(new ArrayList<>());
        }
        for (int[] pre : prerequisites) {
            graph.get(pre[0]).add(pre[1]);
        }
        // 0 未访问 / 1 正在访问 / 2 已完成，遇到 1 说明有环
        for (int i = 0; i < numCourses; i++) {
            if (!dfs(graph, i)) return false;
        }
        return true;
    }

    private boolean dfs(List<List<Integer>> graph, int cur) {
        if (v[cur] == 1) return false;
        if (v[cur] == 2) return true;
        v[cur] = 1;
        for (Integer next : graph.get(cur)) {
            if (!dfs(graph, next)) return false;
        }
        v[cur] = 2;
        return true;
    }
}
