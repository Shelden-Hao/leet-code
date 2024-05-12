/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    // 通过求二叉树的最小高度 求最小深度
    // 终止条件也是遇到空节点返回0，表示当前节点的高度为0
    if (root === null) return 0;
    // 后序遍历 因为题干对于最小深度的定义 需要进行判断
    // 左  为空 求右节点最小高度 加 1（当前节点）
    if (root.left == null && root.right != null) {
        return 1 + minDepth(root.right);
    }
    // 右
    if (root.left != null && root.right == null) {
        return 1 + minDepth(root.left);
    }
    // 左右子树都不为空 加 1 （根节点）
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};