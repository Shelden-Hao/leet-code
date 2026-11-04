/**
 * [40. 组合总和 II](https://leetcode.cn/problems/combination-sum-ii/)
 * 排序后回溯，同一层遇到重复元素跳过，每个数字只能用一次所以递归起点 i+1
 */
class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        List<List<Integer>> ans = new ArrayList<>();
        dfs(candidates, target, 0, new ArrayList<>(), ans);
        return ans;
    }

    private void dfs(int[] c, int rest, int start, List<Integer> path, List<List<Integer>> ans) {
        if (rest == 0) {
            ans.add(new ArrayList<>(path));
            return;
        }
        for (int i = start; i < c.length; i++) {
            if (c[i] > rest) break;
            if (i > start && c[i] == c[i - 1]) continue;
            path.add(c[i]);
            dfs(c, rest - c[i], i + 1, path, ans);
            path.remove(path.size() - 1);
        }
    }
}
