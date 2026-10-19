/**
 * 240. 搜索二维矩阵 II
 * @param matrix 二维数组
 * @param target 查找目标值
 * @returns {boolean} 是否能够找到
 */
function searchMatrix(matrix: number[][], target: number): boolean {
    if (matrix.length === 0 || matrix[0].length === 0) return false;
    let rows = matrix.length;
    let cols = matrix[0].length;
    // 从右上角开始查找，因为右上角刚好为每行的最大值和每列的最小值，可以最快速缩小查找范围
    let row = 0;
    let col = cols - 1;
    while (row < rows && col >= 0) {
        const current = matrix[row][col];
        if (current === target) {
            return true;
        } else if (current < target) {
            row++;
        } else {
            col--;
        }
    }
    return false;
};