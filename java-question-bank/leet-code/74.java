/**
 * [74. 搜索二维矩阵](https://leetcode.cn/problems/search-a-2d-matrix/)
 */
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int n = matrix.length;
        int m = matrix[0].length;
        // 把二维数组当成一维有序数组做二分，mid -> (mid / m, mid % m)
        int left = 0;
        int right = n * m - 1;
        while (left <= right) {
            int mid = left + (right - left >> 1);
            int v = matrix[mid / m][mid % m];
            if (v == target) return true;
            else if (v > target) right = mid - 1;
            else left = mid + 1;
        }
        return false;
    }
}
