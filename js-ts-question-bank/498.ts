/**
 * 498. 对角线遍历
 * https://leetcode.cn/problems/diagonal-traverse/description/
 * @param mat 二维矩阵
 * @description 每条对角线上的元素 行下标 + 列下标 = 固定值。遍历所有可能的 sum = i + j （范围 0 到 m+n-2）。
 * 每个对角线的元素坐标 (i, sum-i)，要保证 i 在 0 <= i < m，sum-i 在 0 <= sum-i < n。
 * 如果遇到奇偶，做特殊处理。
 */
function findDiagonalOrder(mat: number[][]): number[] {
    const m = mat.length
    const n = mat[0].length
    const result: number[] = []

    for (let sum = 0; sum < m + n - 1; sum++) {
        const temp: number[] = []
        for (let i = 0; i < m; i++) {
            let j = sum - i
            if (j >= 0 && j < n) {
                temp.push(mat[i][j])
            }
        }

        if (sum % 2 === 0) {
            temp.reverse()
        }

        result.push(...temp)
    }
    return result
};

export {}
