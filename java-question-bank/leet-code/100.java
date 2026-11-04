/**
 * [100. 相同的树](https://leetcode.cn/problems/same-tree/)
 * 递归同时遍历两棵树，结构与节点值完全一致才返回 true
 */
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null || q == null) return p == q;
        return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}
