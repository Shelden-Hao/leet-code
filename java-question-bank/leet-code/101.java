/**
 * [101. 对称二叉树](https://leetcode.cn/problems/symmetric-tree/)
 */
class Solution {
    public boolean isSymmetric(TreeNode root) {
        if (root == null) return true;
        return check(root.left, root.right);
    }

    private boolean check(TreeNode left, TreeNode right) {
        // 外侧对内侧：left.left 比 right.right，left.right 比 right.left
        if (left == null && right == null) return true;
        if (left == null || right == null) return false;
        if (left.val != right.val) return false;
        return check(left.left, right.right) && check(left.right, right.left);
    }
}
