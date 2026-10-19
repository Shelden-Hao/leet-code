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

class _Node {
    val: number
    children: _Node[]

    constructor(val?: number, children?: _Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.children = (children===undefined ? [] : children)
    }
}

/**
 * 559. N 叉树的最大深度
 * https://leetcode.cn/problems/maximum-depth-of-n-ary-tree/description/
 * @param root 根节点
 * @description dfs 深度优先搜索 不断把当前节点当做根节点，然后递归子节点，每层递归加上1，也就是当前“根节点”
 */
function maxDepth(root: _Node | null): number {
    if (root === null) return 0
    if (root.children.length === 0) return 1

    let maxChildDepth = 0
    for (let child of root.children) {
        maxChildDepth = Math.max(maxChildDepth, maxDepth(child))
    }

    return 1 + maxChildDepth
};

export {}
