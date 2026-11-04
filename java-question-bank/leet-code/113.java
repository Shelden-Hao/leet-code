/**
 * [113. 路径总和 II](https://leetcode.cn/problems/path-sum-ii/)
 * 回溯维护当前路径，到达叶子且剩余值归零时拷贝一份路径加入答案
 */
class Solution {
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        List<List<Integer>> ans = new ArrayList<>();
        dfs(root, targetSum, new ArrayList<>(), ans);
        return ans;
    }

    private void dfs(TreeNode node, int rest, List<Integer> path, List<List<Integer>> ans) {
        if (node == null) return;
        path.add(node.val);
        if (node.left == null && node.right == null && node.val == rest) {
            ans.add(new ArrayList<>(path));
        } else {
            dfs(node.left, rest - node.val, path, ans);
            dfs(node.right, rest - node.val, path, ans);
        }
        path.remove(path.size() - 1);
    }
}
