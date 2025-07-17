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
 * 二叉树的后序遍历
 * @param root 根节点
 */
function postorderTraversal(root: TreeNode | null): number[] {
    const res:number[] = []
    function traverse(node: TreeNode | null) {
        if (!node) return
        traverse(node.left)
        traverse(node.right)
        res.push(node.val)
    }
    traverse(root)
    return res
};