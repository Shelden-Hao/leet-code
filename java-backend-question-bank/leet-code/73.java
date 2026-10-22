/**
 * [73. 矩阵置零](https://leetcode.cn/problems/set-matrix-zeroes/)
 */
class Solution {
    public void setZeroes(int[][] matrix) {
        int n = matrix.length;
        int m = matrix[0].length;
        List<Integer> row = new ArrayList<>();
        List<Integer> column = new ArrayList<>();
        // 先记录所有 0 的行列，再统一置零，避免边遍历边修改导致误判
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (matrix[i][j] == 0) {
                    row.add(i);
                    column.add(j);
                }
            }
        }
        for (Integer r : row) {
            for (int i = 0; i < m; i++) {
                matrix[r][i] = 0;
            }
        }
        for (Integer c : column) {
            for (int i = 0; i < n; i++) {
                matrix[i][c] = 0;
            }
        }
    }
}
