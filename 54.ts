/**
 * 螺旋矩阵(顺时针遍历螺旋矩阵)
 * @param matrix 螺旋矩阵（二维数组）
 * @description 一圈四种遍历情况 所以可设置四个变量作为边界值判断
 */
function spiralOrder(matrix: number[][]): number[] {
    if (matrix.length === 0) return []

    let top =0
    let left = 0
    let bottom = matrix.length - 1
    let right = matrix[0].length - 1
    const res: number[] = []

    while (left <= right && top <= bottom) {
        // 从左到右
        for (let i = left; i <= right ; i++) {
            res.push(matrix[top][i])
        }
        top++

        // 从上到下
        for (let i = top; i <= bottom ; i++) {
            res.push(matrix[i][right])
        }
        right--

        // 从右到左
        if (top <= bottom) {
            for (let i = right; i >= left ; i--) {
                res.push(matrix[bottom][i])
            }
            bottom--
        }

        // 从下到上
        if (left <= right) {
            for (let i = bottom; i >= top ; i--) {
                res.push(matrix[i][left])
            }
            left++
        }
    }

    return res
};