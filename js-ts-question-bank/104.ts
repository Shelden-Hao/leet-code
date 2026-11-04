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
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/**
 * 104. 二叉树的最大深度
 * @param root 根节点
 * @description 递归。加一表示加上当前这一层级（一层高度）。
 * 可以直接思考最后一层（深度为一），具有节点，但是没有left和right，所以max为0，然后再加上一，刚好为该层深度。
 */
function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0
    // 左子树压入栈
    let leftDeep = maxDepth(root.left)
    // 右子树压入栈
    let rightDeep = maxDepth(root.right)
    // 返回当前层级最大值（深度） 每次加的1都是当前层这一层级
    return Math.max(leftDeep, rightDeep) + 1
};

export {}
