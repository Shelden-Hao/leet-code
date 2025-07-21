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
 * 二叉树的层序遍历
 * @param root
 */
function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return []
    const res :number[][] = []
    // 使用队列结构一层一层处理
    const queue : TreeNode[] = [root]
    // 遍历队列 依次出队
    while (queue.length) {
        const levelQueue: number[] = []
        const len = queue.length
        // 逐层获取节点数组
        // 后续会不断添加新的元素到队尾 所以需要使用for固定循环次数 使其只是遍历当前层级
        for (let i = 0; i < len; i++) {
            // 依次访问队头
            const current = queue.shift()!
            levelQueue.push(current.val)
            // 然后添加左右子节点到队尾
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        // 将该层节点添加
        res.push(levelQueue)
    }
    return res;
};