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

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/**
 * 二叉树的最大路径和
 * @param root 根节点
 */
function maxPathSum(root: TreeNode | null): number {
    // 先将最大值定义为负无穷
    let max = -Infinity

    // 递归每一个节点所能提供的最大值
    function dfs(node: TreeNode | null): number {
        if (!node) return 0

        // 左右子节点所能提供的最大值
        const leftSum = Math.max(dfs(node.left), 0)
        const rightSum = Math.max(dfs(node.right), 0)

        // 当前节点所能获取到的最大值 => 连接路径
        const pathSum = node.val + leftSum + rightSum
        max = Math.max(pathSum, max)

        // 当前节点能够提供给父节点的最大值 => 继续递归
        return node.val + Math.max(leftSum, rightSum)
    }

    dfs(root)
    return max
};