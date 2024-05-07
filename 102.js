/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = []
    let queue = []
    if (!root) {
        return res
    }
    queue.push(root);
    while (queue.length) {
        // 当前层的节点
        let temp = []
        // 需要先保存一下 length 因为 在获取子节点的时候会改变 queue.length
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let node = queue.shift()
            temp.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(temp)
    }
    return res
};