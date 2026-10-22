/**
 * [144. 二叉树的前序遍历](https://leetcode.cn/problems/binary-tree-preorder-traversal/)
 */
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        // 栈里先压右孩子再压左孩子，出栈顺序就是「中左右」
        List<Integer> ans = new ArrayList<>();
        if (root == null) return ans;
        Deque<TreeNode> stack = new LinkedList<>();
        stack.push(root);
        while (!stack.isEmpty()) {
            TreeNode node = stack.pop();
            ans.add(node.val);
            if (node.right != null) stack.push(node.right);
            if (node.left != null) stack.push(node.left);
        }
        return ans;
    }
}
