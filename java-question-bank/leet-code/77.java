/**
 * [77. 组合](https://leetcode.cn/problems/combinations/)
 * 回溯枚举组合，用剩余所需个数做上界剪枝，避免无效分支
 */
class Solution {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> ans = new ArrayList<>();
        dfs(n, k, 1, new ArrayList<>(), ans);
        return ans;
    }

    private void dfs(int n, int k, int start, List<Integer> path, List<List<Integer>> ans) {
        if (path.size() == k) {
            ans.add(new ArrayList<>(path));
            return;
        }
        for (int i = start; i <= n - (k - path.size()) + 1; i++) {
            path.add(i);
            dfs(n, k, i + 1, path, ans);
            path.remove(path.size() - 1);
        }
    }
}
