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
 * 199. 二叉树的右视图
 * https://leetcode.cn/problems/binary-tree-right-side-view/description/
 * @param root 根节点
 * @description 解决方法同层序遍历。
 */
function rightSideView(root: TreeNode | null): number[] {
    if (root === null) return []
    const queue: TreeNode[] =[root]
    const res: number[] =[]
    while (queue.length > 0) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const node = queue.shift()!
            if (i === len - 1) {
                res.push(node.val)
            }
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return res
};

export {}
