/**
 * [105. 从前序与中序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
 */
class Solution {
    Map<Integer, Integer> map = new HashMap<>();

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        for (int i = 0; i < inorder.length; i++) {
            map.put(inorder[i], i);
        }
        return build(preorder, 0, preorder.length - 1, 0, inorder.length - 1);
    }

    private TreeNode build(int[] preorder, int ps, int pe, int is, int ie) {
        // 先序第一个是根，用哈希表在中序里定位根，左边是左子树、右边是右子树
        if (ps > pe || is > ie) return null;
        int inIndex = map.get(preorder[ps]);
        int nleft = inIndex - is;
        TreeNode left = build(preorder, ps + 1, ps + nleft, is, inIndex - 1);
        TreeNode right = build(preorder, ps + nleft + 1, pe, inIndex + 1, ie);
        return new TreeNode(preorder[ps], left, right);
    }
}
