/**
 * Definition for node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

/**
 * 590. N 叉树的后序遍历
 * https://leetcode.cn/problems/n-ary-tree-postorder-traversal/description/
 * @param root 根节点
 */
function postorder(root: _Node | null): number[] {
    const result: number[] = [];
    function dfs(node: _Node | null) {
        if (node === null) return;
        for (const child of node.children) {
            dfs(child);
        }
        result.push(node.val);
    }
    dfs(root);
    return result;
};