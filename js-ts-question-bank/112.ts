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

/**
 * 变式：从1开始，只能加5或者乘3，计算 1024的所有可能
 * @description dfs 。这个题本质上是一个 从 1 到 1024 的路径搜索问题，允许的操作（路径）只有「+5」和「×3」 。
 * 根节点是 1。每个节点可以生成两个子节点：n + 5，n * 3，我们希望找到所有能到达 1024 的路径。
 */
function findWays(target: number) {
    const res: number [][] = []

    function dfs(sum: number, path: number[]) {
        // 剪枝
        if (sum > target) return
        if (sum === target) {
            res.push([...path])
            return
        }
        // 左子树： ＋5
        dfs(sum + 5, [...path, sum + 5])
        // 右子树： *3
        dfs(sum * 3, [...path, sum * 3])
    }
    dfs(1, [1])
    return res
}

export {}
