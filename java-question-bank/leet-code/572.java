/**
 * [572. 另一棵树的子树](https://leetcode.cn/problems/subtree-of-another-tree/)
 * 遍历主树每个节点，用 isSame 判断以该节点为根的子树是否与 subRoot 完全一致
 */
class Solution {
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        if (root == null) return subRoot == null;
        return isSame(root, subRoot)
                || isSubtree(root.left, subRoot)
                || isSubtree(root.right, subRoot);
    }

    private boolean isSame(TreeNode a, TreeNode b) {
        if (a == null || b == null) return a == b;
        return a.val == b.val && isSame(a.left, b.left) && isSame(a.right, b.right);
    }
}
