/**
 * [145. 二叉树的后序遍历](https://leetcode.cn/problems/binary-tree-postorder-traversal/)
 */
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        // 按「中右左」压栈得到的顺序反过来就是「左右中」
        List<Integer> ans = new ArrayList<>();
        if (root == null) return ans;
        List<Integer> reverse = new ArrayList<>();
        Deque<TreeNode> stack = new LinkedList<>();
        stack.push(root);
        while (!stack.isEmpty()) {
            TreeNode node = stack.pop();
            reverse.add(node.val);
            if (node.left != null) stack.push(node.left);
            if (node.right != null) stack.push(node.right);
        }
        for (int i = reverse.size() - 1; i >= 0; i--) {
            ans.add(reverse.get(i));
        }
        return ans;
    }
}
