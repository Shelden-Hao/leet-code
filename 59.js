/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function(n) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let top = 0, bottom = n - 1;
    let left = 0, right = n - 1;
    let num = 1;

    while (num <= n * n) {
        // 从左到右填充
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;

        // 从上到下填充
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;

        // 从右到左填充
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            bottom--;
        }

        // 从下到上填充
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }
    }

    return matrix;
};
