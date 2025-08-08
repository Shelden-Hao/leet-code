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
 * 102. 二叉树的层序遍历
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/description/
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

/*
* 错误使用队列：
   for (let i = 0; i < len; i++) {
       if (level[i].left) level.push(level[i].left!)
       if (level[i].right) level.push(level[i].right!)
       levelVal.push(level[i].val)
       level.shift()
   }
* 假设 level = [A, B, C]，len = 3，我们开始 for 循环：
  i = 0，处理 level[0] → shift() 删除了 A，数组变成 [B, C]
  i = 1，此时 level[1] 实际是 C（因为 B 在 level[0] 位置），B 被跳过。
*/

export {}
