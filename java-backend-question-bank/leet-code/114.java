/**
 * [114. 二叉树展开为链表](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/)
 */
class Solution {
    public void flatten(TreeNode root) {
        if (root == null) return;
        if (root.left != null) {
            // 找到左子树的最右结点，把右子树接到它后面，再把左子树整体挪到右边
            TreeNode node = root.left;
            while (node.right != null) node = node.right;
            node.right = root.right;
            root.right = root.left;
            root.left = null;
        }
        flatten(root.right);
    }
}
