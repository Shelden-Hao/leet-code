/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * 110. 平衡二叉树
 * https://leetcode.cn/problems/balanced-binary-tree/description/
 * @param root 根节点
 * @description
 * - 先序遍历：从上到下，向下传值，获取深度
 * - 后序遍历：从下到上，向上传值，获取高度（本题就是获取高度）
 */
function isBalanced(root: TreeNode | null): boolean {
    // 从底向上递归，返回高度，不平衡直接返回-1
    function dfs(node: TreeNode | null): number {
        if (node === null) return 0
        const left = dfs(node.left)
        // 左子树不平衡
        if (left === -1) return -1
        const right = dfs(node.right)
        // 右子树不平衡
        if (right === -1) return -1
        // 当前树不平衡
        if (Math.abs(left - right) > 1) return -1
        // 返回高度
        return 1 + Math.max(left, right)
    }

    return dfs(root) !== -1
}
