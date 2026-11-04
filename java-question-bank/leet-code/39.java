/**
 * [39. 组合总和](https://leetcode.cn/problems/combination-sum/)
 */
class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> ans = new ArrayList<>();
        dfs(candidates, target, 0, new ArrayList<>(), ans);
        return ans;
    }

    private void dfs(int[] candidates, int target, int cur, List<Integer> list, List<List<Integer>> ans) {
        if (target == 0) {
            ans.add(new ArrayList<>(list));
            return;
        } else if (target < 0) {
            return;
        }
        // 从 cur 开始，保证组合不重复；i 不 +1 表示当前数可以重复取
        for (int i = cur; i < candidates.length; i++) {
            list.add(candidates[i]);
            dfs(candidates, target - candidates[i], i, list, ans);
            list.remove(list.size() - 1);
        }
    }
}
