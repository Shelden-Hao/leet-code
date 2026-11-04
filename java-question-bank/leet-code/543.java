/**
 * [543. 二叉树的直径](https://leetcode.cn/problems/diameter-of-binary-tree/)
 */
class Solution {
    int ans = 0;

    public int diameterOfBinaryTree(TreeNode root) {
        ans = 0;
        depth(root);
        return ans;
    }

    private int depth(TreeNode root) {
        // 后序遍历返回子树高度，同时用「左高 + 右高」更新直径
        if (root == null) return 0;
        int left = depth(root.left);
        int right = depth(root.right);
        ans = Math.max(ans, left + right);
        return 1 + Math.max(left, right);
    }
}
