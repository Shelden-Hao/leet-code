/**
 * [94. 二叉树的中序遍历](https://leetcode.cn/problems/binary-tree-inorder-traversal/)
 */
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        // 迭代写法：一路压左孩子入栈，弹出时访问，再转向右子树
        List<Integer> ans = new ArrayList<>();
        Deque<TreeNode> stack = new LinkedList<>();
        TreeNode cur = root;
        while (!stack.isEmpty() || cur != null) {
            while (cur != null) {
                stack.push(cur);
                cur = cur.left;
            }
            TreeNode node = stack.pop();
            ans.add(node.val);
            cur = node.right;
        }
        return ans;
    }
}
