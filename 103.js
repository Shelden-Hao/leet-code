/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * 1. queue 存储当前层的节点 作为最外层的遍历条件
 * 2. 分别设置当前层的节点数量 存储当前层的节点 将新的节点加入队列
 * 3. 将每一层的节点加入结果集
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    // 初识队列
    const queue = [root];
    // 添加节点方向是否是从左到右
    let leftToRight = true;
    // 结果集
    const result = [];
    // 当前队列长度大于0
    while (queue.length > 0) {
        // 当前层级节点数量
        const levelSize = queue.length;
        // 当前层级节点集合
        const levelNodes = [];
        for (let i = 0; i < levelSize; i++) {
            // 出队，并获取当前节点
            const node = queue.shift();
            // 当前节点加入当前层级的节点结合
            levelNodes.push(node.val);
            // 分别将左右子节点加入队列
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        // 根据题干确定加入结果集的节点方式
        if (leftToRight) {
            result.push(levelNodes);
        } else {
            result.push(levelNodes.reverse());
        }
        leftToRight = !leftToRight;
    }
    return result;
};
