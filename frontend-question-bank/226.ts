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

// 226. 翻转二叉树 - 递归（前置准备）=> 此时这个函数的做法也可以直接通过，只是比较丑陋（方法零）
// 每轮都会发生节点的交换，但是返回值，除了第一次有用，后面都没用，所以可以优化返回值为传入的节点，并接收给上层节点。=> 见方法一。
// function invertTree(root: TreeNode | null): TreeNode | null {
//     if (root === null) return null
//     let right = root.right
//     let left = root.left
//     root.left = right
//     root.right = left
//     invertTree(root.left)
//     invertTree(root.right)
//     return root
// };

/**
 * 226. 翻转二叉树 - 递归（方法一）
 * @param root 根节点
 */
function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) return null
    // 可以发现整个翻转的过程中
    // 根、左节点、右节点 三者的操作完全相同 所以直接递归除了根之外的节点
    const left = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(left)
    return root
};

/**
 * 226. 翻转二叉树 - 栈结构（方法二）
 * @param root 根节点
 */
// function invertTree(root: TreeNode | null): TreeNode | null {
//     if (root === null) return null
//
//     const stack = [root]
//     while (stack.length) {
//         const current = stack.pop()!
//
//         // 交换 当前根、左节点、右节点
//         const left = current.left
//         current.left = current.right
//         current.right = left
//
//         // 添加子节点到栈中 后续的每一次弹出都会对弹出的节点及其左右子节点进行交换
//         if (current.left) {
//             stack.push(current.left)
//         }
//         if (current.right) {
//             stack.push(current.right)
//         }
//     }
//     return root
// };

export {}
