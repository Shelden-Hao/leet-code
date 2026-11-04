/**
 * 304. 二维区域和检索 - 矩阵不可变
 * https://leetcode.cn/problems/range-sum-query-2d-immutable/description/
 * @description
 * 303是一维数组前缀和 此题为二维数组前缀和。
 * 注意：1. 索引下标对应好。2. 二维求和相当于矩形求面积=大矩形面积-两个中等矩形面积+小矩形面积
 */
class NumMatrix {
    private preSum: number[][];

    constructor(matrix: number[][]) {
        const m = matrix.length, n = matrix[0].length;
        // preSum 的初始化需要写在构造函数内 否则会超时
        this.preSum = Array.from({ length: m + 1}, () => {
            return new Array(n + 1).fill(0)
        })
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                this.preSum[i][j] = matrix[i - 1][j - 1] + this.preSum[i - 1][j] + this.preSum[i][j - 1] - this.preSum[i - 1][j - 1]
            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        return this.preSum[row2 + 1][col2 + 1] + this.preSum[row1][col1] - this.preSum[row1][col2 + 1] - this.preSum[row2 + 1][col1]
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

// 巨大坑bug:
// 错误代码：const preSum: number[][] = new Array(matrix.length + 1).fill(new Array(this.matrix[0].length + 1).fill(0))
// 填充的是同一个数组引用，导致 preSum[0]、preSum[1]…… 全是指向 同一个数组对象！
// 所以当修改 preSum[i][j] 时，其实你是修改了所有行的第 j 列！
