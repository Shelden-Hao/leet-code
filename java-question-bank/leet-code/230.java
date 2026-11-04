/**
 * [230. 二叉搜索树中第 K 小的元素](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/)
 */
class Solution {
    int count = 0;
    int ans;

    public int kthSmallest(TreeNode root, int k) {
        count = 0;
        inOrder(root, k);
        return ans;
    }

    private void inOrder(TreeNode root, int k) {
        // 中序遍历天然有序，数到第 k 个就是答案
        if (root == null || count >= k) return;
        inOrder(root.left, k);
        if (++count == k) {
            ans = root.val;
            return;
        }
        inOrder(root.right, k);
    }
}
