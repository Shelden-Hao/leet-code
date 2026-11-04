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
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    // 没有节点 直接返回
    if (!root) return
    const stack = [root]
    let previous: TreeNode | null = null
    // 使用栈来代替递归 （递归实际上也是函数调用栈）
    while (stack.length) {
        const current = stack.pop()!

        // 连接成链表
        if (previous) {
            previous.right = current
            previous.left = null
        }

        const left = current.left
        const right = current.right
        // 栈先进后出 所以先放入右节点 后弹出右节点
        if (right) {
            stack.push(right);
        }
        if (left) {
            stack.push(left)
        }

        // 保留当前弹出的节点 作为下一次递归/循环的前置节点
        previous = current;
    }
};