/**
 * 1091. 二进制矩阵中的最短路径
 * https://leetcode.cn/problems/shortest-path-in-binary-matrix/description/
 * @param grid 二维矩阵
 * @description bfs 广度优先搜索，最适合做 “无权最短路径问题”， 通过入队出队扩散。
 * 注意：队列里存放坐标和当前路径长度 [x, y, dist]。
 */
function shortestPathBinaryMatrix(grid: number[][]): number {
    const n = grid.length
    // 起点或终点被堵死，直接返回 -1
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
        return -1
    }
    // 八个移动方向
    const dirs = [
        [1, 0], [1, 1], [0, 1], [-1, 1],
        [-1, 0], [-1, -1], [0, -1], [1, -1]
    ]
    // bfs 队列 存 [x, y, 当前路径长度]
    const queue: [number, number, number][] = [[0, 0, 1]]
    // 访问标记
    const visited = Array.from({length: n}, () => Array(n).fill(false))
    while (queue.length > 0) {
        const [x, y, dist] = queue.shift()!
        // 到达终点，直接返回路径长度
        if (x === n - 1 && y === n - 1) {
            return dist
        }
        // 遍历八个方向
        for (let [dx, dy] of dirs) {
            const nx = x + dx
            const ny = y + dy
            if (nx >= 0 && nx < n && ny >= 0 && ny < n
                && grid[nx][ny] === 0 && visited[nx][ny] === false
            ) {
                visited[nx][ny] = true
                queue.push([nx, ny, dist + 1])
            }
        }
    }
    return -1
};
