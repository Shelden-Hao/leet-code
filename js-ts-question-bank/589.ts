/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 * 
 *     constructor(val?: number, children?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

/**
 * 589. N 叉树的前序遍历
 * https://leetcode.cn/problems/n-ary-tree-preorder-traversal/description/
 * @param root 根节点
 */
function preorder(root: _Node | null): number[] {
    if (root === null) return [];
    const result: number [] = [];
    function dfs(node: _Node | null) {
        if (node === null) return;
        result.push(node.val);
        for (const child of node.children) {
            dfs(child);
        }
    }
    dfs(root);
    return result;
};