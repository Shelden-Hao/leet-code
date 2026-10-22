/**
 * [48. 旋转图像](https://leetcode.cn/problems/rotate-image/)
 */
class Solution {
    public void rotate(int[][] matrix) {
        int n = matrix.length;
        // 先上下翻转，再沿主对角线转置，等价于顺时针旋转 90 度
        for (int i = 0; i < n / 2; i++) {
            int[] t = matrix[i];
            matrix[i] = matrix[n - i - 1];
            matrix[n - i - 1] = t;
        }
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                int t = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = t;
            }
        }
    }
}
