/**
 * 1380. 矩阵中的幸运数
 * https://leetcode.cn/problems/lucky-numbers-in-a-matrix/description/
 * @param matrix
 */
function luckyNumbers(matrix: number[][]): number[] {
    const m = matrix.length, n = matrix[0].length
    const res: number[] = []
    for (let i = 0; i < m; i++) {
        // 寻找该行中的最小值和这个值的列索引
        let minVal = Infinity, colIndex = -1
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] < minVal) {
                minVal = matrix[i][j]
                colIndex = j
            }
        }

        // 判断是否是列的最大值
        let isMax = true
        for (let k = 0; k < m; k++) {
            if (matrix[k][colIndex] > minVal) {
                isMax = false
                break
            }
        }
        if (isMax) res.push(minVal)
    }
    return res
};
