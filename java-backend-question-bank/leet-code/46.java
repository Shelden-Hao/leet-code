/**
 * [46. 全排列](https://leetcode.cn/problems/permutations/)
 */
class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        boolean[] used = new boolean[nums.length];
        dfs(new ArrayList<>(), nums, used, ans);
        return ans;
    }

    private void dfs(List<Integer> list, int[] nums, boolean[] used, List<List<Integer>> ans) {
        if (list.size() == nums.length) {
            ans.add(new ArrayList<>(list));
            return;
        }
        for (int i = 0; i < nums.length; i++) {
            if (!used[i]) {
                used[i] = true;
                list.add(nums[i]);
                dfs(list, nums, used, ans);
                // 回溯：撤销选择
                list.remove(list.size() - 1);
                used[i] = false;
            }
        }
    }
}
