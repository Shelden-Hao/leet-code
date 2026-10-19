/**
 * 695. 岛屿的最大面积
 * https://leetcode.cn/problems/max-area-of-island/description/
 * @param grid 二维数组模拟岛 1 代表面积为 1 的岛屿
 * @description dfs 深度遍历某个位置的周围，并最终返回某个位置所占小岛的面积。
 * 然后遍历所有位置，针对每一个位置进行 dfs ，比较出最大的面积。
 */
function maxAreaOfIsland(grid: number[][]): number {
    let maxArea = 0
    function dfs(row: number, col: number) {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return 0
        if (grid[row][col] === 0) return 0
        // 标记为已经访问过
        grid[row][col] = 0
        // 此时表示该位置有面积
        let area = 1
        area += dfs(row + 1, col)
        area += dfs(row, col + 1)
        area += dfs(row - 1, col)
        area += dfs(row, col - 1)
        return area
    }
    // 遍历每一个位置，针对每一个位置进行 dfs
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                let area = dfs(i, j)
                maxArea = Math.max(maxArea, area)
            }
        }
    }
    return maxArea
};

export {}
