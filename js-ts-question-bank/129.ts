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
 * 129. 求根节点到叶节点数字之和
 * https://leetcode.cn/problems/sum-root-to-leaf-numbers/description/
 * @param root 根节点
 * @description dfs 深度优先搜索，累加各个节点的数字，currentSum = currentSum * 10 + node.val 。
 */
function sumNumbers(root: TreeNode | null): number {
    /**
     * dfs
     * @param node 当前节点
     * @param prevSum 之前已经遍历过的节点之和
     */
    function dfs(node: TreeNode | null, prevSum: number): number {
        if (!node) return 0
        const currentSum = prevSum * 10 + node.val
        if (!node.left && !node.right) {
            return currentSum
        }
        return dfs(node.left, currentSum) + dfs(node.right, currentSum)
    }
    return dfs(root, 0)
};

export {}
