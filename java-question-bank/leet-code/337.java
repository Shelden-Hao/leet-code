/**
 * [337. 打家劫舍 III](https://leetcode.cn/problems/house-robber-iii/)
 * 树形 DP：每个节点返回 [偷该节点的最大值, 不偷该节点的最大值]，自底向上合并
 */
class Solution {
    public int rob(TreeNode root) {
        int[] res = dfs(root);
        return Math.max(res[0], res[1]);
    }

    private int[] dfs(TreeNode node) {
        if (node == null) return new int[]{0, 0};
        int[] l = dfs(node.left), r = dfs(node.right);
        int robHere = node.val + l[1] + r[1];
        int skipHere = Math.max(l[0], l[1]) + Math.max(r[0], r[1]);
        return new int[]{robHere, skipHere};
    }
}
