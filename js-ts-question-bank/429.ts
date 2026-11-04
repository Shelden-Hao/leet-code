/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     
 *     constructor(v: number) {
 *         this.val = v;
 *         this.children = [];
 *     }
 * }
 */

class _Node {
    val: number
    children: _Node[]
    
    constructor(v: number) {
        this.val = v;
        this.children = [];
    }
}

/**
 * 429. N 叉树的层序遍历
 * @param root 根节点
 */
function levelOrder(root: _Node | null): number[][] {
	if (root === null) return [];
    const result: number[][] = [];
    const queue: _Node[] = [root];
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel: number[] = [];
        for (let i  = 0; i < levelSize; i++) {
            const current = queue.shift()!;
            currentLevel.push(current.val);
            for (const child of current.children) {
                queue.push(child);
            }
        }
        result.push(currentLevel);
    }
    return result;
};