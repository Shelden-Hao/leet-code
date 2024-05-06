/**
 * 后序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root, res = []) {
    // 简单的递归可以用栈来模拟 实现非递归（迭代）法遍历
    if(!root) return res;
    const stack = [root];
    let cur = null;
    while(stack.length) {
        cur = stack.pop();
        res.push(cur.val);
        cur.left && stack.push(cur.left);
        cur.right && stack.push(cur.right);
    }
    return res.reverse();
};