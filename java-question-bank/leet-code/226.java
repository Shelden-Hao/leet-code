/**
 * [226. 翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)
 */
class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) return root;
        TreeNode left = invertTree(root.left);
        TreeNode right = invertTree(root.right);
        root.right = left;
        root.left = right;
        return root;
    }
}
