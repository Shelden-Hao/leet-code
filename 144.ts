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
 * 二叉树的前序遍历
 * @param root 根节点
 */
function preorderTraversal(root: TreeNode | null): number[] {
    const res :number[] = []

    function traverse(node: TreeNode | null) {
        if (!node) {
            return
        }
        res.push(node.val);
        traverse(node!.left)
        traverse(node!.right)
    }
    traverse(root)
    return res;
};