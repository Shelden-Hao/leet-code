/**
 * [106. 从中序与后序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)
 * 后序末位是根，用哈希表定位中序根下标，递归切分左右子树区间
 */
class Solution {
    private Map<Integer, Integer> idx;

    public TreeNode buildTree(int[] inorder, int[] postorder) {
        idx = new HashMap<>();
        for (int i = 0; i < inorder.length; i++) idx.put(inorder[i], i);
        return build(inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1);
    }

    private TreeNode build(int[] in, int[] post, int il, int ir, int pl, int pr) {
        if (il > ir) return null;
        int rootVal = post[pr];
        TreeNode root = new TreeNode(rootVal);
        int k = idx.get(rootVal);
        int leftLen = k - il;
        root.left = build(in, post, il, k - 1, pl, pl + leftLen - 1);
        root.right = build(in, post, k + 1, ir, pl + leftLen, pr - 1);
        return root;
    }
}
