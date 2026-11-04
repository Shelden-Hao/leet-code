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
 * 101. 对称二叉树
 * https://leetcode.cn/problems/symmetric-tree/description/
 * @param root 根节点
 * @description 根节点的 左子树 和 右子树 是镜像对称的。递归地检查下去即可。
 * - 左子树的左孩子 = 右子树的右孩子
 * - 左子树的右孩子 = 右子树的左孩子
 */
// 方法一 - 递归
// function isSymmetric(root: TreeNode | null): boolean {
//     if (root === null) return true
//     function isMirror(node1: TreeNode | null, node2: TreeNode|null): boolean {
//         if (node1 === null && node2 === null) return true
//         if (node1 === null || node2 === null) return false
//         if (node1.val !== node2.val) return false
//         // 此时看来node1和node2相同，则需要进一步判断其子树节点，所以继续递归自身
//         return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
//     }
//     return isMirror(root.left, root.right)
// };

// 方法二 - 队列
function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) return true
    const queue: (TreeNode | null)[] = []
    queue.push(root.left)
    queue.push(root.right)
    while (queue.length > 0) {
        const node1 = queue.shift()!
        const node2 = queue.shift()!
        if (node1 === null && node2 === null) continue
        if (node1 === null || node2 === null) return false
        if (node1.val !== node2.val) return false

        queue.push(node1.left)
        queue.push(node2.right)
        queue.push(node1.right)
        queue.push(node2.left)
    }
    return true
};

export {}
