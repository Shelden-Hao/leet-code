/**
 * 74. 搜索二维矩阵
 * https://leetcode.cn/problems/search-a-2d-matrix/description/
 * @description 先对行进行二分查找，锁定行；再对该行中的列进行二分查找，锁定目标值
 * 时间复杂度：O(log(mn)) = O(log m + log n) ； 空间复杂度：O(1)
 * @param matrix 二维矩阵
 * @param target 目标值
 * @returns 是否找到
 */
function searchMatrix(matrix: number[][], target: number): boolean {
    // 1. 二分找行
    let top = 0, bottom = matrix.length - 1
    while (top <= bottom) {
        let mid = Math.floor((top + bottom) / 2)
        if (matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target) {
            // 找到目标所在行
            // 2. 在该行二分锁定目标项
            let left = 0, right = matrix[mid].length - 1
            while (left <= right) {
                const m = Math.floor((left + right) / 2)
                if (matrix[mid][m] === target) return true
                else if (matrix[mid][m] < target) left = m + 1
                else right = m - 1
            }
            return false
        } else if (matrix[mid][0] > target) {
            bottom = mid - 1
        } else {
            top = mid + 1
        }
    }
    return false
};