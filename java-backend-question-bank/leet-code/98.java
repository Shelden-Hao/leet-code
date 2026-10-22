/**
 * [98. 验证二叉搜索树](https://leetcode.cn/problems/validate-binary-search-tree/)
 */
class Solution {
    public boolean isValidBST(TreeNode root) {
        return check(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    private boolean check(TreeNode root, long down, long up) {
        // 上下界收紧：左子树上界是当前值，右子树下界是当前值
        if (root == null) return true;
        if (root.val <= down || root.val >= up) return false;
        return check(root.left, down, root.val) && check(root.right, root.val, up);
    }
}
