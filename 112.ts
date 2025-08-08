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
 * 112. 路径总和
 * https://leetcode.cn/problems/path-sum/description/
 * @param root 根节点
 * @param targetSum 路径包含节点之和
 * @description 没有确定遍历次数没法回溯，递归又不好保留每条路径的和。所以采用逆向思维：逐步递减比较叶子节点值。
 * 所以可以采用一边递归一边递减目标值，到达叶子节点刚好只需对比递减后的目标值和当前叶子节点的val是否相同。
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) return false

    if (root.left === null && root.right === null) return root.val === targetSum

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right , targetSum - root.val)
};

export {}
