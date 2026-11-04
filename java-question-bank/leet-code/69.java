/**
 * [69. x 的平方根](https://leetcode.cn/problems/sqrtx/)
 * 二分找最大的 mid 使 mid*mid<=x，用 long 乘法避免溢出
 */
class Solution {
    public int mySqrt(int x) {
        int left = 0, right = x, ans = 0;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if ((long) mid * mid <= x) {
                ans = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return ans;
    }
}
