/**
 * [124. 二叉树中的最大路径和](https://leetcode.cn/problems/binary-tree-maximum-path-sum/)
 */
class Solution {
    public int maxPathSum(TreeNode root) {
        ans = Integer.MIN_VALUE;
        gain(root);
        return ans;
    }

    private int gain(TreeNode root) {
        // 返回以 root 为端点向下延伸的最大贡献，负数直接舍弃
        if (root == null) return 0;
        int left = Math.max(gain(root.left), 0);
        int right = Math.max(gain(root.right), 0);
        ans = Math.max(ans, left + right + root.val);
        return Math.max(left, right) + root.val;
    }

    int ans = Integer.MIN_VALUE;
}
