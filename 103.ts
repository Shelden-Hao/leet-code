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
 * 103. 二叉树的锯齿形层序遍历
 * https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/description/
 * @param root 根节点
 * @description 相对于层序遍历，多一个奇偶层数的判断(也可以使用一个Boolean值判断从做到右还是从右到左)
 */
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (root === null) return []
    const res: number[][] = []
    const queue: TreeNode[] = [root]
    let level = 1
    while (queue.length) {
        const path: number[] = []
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const current = queue.shift()!;
            path.push(current.val)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        if (level % 2 === 0) {
            // 偶数
            res.push(path.reverse())
        } else {
            res.push(path);
        }
        level++
    }
    return res
};

export {}
