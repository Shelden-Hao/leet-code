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
 * 105. 从前序与中序遍历序列构造二叉树
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 * @param preorder 先序遍历数组
 * @param inorder 中序遍历数组
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    // 哈希表，记录 inorder 中每个值的索引
    const indexInorder = new Map<number, number>()
    inorder.forEach((value, index) => indexInorder.set(value, index))

    // 构造 [inLeft, inRight] 范围内的子树
    function helper(preLeft: number, preRight: number, inLeft: number, inRight:number):TreeNode | null {
        // 由于构造子树是闭区间，所以这里递归终止条件中不能取等
        if (preLeft > preRight || inLeft > inRight) return null

        // 在先序遍历中找到根节点的值
        const rootVal = preorder[preLeft]
        const root = new TreeNode(rootVal)
        // 根据值在中序遍历中找到根节点索引
        const inRootIndex = indexInorder.get(rootVal)!
        // 左子树节点个数
        const leftSize = inRootIndex - inLeft

        // 构建左子树
        root.left = helper(preLeft + 1, preLeft + leftSize, inLeft, inRootIndex - 1)
        // 构建右子树
        root.right = helper(preLeft + leftSize + 1, preRight, inRootIndex + 1, inRight)

        return root
    }
    return helper(0, preorder.length - 1, 0, inorder.length - 1)
};

export {}
