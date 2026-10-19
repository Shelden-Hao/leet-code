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
 * 236. 二叉树的最近公共祖先
 * https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/description/
 * @param root 根节点
 * @param p 一个节点
 * @param q 另一个节点
 * @description 递归 dfs。
 * 如果 root 恰好是 p 或 q，那么 root 就是最近公共祖先。否则在左右子树中找：
 * - p、q 分别在 root 的 左右子树中 → 最近公共祖先就是 root。
 * - p、q 都在 左子树 → 结果在左子树。
 * - p、q 都在 右子树 → 结果在右子树。
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    // 当前节点 为空、为q、为p 都返回当前节点
    if (root === null || root === p || root === q) {
        return root
    }
    // 寻找一下是否 q 或者 p 在左子树(相对根而言)
    let left = lowestCommonAncestor(root.left, p, q)
    // 寻找一下是否 q 或者 p 在右子树(相对根而言)
    let right = lowestCommonAncestor(root.right, p, q)
    // p q 分别在左右子树，返回当前节点
    if (left !== null && right !== null) {
        return root
    }
    // 只有左子树找到，返回左子树；只有右子树找到，返回右子树；如果左右子树都没有找到，返回空节点 null（直接返回 right 同时包含这种情况）
    return left !== null ? left : right
};

// 思路补充：
// 1. 当前节点是空节点，直接返回空节点
// 2. 当前节点是 p 或者 q，则不需要继续递归，直接返回当前节点（因为最近公共祖先一定在其他树或者，自己的祖先节点，一定不是自己的子孙节点）
// 3. 如果分别位于左右子树，则最近公共祖先就是当前节点（也就是两颗子树的父组件）
// 4. 如果只有左子树找到了，那么返回递归左子树的结果即可，

export {}
