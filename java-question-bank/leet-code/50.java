/**
 * [50. Pow(x, n)](https://leetcode.cn/problems/powx-n/)
 * 快速幂：指数转 long 避免 Integer.MIN_VALUE 取负溢出；先算 x^|n| 最后再取倒数，避免倒数误差被连续平方放大
 */
class Solution {
    public double myPow(double x, int n) {
        long exp = n;
        return exp >= 0 ? quickMul(x, exp) : 1.0 / quickMul(x, -exp);
    }

    private double quickMul(double x, long exp) {
        double ans = 1.0;
        while (exp > 0) {
            if ((exp & 1) == 1) ans *= x;
            x *= x;
            exp >>= 1;
        }
        return ans;
    }
}
