/**
 * [43. 字符串相乘](https://leetcode.cn/problems/multiply-strings/)
 * 竖式乘法：乘积先累加到 res[i+j+1]，再统一从低位向高位进位
 */
class Solution {
    public String multiply(String num1, String num2) {
        if (num1.equals("0") || num2.equals("0")) return "0";
        int[] res = new int[num1.length() + num2.length()];
        for (int i = num1.length() - 1; i >= 0; i--) {
            for (int j = num2.length() - 1; j >= 0; j--) {
                res[i + j + 1] += (num1.charAt(i) - '0') * (num2.charAt(j) - '0');
            }
        }
        for (int i = res.length - 1; i > 0; i--) {
            res[i - 1] += res[i] / 10;
            res[i] %= 10;
        }
        StringBuilder sb = new StringBuilder();
        int k = res[0] == 0 ? 1 : 0;
        for (; k < res.length; k++) sb.append(res[k]);
        return sb.toString();
    }
}
