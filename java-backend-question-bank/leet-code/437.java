/**
 * [437. 路径总和 III](https://leetcode.cn/problems/path-sum-iii/)
 */
class Solution {
    Map<Long, Integer> map = new HashMap<>();
    long sum = 0;
    int count = 0;

    public int pathSum(TreeNode root, int targetSum) {
        map.clear();
        sum = 0;
        count = 0;
        dfs(root, targetSum);
        return count;
    }

    private void dfs(TreeNode root, int targetSum) {
        // 前缀和：以当前节点结尾的路径数 = 之前出现过的 (sum - targetSum) 次数
        if (root == null) return;
        sum += root.val;
        count += map.getOrDefault(sum - targetSum, 0);
        count += sum == targetSum ? 1 : 0;
        map.put(sum, map.getOrDefault(sum, 0) + 1);
        dfs(root.left, targetSum);
        dfs(root.right, targetSum);
        map.put(sum, map.get(sum) - 1);
        sum -= root.val;
    }
}
