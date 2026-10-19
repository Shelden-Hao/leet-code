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
 * 98. 验证二叉搜索树
 * https://leetcode.cn/problems/validate-binary-search-tree/description/
 * @param root 根节点
 * @description 确保 左 < 根 < 右。而这个对比顺序刚好为二叉树的中序遍历顺序。
 */
function isValidBST(root: TreeNode | null): boolean {
    let pre: number | null = null
    function inorder(node: TreeNode | null): boolean {
        // 当前结果为空结束递归
        if (node === null) return true

        // 检查左子树是否合法：
        // 1. 遍历到最后为 null 合法
        // 2. 遍历到中途，pre < 当前节点 node.val 合法；否则不合法
        const leftOk = inorder(node.left)
        if (!leftOk) return false

        // 检查当前节点是否大于 pre
        if (pre !== null && node.val <= pre) return false
        pre = node.val

        // 同理检查右子树
        const rightOk = inorder(node.right)
        if (!rightOk) return false

        // 不合法情况上面都排除了，所以直接返回合法
        return true
    }

    return inorder(root)
};

export {}
