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
 * @return {number}
 */
var maxDepth = function(root) {
    if(root == null) return 0
    let stack = [root]
    let deep = 0
    while (stack.length) {
        let len = stack.length
        deep++
        while (len) {
            let node = stack.shift()
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
            len--
        }
    }
    return deep
};