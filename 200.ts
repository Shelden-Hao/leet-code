/**
 * 200. 岛屿数量
 * https://leetcode.cn/problems/number-of-islands/description/
 * @param grid 岛屿二维数组
 * @description 遍历二维数组，找到一个'1'岛屿，然后深度优先搜索找到周围所有的'1'，然后使他们沉底为'0'，退出深度优先搜索，这个过程为岛屿数量 count+1。
 * 每一次遍历到岛屿再递归，直到所有二维数组元素遍历完成，结束。
 */
function numIslands(grid: string[][]): number {
    if (!grid) return 0
    const row = grid.length
    const col = grid[0].length
    if (row === 0 || col === 0) return 0
    let count = 0
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j)
                count++
            }
        }
    }

    function dfs(i: number, j: number) {
        if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === '0') {
            return
        }
        grid[i][j] = '0'
        dfs(i - 1, j)
        dfs(i, j - 1)
        dfs(i + 1, j)
        dfs(i, j + 1)
    }

    return count
};
