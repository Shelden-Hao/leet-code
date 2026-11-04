/**
 * [110. 平衡二叉树](https://leetcode.cn/problems/balanced-binary-tree/)
 * 后序计算高度，不平衡就返回 -1 向上传递，一次遍历同时判平衡
 */
class Solution {
    public boolean isBalanced(TreeNode root) {
        return height(root) != -1;
    }

    private int height(TreeNode node) {
        if (node == null) return 0;
        int l = height(node.left);
        if (l == -1) return -1;
        int r = height(node.right);
        if (r == -1 || Math.abs(l - r) > 1) return -1;
        return Math.max(l, r) + 1;
    }
}
