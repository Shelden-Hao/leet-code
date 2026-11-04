/**
 * [112. 路径总和](https://leetcode.cn/problems/path-sum/)
 * 递归向下时用 targetSum 递减，到叶子节点判断剩余值是否恰好等于节点值
 */
class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null) return false;
        if (root.left == null && root.right == null) return root.val == targetSum;
        return hasPathSum(root.left, targetSum - root.val)
                || hasPathSum(root.right, targetSum - root.val);
    }
}
