/**
 * [78. 子集](https://leetcode.cn/problems/subsets/)
 */
class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        dfs(nums, 0, ans, new ArrayList<>());
        return ans;
    }

    private void dfs(int[] nums, int cur, List<List<Integer>> ans, List<Integer> list) {
        // 每个元素只有「选」和「不选」两种走法
        if (cur == nums.length) {
            ans.add(new ArrayList<>(list));
            return;
        }
        list.add(nums[cur]);
        dfs(nums, cur + 1, ans, list);
        list.remove(list.size() - 1);
        dfs(nums, cur + 1, ans, list);
    }
}
